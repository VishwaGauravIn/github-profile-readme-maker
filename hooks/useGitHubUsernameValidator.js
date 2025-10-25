import { useCallback } from "react";

export function useGitHubUsernameValidator() {
  const validateUsername = useCallback(async (username) => {
    try {
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const response = await fetch(`https://api.github.com/users/${username}`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (response.status === 403) {
        // Rate limit hit, allow continuation
        return { exists: true, rateLimited: true };
      }

      if (response.status === 404) {
        return { exists: false };
      }

      if (!response.ok) {
        throw new Error(`GitHub API responded with ${response.status}`);
      }

      return { exists: true };
    } catch (error) {
      console.error("Error validating username:", error);
      // On error or timeout, return success to allow fallback behavior
      return { exists: true, error: true };
    }
  }, []);

  return validateUsername;
}
