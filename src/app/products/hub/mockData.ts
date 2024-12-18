export const mockServers = [
  {
    "id": "brave-search",
    "title": "Brave Search",
    "description": "Web and local search using Brave's Search API",
    "tags": ["web search", "local search"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/brave-search.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": { "BRAVE_API_KEY": "YOUR_API_KEY_HERE" }
    }
  },
  {
    "id": "puppeteer",
    "title": "Puppeteer",
    "description": "Browser automation and web scraping",
    "tags": ["browser automation", "web scraping"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/puppeteer.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  },
  {
    "id": "fetch",
    "title": "Fetch Webpage",
    "description": "Web content fetching and conversion for efficient LLM usage",
    "tags": ["web scraping"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/fetch.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  },
  {
    "id": "everart",
    "title": "EverArt",
    "description": "AI image generation using various models",
    "tags": ["image generation"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/everart.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-everart"],
      "env": { "EVERART_API_KEY": "YOUR_API_KEY_HERE" }
    }
  },
  {
    "id": "filesystem",
    "title": "Filesystem",
    "description": "Secure file operations with configurable access controls",
    "tags": ["file operation"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/filesystem.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "$ALLOWED_DIRS|path$"]
    }
  },
  {
    "id": "git",
    "title": "Git",
    "description": "Tools to read, search, and manipulate Git repositories",
    "tags": ["git"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/git.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "$REPO_PATH|path$"]
    }
  },
  {
    "id": "sequential-thinking",
    "title": "Sequential Thinking",
    "description": "Dynamic and reflective problem-solving through thought sequences",
    "tags": ["thinking"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/sequential-thinking.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  },
  {
    "id": "slack",
    "title": "Slack",
    "description": "Channel management and messaging capabilities",
    "tags": ["slack"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/slack.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-bot-token",
        "SLACK_TEAM_ID": "T01234567"
      }
    }
  },
  {
    "id": "memory",
    "title": "Knowledge Graph Memory",
    "description": "Knowledge graph-based persistent memory system",
    "tags": ["memory"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/memory.svg",
    "publishDate": "2024-12-08T18:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  },
  {
    "id": "time",
    "title": "Timezone",
    "description": "Time and timezone conversion capabilities",
    "tags": ["time"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/time.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "uvx",
      "args": ["mcp-server-time"]
    }
  },
  {
    "id": "google-maps",
    "title": "Google Maps",
    "description": "Location services, directions, and place details",
    "tags": ["location"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/google-maps.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-google-maps"],
      "env": { "GOOGLE_MAPS_API_KEY": "<YOUR_API_KEY>" }
    }
  },
  {
    "id": "aws-kb-retrieval",
    "title": "AWS KB Retrieval",
    "description": "Retrieval from AWS Knowledge Base using Bedrock Agent Runtime",
    "tags": ["knowledge base"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/aws-kb-retrieval.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-aws-kb-retrieval"],
      "env": {
        "AWS_ACCESS_KEY_ID": "<YOUR_ACCESS_KEY_ID>",
        "AWS_SECRET_ACCESS_KEY": "<YOUR_SECRET_ACCESS_KEY>",
        "AWS_REGION": "<YOUR_REGION>"
      }
    }
  },
  {
    "id": "github",
    "title": "Github",
    "description": "Repository management, file operations, and GitHub API integration",
    "tags": ["git", "github"],
    "creator": "Official",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/github.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_GITHUB_TOKEN>" }
    }
  },
  {
    "id": "todoist",
    "title": "Todoist",
    "description": "Interact with Todoist to manage your tasks.",
    "tags": ["todoist"],
    "creator": "abhiz123",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/todoist.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@abhiz123/todoist-mcp-server"],
      "env": { "TODOIST_API_TOKEN": "your_api_token_here" }
    }
  },
  {
    "id": "linear",
    "title": "Linear",
    "description": "Allows LLM to interact with Linear's API for project management, including searching, creating, and updating issues.",
    "tags": ["linear"],
    "creator": "jerhadf",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/linear.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-linear"],
      "env": { "LINEAR_API_KEY": "your_api_key_here" }
    }
  },
  {
    "id": "mcp-pandoc",
    "title": "Pandoc",
    "description": "MCP server for seamless document format conversion using Pandoc, supporting Markdown, HTML, and plain text, with other formats like PDF, csv and docx in development.",
    "tags": ["file operation"],
    "creator": "vivekVells",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/pandoc.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "uvx",
      "args": ["mcp-pandoc"]
    }
  },
  {
    "id": "kubernetes",
    "title": "Kubernetes",
    "description": "Connect to Kubernetes cluster and manage pods, deployments, and services.",
    "tags": ["kubernetes"],
    "creator": "Flux159",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/kubernetes.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["mcp-server-kubernetes"]
    }
  },
  {
    "id": "windows-cli",
    "title": "Windows CLI",
    "description": "MCP server for secure command-line interactions on Windows systems, enabling controlled access to PowerShell, CMD, and Git Bash shells.",
    "tags": ["windows"],
    "creator": "SimonB97",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/windows-cli.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@simonb97/server-win-cli"]
    }
  },
  {
    "id": "twitter-mcp",
    "title": "X(Twitter)",
    "description": "Interact with twitter API. Post tweets and search for tweets by query.",
    "tags": ["twitter"],
    "creator": "EnesCinr",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/twitter-mcp.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@enescinar/twitter-mcp"],
      "env": {
        "API_KEY": "your_api_key_here",
        "API_SECRET_KEY": "your_api_secret_key_here",
        "ACCESS_TOKEN": "your_access_token_here",
        "ACCESS_TOKEN_SECRET": "your_access_token_secret_here"
      }
    }
  },
  {
    "id": "youtube-transcript",
    "title": "YouTube Transcript",
    "description": "Retrieval of transcripts from YouTube videos",
    "tags": ["youtube"],
    "creator": "kimtaeyoon83",
    "logoUrl": "https://app.mcphub.net/server-configuration/image/youtube-transcript.svg",
    "publishDate": "2024-12-13T12:00:00Z",
    "rating": 5,
    "commandInfo": {
      "command": "npx",
      "args": ["-y", "@kimtaeyoon83/mcp-server-youtube-transcript"]
    }
  }
];
