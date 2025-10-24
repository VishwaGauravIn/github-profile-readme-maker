export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username } = req.query;
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  const githubToken = process.env.GITHUB_ACCESS_TOKEN;
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    ...(githubToken && { 'Authorization': `token ${githubToken}` })
  };

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, { headers });
    
    if (response.status === 403) {
      // Rate limit hit, return success to allow fallback behavior
      return res.status(200).json({ exists: true, rateLimited: true });
    }
    
    if (response.status === 404) {
      return res.status(200).json({ exists: false });
    }
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    return res.status(200).json({ exists: true });
  } catch (error) {
    console.error('Error validating username:', error);
    // On error, return success to allow fallback behavior
    return res.status(200).json({ exists: true, error: true });
  }
}