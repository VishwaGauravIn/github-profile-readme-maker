import { data as techData } from "../data/tech";

/**
 * Flattens all tech categories into one array of { label, url } objects.
 */
function getAllTech() {
  return Object.values(techData).flat();
}

/**
 * Alias map: normalised AI name → exact label in data/tech.js (UPPERCASE).
 * Add more as needed.
 */
const ALIASES = {
  // Languages
  "javascript": "JAVASCRIPT",
  "js": "JAVASCRIPT",
  "typescript": "TYPESCRIPT",
  "ts": "TYPESCRIPT",
  "python": "PYTHON",
  "py": "PYTHON",
  "java": "JAVA",
  "c": "C",
  "c#": "C#",
  "csharp": "C#",
  "c++": "C++",
  "cpp": "C++",
  "go": "GO/GOLANG",
  "golang": "GO/GOLANG",
  "rust": "RUST",
  "ruby": "RUBY",
  "php": "PHP",
  "swift": "SWIFT",
  "kotlin": "KOTLIN",
  "dart": "DART",
  "scala": "SCALA",
  "r": "R",
  "html": "HTML5",
  "html5": "HTML5",
  "css": "CSS3",
  "css3": "CSS3",
  "bash": "BASH SCRIPT",
  "shell": "BASH SCRIPT",
  "powershell": "POWERSHELL",
  "graphql": "GRAPHQL",
  "solidity": "SOLIDITY",
  "elixir": "ELIXIR",
  "haskell": "HASKELL",
  "lua": "LUA",
  "perl": "PERL",
  "clojure": "CLOJURE",
  "markdown": "MARKDOWN",

  // Hosting / Cloud
  "aws": "AWS",
  "amazon web services": "AWS",
  "azure": "AZURE",
  "microsoft azure": "AZURE",
  "gcp": "GOOGLE CLOUD",
  "google cloud": "GOOGLE CLOUD",
  "google cloud platform": "GOOGLE CLOUD",
  "vercel": "VERCEL",
  "netlify": "NETLIFY",
  "heroku": "HEROKU",
  "firebase": "FIREBASE",
  "digitalocean": "DIGITALOCEAN",
  "cloudflare": "CLOUDFLARE",
  "render": "RENDER",

  // Frameworks / Libraries
  "react": "REACT",
  "react.js": "REACT",
  "reactjs": "REACT",
  "next.js": "NEXT.JS",
  "nextjs": "NEXT.JS",
  "next": "NEXT.JS",
  "vue": "VUE.JS",
  "vue.js": "VUE.JS",
  "vuejs": "VUE.JS",
  "angular": "ANGULAR",
  "angularjs": "ANGULAR.JS",
  "svelte": "SVELTE",
  "nuxt": "NUXT.JS",
  "nuxt.js": "NUXT.JS",
  "express": "EXPRESS.JS",
  "express.js": "EXPRESS.JS",
  "node": "NODE.JS",
  "node.js": "NODE.JS",
  "nodejs": "NODE.JS",
  "django": "DJANGO",
  "flask": "FLASK",
  "fastapi": "FASTAPI",
  "spring": "SPRING",
  "rails": "RAILS",
  "laravel": "LARAVEL",
  "tailwind": "TAILWINDCSS",
  "tailwindcss": "TAILWINDCSS",
  "bootstrap": "BOOTSTRAP",
  "material ui": "MATERIAL UI",
  "mui": "MATERIAL UI",
  "chakra ui": "CHAKRA UI",
  "redux": "REDUX",
  "graphql apollo": "APOLLO GRAPHQL",
  "apollo": "APOLLO GRAPHQL",
  "electron": "ELECTRON.JS",
  "three.js": "THREE.JS",
  "threejs": "THREE.JS",
  "socket.io": "SOCKET.IO",
  "nestjs": "NESTJS",
  "nest.js": "NESTJS",
  "astro": "ASTRO",
  "gatsby": "GATSBY",
  "remix": "REMIX",
  "vite": "VITE",
  "webpack": "WEBPACK",
  "bun": "BUN",

  // Databases
  "mongodb": "MONGODB",
  "mongo": "MONGODB",
  "postgresql": "POSTGRESQL",
  "postgres": "POSTGRESQL",
  "mysql": "MYSQL",
  "sqlite": "SQLITE",
  "redis": "REDIS",
  "cassandra": "APACHECASSANDRA",
  "neo4j": "NEO4J",
  "firebase firestore": "FIREBASE",
  "supabase": "SUPABASE",
  "prisma": "PRISMA",
  "dynamodb": "AMAZONDYNAMODB",
  "elasticsearch": "ELASTICSEARCH",

  // DevOps / CI/CD
  "docker": "DOCKER",
  "kubernetes": "KUBERNETES",
  "k8s": "KUBERNETES",
  "git": "GIT",
  "github": "GITHUB",
  "gitlab": "GITLAB",
  "bitbucket": "BITBUCKET",
  "github actions": "GITHUB ACTIONS",
  "jenkins": "JENKINS",
  "terraform": "TERRAFORM",
  "ansible": "ANSIBLE",
  "nginx": "NGINX",

  // ML / AI
  "tensorflow": "TENSORFLOW",
  "pytorch": "PYTORCH",
  "keras": "KERAS",
  "scikit-learn": "SCIKIT-LEARN",
  "sklearn": "SCIKIT-LEARN",
  "pandas": "PANDAS",
  "numpy": "NUMPY",
  "opencv": "OPENCV",
  "hugging face": "HUGGINGFACE",
  "langchain": "LANGCHAIN",

  // Design
  "figma": "FIGMA",
  "canva": "CANVA",
  "adobe xd": "ADOBE XD",
  "photoshop": "ADOBE PHOTOSHOP",
  "illustrator": "ADOBE ILLUSTRATOR",
};

/**
 * Given an array of tech name strings from AI output,
 * returns an array of badge URL strings ready for gprmStore.data.tech.
 *
 * @param {string[]} aiTechNames - e.g. ["React", "Node.js", "Python"]
 * @returns {string[]} badge markdown URLs
 */
export function normalizeTechToUrls(aiTechNames) {
  const allTech = getAllTech();
  const results = [];

  for (const name of aiTechNames) {
    const normalised = name.trim().toLowerCase();
    const targetLabel = ALIASES[normalised];

    if (!targetLabel) continue;

    const match = allTech.find(
      (t) => t.label.toUpperCase() === targetLabel.toUpperCase()
    );

    if (match && !results.includes(match.url)) {
      results.push(match.url);
    }
  }

  return results;
}
