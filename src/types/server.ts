export interface ServerInfo {
  id: string;
  title: string;
  description: string;
  tags: string[];
  creator: string;
  logoUrl: string;
  publishDate: string;
  rating: number;
  commandInfo: {
    command: string;
    args: string[];
    env?: { [key: string]: string | undefined };
  };
}
