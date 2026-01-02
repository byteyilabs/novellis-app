const e=`# LLM Connection Guide

Novellis is designed to be flexible. You can connect it to local AI models for maximum privacy, or powerful cloud models for deeper narrative analysis.

## Local Models (Privacy-First)

We recommend two main ways to run local models. Both provide an OpenAI-compatible API that Novellis can connect to.

### Ollama (CLI Users)
Ideal for users comfortable with the command line or looking for a lightweight setup on Mac/Linux.
- Download from [ollama.com](https://ollama.com)
- Default API: \`http://localhost:11434\`
- Run: \`ollama run llama3\`

### LM Studio (GUI Users)
A beautiful visual interface for discovering and running local models. Best for non-technical users.
- Download from [lmstudio.ai](https://lmstudio.ai)
- Start the "Local Server" tab
- Default API: \`http://localhost:1234/v1\`

## Cloud Providers

If you prefer higher intelligence over absolute privacy, Novellis supports major cloud providers out of the box.

- **OpenAI**: High reliability and speed. Requires an API key.
- **Anthropic (Claude)**: Exceptional at creative writing and nuanced narrative analysis.
- **DeepSeek / SiliconFlow**: Great cost-efficiency for large-scale story processing.

## How to Configure

In Novellis, go to **Settings > AI & Connectivity**. Enter your API endpoint or select a provider, then paste your API Key if required.
`;export{e as default};
