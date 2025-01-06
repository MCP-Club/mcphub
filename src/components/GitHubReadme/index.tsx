'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LoadingSpinner } from '@/components/Loading/spinner';

interface GitHubReadmeProps {
  githubUrl: string;
}

export function GitHubReadme({ githubUrl }: GitHubReadmeProps) {
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReadme() {
      try {
        setLoading(true);
        setError(null);

        // Parse GitHub URL to get owner and repo
        const url = new URL(githubUrl);
        const [owner, repo] = url.pathname.split('/').filter(Boolean);

        let response: Response;

        if (owner === "modelcontextprotocol") {
          console.log(url.pathname.split('/'))
          const parts = url.pathname.split('/').filter(Boolean);
          const subdir = parts[parts.length - 1];
          response = await fetch(
            `https://raw.githubusercontent.com/modelcontextprotocol/servers/main/src/${subdir}/README.md`
          );
          
        } else {
          // Try both main and master branches
          response = await fetch(
            `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
          );
          if (!response.ok) {
            response = await fetch(
              `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`
            );
          }
        }

        if (!response.ok) {
          throw new Error('Failed to fetch README from both main and master branches');
        }
        const content = await response.text();
        setReadme(content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load README');
      } finally {
        setLoading(false);
      }
    }

    if (githubUrl) {
      fetchReadme();
    }
  }, [githubUrl]);

  if (loading) {
    return (
      <div className="py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4 my-4">
        <p className="text-red-600 dark:text-red-400">{error}</p>
      </div>
    );
  }

  if (!readme) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
      </div>
    </div>
  );
}
