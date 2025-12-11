# 🎮 Zentrax — AI-Powered Voice & Gesture Desktop Controller

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-blue?style=for-the-badge&logo=python" alt="Python">
  <img src="https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge&logo=windows" alt="Windows">
  <img src="https://img.shields.io/badge/AI-SmolLM2-green?style=for-the-badge" alt="SmolLM2">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</p>

**Zentrax** is an intelligent desktop automation system that lets you control your Windows PC using natural voice commands and hand gestures. It uses **SmolLM2** (via Ollama) as an AI brain to understand natural language and convert it into executable system commands.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎤 **Voice Control** | Speak naturally to control your PC - "open Chrome", "search for my PDFs", "what's my battery?" |
| 🖐️ **Gesture Control** | Use hand gestures via webcam for quick actions (swipe, pinch, thumbs up/down) |
| 🧠 **AI-Powered** | SmolLM2 LLM understands natural language variations and converts to commands |
| 🔄 **Smart Fallback** | Works without AI using intelligent pattern matching when Ollama is offline |
| 🌐 **Web UI** | Beautiful futuristic web interface for easy control |
| 🔊 **Hybrid Recognition** | Whisper (offline) + Google Speech API (fallback) for reliable transcription |

---

## 📋 Table of Contents

- [Requirements](#-requirements)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Usage Guide](#-usage-guide)
- [Voice Commands](#-voice-commands)
- [Gesture Controls](#-gesture-controls)
- [Configuration](#️-configuration)
- [Troubleshooting](#-troubleshooting)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)

---

## 💻 Requirements

### Minimum Requirements
- **OS:** Windows 10/11
- **Python:** 3.8 or higher
- **RAM:** 4GB minimum (8GB recommended for Whisper)
- **Microphone:** Any USB or built-in microphone
- **Webcam:** Required for gesture mode (optional)

### Optional (Recommended)
- **Ollama:** For AI-powered natural language understanding
- **NVIDIA GPU:** For faster Whisper transcription

---

## 📥 Installation

### Step 1: Clone the Repository

```powershell
git clone https://github.com/yourusername/Zentrax.git
cd Zentrax
```

### Step 2: Create Virtual Environment

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

### Step 3: Install Dependencies

```powershell
# Upgrade pip
python -m pip install --upgrade pip

# Install all requirements
pip install -r requirements.txt
```

### Step 4: Install PyAudio (Windows)

PyAudio is required for microphone access. Use one of these methods:

**Method A - Using pipwin (Recommended):**
```powershell
pip install pipwin
pipwin install pyaudio
```

**Method B - Manual wheel installation:**
1. Download from: https://www.lfd.uci.edu/~gohlke/pythonlibs/#pyaudio
2. Install: `pip install PyAudio‑0.2.14‑cp311‑cp311‑win_amd64.whl`

### Step 5: Install Ollama + SmolLM2 (Optional but Recommended)

For the best natural language understanding:

```powershell
# Run the setup script
.\setup_ollama.ps1

# Or manually:
# 1. Download Ollama from https://ollama.ai
# 2. Install and run: ollama pull smollm2
# 3. Start the server: ollama serve
```

### Step 6: Install Whisper (Optional - for offline speech recognition)

```powershell
pip install openai-whisper

# For CPU-only:
pip install torch --index-url https://download.pytorch.org/whl/cpu

# For NVIDIA GPU (faster):
pip install torch --index-url https://download.pytorch.org/whl/cu118
```

---

## 🚀 Quick Start

### Option 1: Command Line

```powershell
# Activate virtual environment
.\.venv\Scripts\Activate.ps1

# Run Zentrax
python main.py
```

### Option 2: Web UI

```powershell
# Start the web interface
.\start_ui.ps1
```

Then open http://localhost:8765 in your browser.

### Option 3: Windows Automation Only (Testing)

```powershell
# Test the Windows automation module directly
python windows_automation.py
```

---

## 📖 Usage Guide

### Starting the Application

1. **Activate the environment:**
   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```

2. **Run Zentrax:**
   ```powershell
   python main.py
   ```

3. **Wait for initialization:**
   - Camera will open (for gesture mode)
   - Microphone will be detected
   - AI model will connect (if Ollama is running)

### Wake Phrase

The default wake phrase is **"hello"**. Say "hello" followed by your command:

> "Hello, open Chrome"  
> "Hello, what is my battery percentage?"  
> "Hello, search for PDFs"

### Switching Modes

| Command | Action |
|---------|--------|
| "Switch to voice mode" | Enable voice-only control |
| "Switch to gesture mode" | Enable gesture-only control |
| "Exit program" / "Quit" | Close Zentrax |

---

## 🎤 Voice Commands

### Application Control

| Say This | What Happens |
|----------|--------------|
| "Open Chrome" | Opens Google Chrome |
| "Open Notepad" | Opens Notepad |
| "Open VS Code" | Opens Visual Studio Code |
| "Open Calculator" | Opens Calculator |
| "Open File Explorer" | Opens Windows Explorer |
| "Open Task Manager" | Opens Task Manager |
| "Close window" | Closes current window |
| "Minimize" | Minimizes current window |
| "Maximize" | Maximizes current window |
| "Switch window" | Alt+Tab to next window |

### File Operations

| Say This | What Happens |
|----------|--------------|
| "Open my documents folder" | Opens Documents folder |
| "Open desktop" | Opens Desktop folder |
| "Create a file called notes.txt" | Creates notes.txt on Desktop |
| "Create a folder called Projects" | Creates Projects folder |
| "Search for PDFs" | Searches for all PDF files |
| "Search for linux" | Finds files containing "linux" |
| "Open linux PDF" | Finds and opens a PDF with "linux" in name |

### Web Search

| Say This | What Happens |
|----------|--------------|
| "Search for Python tutorials in Chrome" | Opens Chrome with Google search |
| "Google machine learning" | Searches "machine learning" in browser |
| "Search YouTube in browser" | Opens browser with YouTube search |

### System Information

| Say This | What Happens |
|----------|--------------|
| "What is battery percentage?" | Shows battery level |
| "What time is it?" | Shows current time |
| "What's the date?" | Shows current date |
| "System info" | Shows battery, time, date |

### System Control

| Say This | What Happens |
|----------|--------------|
| "Take a screenshot" | Captures screen |
| "Volume up" | Increases volume |
| "Volume down" | Decreases volume |
| "Mute" | Toggles mute |
| "Lock screen" | Locks computer |
| "Scroll up/down" | Scrolls the page |

---

## 🖐️ Gesture Controls

| Gesture | Action |
|---------|--------|
| ✋ **Open Palm** | Scroll Up |
| ✊ **Closed Fist** | Scroll Down |
| 👍 **Thumbs Up** | Volume Up |
| 👎 **Thumbs Down** | Volume Down |
| 👈 **Swipe Left** | Previous Tab |
| 👉 **Swipe Right** | Next Tab |
| 🤏 **Pinch** | Zoom In/Out |
| ☝️ **Pointing** | Move Cursor |

Press **Q** in the camera window to exit gesture mode.

---

## ⚙️ Configuration

### Changing Wake Phrase

Edit `main.py` and find:
```python
self.wake_phrase = "hello"
```
Change to your preferred phrase.

### Microphone Selection

The app auto-detects your default microphone. To specify a different one, edit `main.py`.

### AI Model Settings

Edit `windows_command_generator.py`:
```python
OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "smollm2"  # Can change to other Ollama models
```

### Adding Custom App Shortcuts

Edit the `app_mappings` dictionary in `windows_command_generator.py`:
```python
self.app_mappings = {
    "spotify": "spotify.exe",
    "discord": "discord.exe",
    # Add your apps here
}
```

---

## 🔧 Troubleshooting

### "No microphone found"

1. Check Windows audio settings
2. Try installing sounddevice: `pip install sounddevice`
3. Reinstall PyAudio using pipwin

### "Ollama connection failed"

1. Make sure Ollama is installed: https://ollama.ai
2. Pull the model: `ollama pull smollm2`
3. Start the server: `ollama serve`
4. **Don't worry!** The app works without Ollama using pattern matching

### "ModuleNotFoundError: mediapipe"

```powershell
pip install mediapipe
```

### "Whisper model fails to load"

1. Ensure you have enough RAM (4GB+ for small model)
2. Install correct PyTorch version for your system
3. The app will fall back to Google Speech API

### Voice commands not recognized

1. Speak clearly after the wake phrase
2. Wait for the "Listening..." indicator
3. Try simpler commands first: "open chrome"
4. Check your microphone volume in Windows settings

### Camera not working for gestures

1. Check if another app is using the camera
2. Try disconnecting and reconnecting the webcam
3. Grant camera permissions in Windows Settings

---

## 📁 Project Structure

```
Zentrax/
├── main.py                      # Main entry point - voice/gesture control
├── windows_command_generator.py # AI command generation (SmolLM2/Pattern matching)
├── command_executor.py          # Executes Windows commands
├── windows_automation.py        # Standalone CLI for testing
├── whisper_handler.py           # Whisper speech recognition
├── websocket_server.py          # WebSocket server for Web UI
├── requirements.txt             # Python dependencies
├── setup_ollama.ps1             # Ollama installation script
├── start_ui.ps1                 # Start web interface script
├── frontend/                    # Web UI files
│   ├── index.html
│   ├── style.css
│   └── script.js
└── training_data/               # Training data for gestures/voice
    ├── gestures/
    └── voice_commands/
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Ideas for Contributions
- Add more gesture types
- Improve voice command recognition
- Add support for more applications
- Create themes for the Web UI
- Add Linux/macOS support

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Ollama](https://ollama.ai) - Local LLM runtime
- [SmolLM2](https://huggingface.co/HuggingFaceTB/SmolLM2-1.7B) - Lightweight language model
- [OpenAI Whisper](https://github.com/openai/whisper) - Speech recognition
- [MediaPipe](https://mediapipe.dev) - Hand gesture detection
- [PyAutoGUI](https://pyautogui.readthedocs.io) - Desktop automation

---

<p align="center">
  Made with ❤️ by the Zentrax Team
</p>
