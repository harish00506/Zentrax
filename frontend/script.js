// WebSocket connection to Python backend
let ws = null;
let isAwake = false;
let currentMode = null;

// DOM Elements
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const wakeBtn = document.getElementById('wakeBtn');
const wakeTitle = document.getElementById('wakeTitle');
const modeSection = document.getElementById('modeSection');
const commandsSection = document.getElementById('commandsSection');
const logContainer = document.getElementById('logContainer');
const voiceCard = document.getElementById('voiceCard');
const gestureCard = document.getElementById('gestureCard');
const gameCard = document.getElementById('gameCard');

// Initialize WebSocket connection
function initWebSocket() {
    try {
        ws = new WebSocket('ws://localhost:8765');
        
        ws.onopen = () => {
            addLog('Connected to Zentrax backend');
            console.log('WebSocket connected');
        };
        
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            handleBackendMessage(data);
        };
        
        ws.onerror = (error) => {
            addLog('Connection error. Make sure backend is running.', 'error');
            console.error('WebSocket error:', error);
        };
        
        ws.onclose = () => {
            addLog('Disconnected from backend. Retrying...', 'warning');
            console.log('WebSocket closed. Retrying in 3s...');
            setTimeout(initWebSocket, 3000);
        };
    } catch (error) {
        console.error('Failed to initialize WebSocket:', error);
        addLog('Failed to connect. Is the backend running?', 'error');
        setTimeout(initWebSocket, 3000);
    }
}

// Handle messages from Python backend
function handleBackendMessage(data) {
    console.log('Received:', data);
    
    switch(data.type) {
        case 'status':
            updateStatus(data.status, data.mode);
            break;
        case 'log':
            addLog(data.message, data.level || 'info');
            break;
        case 'command':
            addLog(`Command executed: ${data.command}`, 'success');
            break;
        case 'error':
            addLog(data.message, 'error');
            break;
    }
}

// Send command to backend
function sendCommand(command, params = {}) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
            command: command,
            params: params
        }));
        console.log('Sent command:', command, params);
    } else {
        addLog('Not connected to backend', 'error');
    }
}

// Update status indicator
function updateStatus(status, mode = null) {
    isAwake = status === 'awake';
    currentMode = mode;
    
    // Update status indicator
    statusIndicator.className = 'status-indicator';
    
    if (!isAwake) {
        statusIndicator.classList.add('sleeping');
        statusText.textContent = 'Sleeping';
        wakeTitle.textContent = 'Activate Zentrax';
        wakeBtn.querySelector('.btn-text').textContent = 'Say "Hello Zentrax"';
        modeSection.classList.add('hidden');
        commandsSection.classList.add('hidden');
    } else {
        statusIndicator.classList.add('awake');
        if (mode === 'voice') {
            statusIndicator.classList.add('voice');
            statusText.textContent = 'Voice Mode Active';
        } else if (mode === 'gesture') {
            statusIndicator.classList.add('gesture');
            statusText.textContent = 'Gesture Mode Active';
        } else {
            statusText.textContent = 'Awake';
        }
        wakeTitle.textContent = 'Zentrax is Active';
        wakeBtn.querySelector('.btn-text').textContent = 'Say "Go to Sleep"';
        modeSection.classList.remove('hidden');
        commandsSection.classList.remove('hidden');
    }
    
    // Update mode cards
    updateModeCards();
}

// Update mode card active states
function updateModeCards() {
    [voiceCard, gestureCard, gameCard].forEach(card => {
        card.classList.remove('active');
    });
    
    if (currentMode === 'voice') {
        voiceCard.classList.add('active');
    } else if (currentMode === 'gesture') {
        gestureCard.classList.add('active');
    } else if (currentMode === 'game') {
        gameCard.classList.add('active');
    }
}

// Add log entry
function addLog(message, level = 'info') {
    const logItem = document.createElement('div');
    logItem.className = 'log-item';
    
    const time = new Date().toLocaleTimeString();
    const timeSpan = document.createElement('span');
    timeSpan.className = 'log-time';
    timeSpan.textContent = time;
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'log-message';
    messageSpan.textContent = message;
    
    // Color code by level
    if (level === 'error') {
        logItem.style.borderLeftColor = '#ff4444';
    } else if (level === 'warning') {
        logItem.style.borderLeftColor = '#ffaa00';
    } else if (level === 'success') {
        logItem.style.borderLeftColor = '#00ff88';
    }
    
    logItem.appendChild(timeSpan);
    logItem.appendChild(messageSpan);
    
    // Add to top of log
    logContainer.insertBefore(logItem, logContainer.firstChild);
    
    // Limit log entries
    while (logContainer.children.length > 50) {
        logContainer.removeChild(logContainer.lastChild);
    }
}

// Event Listeners
wakeBtn.addEventListener('click', () => {
    if (isAwake) {
        sendCommand('sleep');
        addLog('Sending sleep command...');
    } else {
        sendCommand('wake');
        addLog('Sending wake command...');
    }
});

// Mode buttons
document.querySelectorAll('.btn-mode').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const mode = e.target.closest('.btn-mode').dataset.mode;
        
        if (mode === 'voice') {
            sendCommand('switch_mode', { mode: 'voice' });
            addLog('Switching to voice control mode...');
        } else if (mode === 'gesture') {
            sendCommand('switch_mode', { mode: 'gesture' });
            addLog('Switching to gesture control mode...');
        } else if (mode === 'game') {
            sendCommand('start_game');
            addLog('Starting Hill Climb game...');
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+W to wake/sleep
    if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
        wakeBtn.click();
    }
    
    // Ctrl+1 for voice mode
    if (e.ctrlKey && e.key === '1') {
        e.preventDefault();
        if (isAwake) sendCommand('switch_mode', { mode: 'voice' });
    }
    
    // Ctrl+2 for gesture mode
    if (e.ctrlKey && e.key === '2') {
        e.preventDefault();
        if (isAwake) sendCommand('switch_mode', { mode: 'gesture' });
    }
    
    // Ctrl+3 for game
    if (e.ctrlKey && e.key === '3') {
        e.preventDefault();
        if (isAwake) sendCommand('start_game');
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    addLog('Frontend initialized. Connecting to backend...');
    initWebSocket();
    
    // Add keyboard shortcuts info to log
    setTimeout(() => {
        addLog('Keyboard shortcuts: Ctrl+W (wake/sleep), Ctrl+1 (voice), Ctrl+2 (gesture), Ctrl+3 (game)', 'info');
    }, 1000);
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        addLog('Tab hidden - connection maintained');
    } else {
        addLog('Tab visible - checking connection...');
        if (!ws || ws.readyState !== WebSocket.OPEN) {
            initWebSocket();
        }
    }
});
