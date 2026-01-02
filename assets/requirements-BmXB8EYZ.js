const e=`# System Requirements

Novellis is designed to be efficient. The hardware requirements depend primarily on whether you choose to use hosted cloud models or run your own local AI.

## Hosted LLM (Standard Usage)
If you are using hosted providers (e.g., OpenAI, Anthropic, Google Gemini), Novellis has very modest requirements:
- **macOS**: 10.15+ (Intel or Silicon)
- **Windows**: 10+ (64-bit)
- **RAM**: 8GB
- **Internet**: Required for AI features

## Local LLM (Advanced Usage)
To run local models via Ollama or other engines entirely on your own hardware, we recommend:

### macOS (Silicon Recommended)
- **Processor**: M1/M2/M3 (Pro/Max recommended for 7B+ models)
- **RAM**: 16GB unified memory (32GB+ for complex analysis)
- **Storage**: 500MB for application, plus storage for models (4-10GB per model)

### Windows (GPU Recommended)
- **GPU**: NVIDIA RTX 3060+ with 8GB VRAM (minimum for local inference)
- **Processor**: Modern i7/i9 or Ryzen 7/9
- **RAM**: 16GB minimum
`;export{e as default};
