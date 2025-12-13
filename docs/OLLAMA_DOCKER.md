# Ollama Docker Setup for Zentrax

This guide explains how to run Ollama (SmolLM2 model) in a Docker container for Zentrax.

## Prerequisites

1. **Docker Desktop** - Download from [docker.com](https://www.docker.com/products/docker-desktop/)
2. **WSL 2** (Windows) - Docker Desktop will prompt you to install if needed

## Quick Start

### Option 1: One-Click Setup (Windows)
```batch
setup_ollama_docker.bat
```

### Option 2: Manual Setup
```bash
# Start Ollama container
docker-compose up -d ollama

# Wait for startup, then pull model
docker exec zentrax-ollama ollama pull smollm2
```

## Docker Compose Commands

| Command | Description |
|---------|-------------|
| `docker-compose up -d ollama` | Start Ollama in background |
| `docker-compose stop ollama` | Stop Ollama |
| `docker-compose start ollama` | Restart stopped Ollama |
| `docker-compose down` | Remove container |
| `docker-compose logs ollama` | View logs |

## Verify Ollama is Running

```bash
# Check if Ollama is responding
curl http://localhost:11434/api/tags

# Test generation
curl http://localhost:11434/api/generate -d '{
  "model": "smollm2",
  "prompt": "Hello!"
}'
```

## GPU Support (NVIDIA)

The `docker-compose.yml` includes NVIDIA GPU support. If you have an NVIDIA GPU:

1. Install [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html)
2. The container will automatically use your GPU

**No GPU?** Edit `docker-compose.yml` and remove the `deploy.resources` section.

## Connecting Zentrax to Containerized Ollama

Zentrax automatically connects to Ollama at `http://localhost:11434`. No configuration needed!

If Ollama is on a different host:
```python
# In windows_command_generator.py
OLLAMA_URL = "http://your-host:11434/api/generate"
```

## Available Models

You can use other models instead of SmolLM2:

```bash
# Pull a different model
docker exec zentrax-ollama ollama pull llama2
docker exec zentrax-ollama ollama pull mistral
docker exec zentrax-ollama ollama pull codellama

# List available models
docker exec zentrax-ollama ollama list
```

## Troubleshooting

### Container won't start
```bash
# Check Docker status
docker ps -a

# View logs
docker-compose logs ollama
```

### Model not responding
```bash
# Restart container
docker-compose restart ollama

# Re-pull model
docker exec zentrax-ollama ollama pull smollm2
```

### Port conflict
If port 11434 is in use, edit `docker-compose.yml`:
```yaml
ports:
  - "11435:11434"  # Use port 11435 instead
```

## Resource Usage

| Resource | Approximate Usage |
|----------|-------------------|
| Disk | ~2-5 GB (model + container) |
| RAM | ~2-4 GB when running |
| GPU VRAM | ~2-4 GB (if GPU enabled) |

## Persistent Data

Model data is stored in the `ollama_data` Docker volume. To reset:
```bash
docker-compose down -v  # Removes volume too
```
