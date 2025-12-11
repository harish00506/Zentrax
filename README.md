# 🤖 Zentrax — AI-Powered Voice & Gesture Desktop Controller

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-blue?style=for-the-badge&logo=python" alt="Python">
  <img src="https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge&logo=windows" alt="Windows">
  <img src="https://img.shields.io/badge/AI-Zentrax-red?style=for-the-badge" alt="Zentrax">
  <img src="https://img.shields.io/badge/Inspired_By-Iron_Man-gold?style=for-the-badge" alt="Iron Man">
</p>

<p align="center">
  <strong>"Good morning. What would you like me to do today?"</strong>
</p>

**Zentrax** is your personal AI assistant inspired by Iron Man's FRIDAY. It controls your entire Windows PC using natural voice commands and hand gestures. Just say "Hey Zentrax" and speak naturally - Zentrax will understand and execute your commands, responding with a friendly voice!

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🤖 **Zentrax AI** | Talks back to you! Voice responses with personality, like Iron Man's FRIDAY |
| 🎤 **Voice Control** | Speak naturally - "Open Chrome", "What's my battery?", "Play next song" |
| 🖐️ **Gesture Control** | Control your PC with hand gestures via webcam |
| 🧠 **Smart AI** | SmolLM2 LLM understands natural language variations |
| 📊 **System Monitor** | Ask about battery, CPU, RAM, disk space, WiFi status |
| 🎵 **Media Control** | Play/pause, next/previous track, volume control |
| 💡 **Full PC Control** | Brightness, WiFi, Bluetooth, processes, apps, files |
| 🔊 **Voice Responses** | Zentrax speaks back with time-appropriate greetings |

---

## 🎬 Demo Commands

```
"Hey Zentrax"                         → Zentrax wakes up with a greeting
"Open Chrome"                         → Opens Google Chrome
"What's my battery percentage?"       → "Battery is at 85 percent, charging"
"Search for Python tutorials"         → Opens browser with Google search
"Play next song"                      → Skips to next media track
"Turn up the brightness"              → Increases screen brightness
"Show me running processes"           → Lists top 10 processes
"Take a screenshot"                   → Captures screen
"What time is it?"                    → "The time is 3:45 PM"
"Thank you Zentrax"                   → "You're welcome!"
"Goodbye"                             → "See you later!" (goes to sleep)
```

---

## 📋 Table of Contents

- [Requirements](#-requirements)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Usage Guide](#-usage-guide)
- [Voice Commands](#-voice-commands)
- [Gesture Controls](#-gesture-controls)
- [Zentrax Personality](#-Zentrax-personality)
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
- **Speakers:** For Zentrax's voice responses
- **Webcam:** Required for gesture mode (optional)

### Optional (Recommended)
- **Ollama:** For AI-powered natural language understanding
- **NVIDIA GPU:** For faster Whisper transcription

---

## 📥 Installation

### Step 1: Clone the Repository

```powershell
git clone https://github.com/harish00506/Zentrax.git
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

# Install Zentrax voice (text-to-speech)
pip install pyttsx3
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
   - Zentrax will greet you when ready

### Wake Phrase

The default wake phrase is **"Zentrax"**. Just say:

> "Hey Zentrax, open Chrome"  
> "Zentrax, what is my battery percentage?"  
> "Hey Zentrax, search for PDFs"

Other accepted wake phrases: "Hey Zentrax", "Hi Zentrax", "OK Zentrax", "Hello"

### Switching Modes

| Command | Action |
|---------|--------|
| "Switch to voice mode" | Enable voice-only control |
| "Switch to gesture mode" | Enable gesture-only control |
| "Goodbye" / "Go to sleep" | Zentrax goes to sleep |
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
| "Show desktop" | Minimize all windows |

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

### Web & Browser

| Say This | What Happens |
|----------|--------------|
| "Search for Python tutorials in Chrome" | Opens Chrome with Google search |
| "Google machine learning" | Searches "machine learning" in browser |
| "Open YouTube" | Opens youtube.com |
| "Open GitHub" | Opens github.com |
| "New tab" | Opens new browser tab |
| "Close tab" | Closes current tab |
| "Refresh page" | Refreshes current page |

### System Information (Zentrax speaks back!)

| Say This | What Happens |
|----------|--------------|
| "What is battery percentage?" | Zentrax: "Battery is at 85 percent, charging" |
| "What time is it?" | Zentrax: "The time is 3:45 PM" |
| "What's the date?" | Zentrax: "Today is December 11, 2025" |
| "CPU usage" | Zentrax: "CPU usage is at 23 percent" |
| "Memory status" | Zentrax: "Memory usage is at 67 percent" |
| "Disk space" | Zentrax: "Disk space is at 45 percent used" |
| "WiFi status" | Zentrax: "Connected to MyWiFi" |
| "System status" | Full system report |

### Media Control

| Say This | What Happens |
|----------|--------------|
| "Play" / "Pause" | Toggle play/pause |
| "Next song" / "Skip" | Next track |
| "Previous song" | Previous track |
| "Stop music" | Stop playback |

### Advanced Controls

| Say This | What Happens |
|----------|--------------|
| "Turn up brightness" | Increase screen brightness |
| "Turn down brightness" | Decrease screen brightness |
| "Turn on WiFi" | Enable WiFi |
| "Turn off WiFi" | Disable WiFi |
| "Open Bluetooth settings" | Open Bluetooth panel |
| "Kill Chrome" | Force close Chrome |
| "List running processes" | Show top 10 processes |
| "Empty recycle bin" | Clear trash |
| "Night light" | Open night light settings |
| "Airplane mode" | Open airplane mode settings |

### System Control

| Say This | What Happens |
|----------|--------------|
| "Take a screenshot" | Captures screen |
| "Volume up" | Increases volume |
| "Volume down" | Decreases volume |
| "Mute" | Toggles mute |
| "Lock screen" | Locks computer |
| "Scroll up/down" | Scrolls the page |
| "Shutdown" | Shutdown computer |
| "Restart" | Restart computer |

### Zentrax Interactions

| Say This | What Happens |
|----------|--------------|
| "Thank you" | Zentrax: "You're welcome!" |
| "Help" | Zentrax explains what she can do |
| "Who are you?" | Zentrax introduces herself |

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

## 🎭 Zentrax Personality

Zentrax has a FRIDAY-like personality! It responds with:

### Time-Based Greetings
- **Morning (5AM-12PM):** "Good morning! Ready to start the day?"
- **Afternoon (12PM-5PM):** "Good afternoon! How can I assist?"
- **Evening (5PM-9PM):** "Good evening! Still working hard?"
- **Night (9PM-5AM):** "Working late? I'm here to help."

### Voice Settings

Edit `friday_assistant.py` to customize:

```python
# In main.py
assistant = FridayAssistant(
    voice_enabled=True,    # Enable/disable voice
    voice_speed=175,       # Words per minute (100-250)
    voice_type="female",   # "female" or "male"
    name="Zentrax"         # Your AI's name
)
```

### Disable Voice Responses

If you prefer text-only:
```python
assistant.set_voice_enabled(False)
```

### Change Voice Speed

```python
assistant.set_voice_speed(200)  # Faster
assistant.set_voice_speed(150)  # Slower
```

---

## ⚙️ Configuration

### Changing Wake Phrase

Edit `main.py` and find:
```python
self.wake_phrase = "Zentrax"
self.wake_phrase_variants = ["Zentrax", "hey Zentrax", "hi Zentrax", ...]
```
Change to your preferred phrases.

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
