# Zentrax Web UI

A stunning, futuristic web interface for controlling Zentrax voice and gesture control system.

## Features

🎨 **Beautiful UI Design**
- Futuristic gradient animations
- Responsive design for all screen sizes
- Real-time status updates
- Animated particles background
- Smooth transitions and hover effects

🎮 **Control Features**
- Wake/Sleep Zentrax with one click
- Switch between Voice and Gesture modes
- Launch Hill Climb game
- View available commands
- Real-time activity log
- Keyboard shortcuts support

## Setup Instructions

### 1. Install Required Dependencies

```powershell
pip install websockets
```

All other dependencies should already be installed from your main project.

### 2. Start the WebSocket Server

Open a terminal in your project directory and run:

```powershell
python websocket_server.py
```

You should see:
```
Starting Zentrax WebSocket Server on localhost:8765
Open frontend/index.html in your browser to access the UI
```

### 3. Open the Web Interface

Simply open `frontend/index.html` in your web browser:

```powershell
# Using PowerShell
start frontend/index.html

# Or just double-click the file in File Explorer
```

The UI will automatically connect to the WebSocket server.

## Usage

### Wake Zentrax
1. Click the "Say 'Hello Zentrax'" button
2. Or actually say "Hello Zentrax" (if the backend is running)

### Switch Modes
Once Zentrax is awake, you can:
- Click "Activate Voice" to enable voice control mode
- Click "Activate Gesture" to enable gesture control mode
- Click "Start Game" to launch Hill Climb game

### Keyboard Shortcuts
- `Ctrl + W` - Wake/Sleep Zentrax
- `Ctrl + 1` - Switch to Voice Mode
- `Ctrl + 2` - Switch to Gesture Mode
- `Ctrl + 3` - Start Hill Climb Game

### Activity Log
The bottom section shows real-time logs of:
- Connection status
- Commands executed
- Mode changes
- System events

## File Structure

```
frontend/
├── index.html       # Main HTML structure
├── style.css        # Stunning CSS styling with animations
└── script.js        # WebSocket communication and UI logic

websocket_server.py  # Python WebSocket server connecting UI to backend
```

## Features Explained

### Status Indicator
- **Gray dot**: Sleeping
- **Green dot**: Awake
- **Blue dot**: Voice mode active
- **Purple dot**: Gesture mode active

### Mode Cards
The three main mode cards will:
- Highlight with a border when active
- Show a glow effect on hover
- Animate smoothly when clicked

### Commands Panel
Shows all available commands for:
- Voice Control (with speech examples)
- Gesture Control (with emoji indicators)

## Customization

### Change Colors
Edit `style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #00ffff;     /* Cyan glow color */
    --secondary-color: #ff00ff;   /* Magenta accent */
    --accent-color: #00ff88;      /* Green success color */
    --dark-bg: #0a0a1a;          /* Dark background */
    --card-bg: #1a1a2e;          /* Card background */
}
```

### Change WebSocket Port
Edit `script.js` line 16:

```javascript
ws = new WebSocket('ws://localhost:8765');  // Change port here
```

And `websocket_server.py` line 163:

```python
server = ZentraxWebSocketServer(host='localhost', port=8765)  # Change port here
```

### Add New Commands
1. Add button/card in `index.html`
2. Add event listener in `script.js`
3. Handle command in `websocket_server.py` `handle_command()` method

## Troubleshooting

### "Connection error. Make sure backend is running."
**Solution**: Make sure you've started `websocket_server.py` first.

### WebSocket connection fails
**Solution**: 
1. Check if port 8765 is available
2. Restart the WebSocket server
3. Refresh the browser

### UI doesn't respond to voice/gesture
**Solution**: 
1. Make sure `main.py` is running through the WebSocket server
2. Check that your camera/microphone permissions are granted
3. Ensure Zentrax is "awake" (green status indicator)

### Commands don't execute
**Solution**:
1. Verify Zentrax is awake
2. Check the activity log for errors
3. Ensure the correct mode is selected

## Browser Compatibility

✅ Chrome/Edge (Recommended)
✅ Firefox
✅ Safari
⚠️ Internet Explorer (Not supported)

## Performance Tips

1. **Keep only one browser tab open** with the UI to avoid multiple WebSocket connections
2. **Close the tab when not in use** to free up resources
3. **Use a modern browser** for best performance and animations

## Future Enhancements

Potential additions you could make:
- 📊 Voice waveform visualizer
- 📹 Live camera feed showing hand gestures
- 🎵 Music player controls integration
- 📱 Mobile app version
- 🌍 Multiple language support
- 📈 Usage statistics and analytics

## Credits

Created for the Zentrax Voice and Gesture Control System
Designed with modern web technologies and love for futuristic UIs ✨
