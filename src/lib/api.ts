import type { ServerInfo } from '@/types/server';

const fetchServerById = async (id: string): Promise<ServerInfo>  =>{
  const response = await fetch(`https://registry.mcphub.io/registry/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch server');
  }
  return response.json();
}

export { fetchServerById }
