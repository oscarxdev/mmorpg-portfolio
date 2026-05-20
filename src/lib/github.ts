// GitHub API utilities
import { getLanguageIcon, getLanguageColor } from "./icons";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  topics: string[];
  created_at?: string;
  private?: boolean; // Para proyectos privados destacados
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
}

export interface GitHubStats {
  yearsOfExperience: number;
  totalProjects: number;
  technologiesUsed: string[];
  totalStars: number;
  totalForks: number;
}

async function fetchGitHubAPI(url: string, token?: string): Promise<Response> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "OscarDev-Portfolio",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText} for ${url}`);
    }

    return response;
  } catch (error) {
    console.error(`GitHub API fetch failed for ${url}:`, error);
    return new Response(null, { status: 500, statusText: "Fetch failed" });
  }
}

export async function fetchGitHubRepos(
  username: string,
  token?: string
): Promise<GitHubRepo[]> {
  try {
    const response = await fetchGitHubAPI(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=50&direction=desc`,
      token
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch repositories. Status: ${response.status}`
      );
    }

    const repos: GitHubRepo[] = await response.json();
    return repos.filter((repo) => !repo.fork);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function fetchGitHubUser(username: string, token?: string): Promise<GitHubUser> {
  try {
    const response = await fetchGitHubAPI(
      `https://api.github.com/users/${username}`,
      token
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return {
      login: username,
      name: username,
      bio: "",
      public_repos: 0,
      followers: 0,
      following: 0,
      created_at: new Date().toISOString(),
      avatar_url: `https://github.com/${username}.png`,
    };
  }
}

export async function fetchGitHubStats(username: string, token?: string): Promise<GitHubStats> {
  try {
    const cacheKey = `github-stats-${username}`;
    if (typeof window !== "undefined" && window.localStorage) {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const oneHour = 60 * 60 * 1000;
        if (Date.now() - timestamp < oneHour) {
          return data;
        }
      }
    }

    const response = await fetchGitHubAPI(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`,
      token
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const allRepos: GitHubRepo[] = await response.json();
    const user = await fetchGitHubUser(username, token);

    const realRepos = allRepos.filter(
      (repo) =>
        !repo.fork &&
        repo.name !== ".github" &&
        repo.name !== `${username}.github.io`
    );

    // Años de experiencia desde el repo más antiguo (o cuenta si no hay repos)
    let oldestDate = new Date(user.created_at);
    if (realRepos.length > 0) {
      const sorted = [...realRepos].sort(
        (a, b) =>
          new Date(a.created_at || "").getTime() -
          new Date(b.created_at || "").getTime()
      );
      const firstCreated = sorted[0].created_at;
      if (firstCreated) oldestDate = new Date(firstCreated);
    }

    const yearsOfExperience = Math.max(
      1,
      Math.floor(
        (Date.now() - oldestDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
      )
    );

    const totalProjects = user.public_repos;

    // Tecnologías: lenguajes de repos + topics mapeados
    const technologies = new Set<string>();

    const techMapping: Record<string, string> = {
      react: "React",
      reactjs: "React",
      vue: "Vue.js",
      vuejs: "Vue.js",
      angular: "Angular",
      nodejs: "Node.js",
      node: "Node.js",
      typescript: "TypeScript",
      javascript: "JavaScript",
      python: "Python",
      php: "PHP",
      go: "Go",
      golang: "Go",
      rust: "Rust",
      docker: "Docker",
      mongodb: "MongoDB",
      mysql: "MySQL",
      postgresql: "PostgreSQL",
      postgres: "PostgreSQL",
      astro: "Astro",
      svelte: "Svelte",
      nextjs: "Next.js",
      nuxt: "Nuxt.js",
      express: "Express.js",
      firebase: "Firebase",
      aws: "AWS",
      tailwindcss: "TailwindCSS",
      bootstrap: "Bootstrap",
      sass: "Sass",
      scss: "Sass",
      css3: "CSS",
      html5: "HTML",
      java: "Java",
      kotlin: "Kotlin",
      swift: "Swift",
      flutter: "Flutter",
      dart: "Dart",
      webpack: "Webpack",
      vite: "Vite",
      rollup: "Rollup",
      electron: "Electron",
      unity: "Unity",
      git: "Git",
      github: "GitHub",
      api: "REST API",
      graphql: "GraphQL",
      sqlite: "SQLite",
      redis: "Redis",
      laravel: "Laravel",
      symfony: "Symfony",
      django: "Django",
      flask: "Flask",
      fastapi: "FastAPI",
      lua: "Lua",
      csharp: "C#",
      cplusplus: "C++",
      cpp: "C++",
    };

    realRepos.forEach((repo) => {
      if (repo.language) technologies.add(repo.language);
      repo.topics?.forEach((topic) => {
        const mapped = techMapping[topic.toLowerCase()];
        if (mapped) technologies.add(mapped);
      });
    });

    const totalStars = realRepos.reduce(
      (sum, repo) => sum + repo.stargazers_count,
      0
    );
    const totalForks = realRepos.reduce(
      (sum, repo) => sum + repo.forks_count,
      0
    );

    const result: GitHubStats = {
      yearsOfExperience,
      totalProjects,
      technologiesUsed: Array.from(technologies).slice(0, 20),
      totalStars,
      totalForks,
    };

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ data: result, timestamp: Date.now() })
      );
    }

    return result;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return {
      yearsOfExperience: 1,
      totalProjects: 0,
      technologiesUsed: [],
      totalStars: 0,
      totalForks: 0,
    };
  }
}
