export interface ServerInfo {
  id: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  creator: string;
  logoUrl: string;
  publishDate: string;
  rating: number;
  sources: {
    github: string;
    npm: string;
  }
  commandInfo: {
    command: string;
    args: string[];
    env?: { [key: string]: string};
  };
}

export interface MCPConfig {
  id: string;
  title: string;
  description: string;
  github_url?: string;
  tags?: string[];
}

export interface SearchResult extends MCPConfig {
  id: string;
  title: string;
  description: string;
  github_url?: string;
  score: number;
}
