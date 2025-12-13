@echo off
echo ================================================
echo    ZENTRAX - OLLAMA DOCKER SETUP
echo ================================================
echo.

REM Check if Docker is installed
where docker >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERROR: Docker is not installed!
    echo.
    echo Please install Docker Desktop from:
    echo   https://www.docker.com/products/docker-desktop/
    echo.
    pause
    exit /b 1
)

REM Check if Docker is running
docker info >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERROR: Docker is not running!
    echo Please start Docker Desktop and try again.
    pause
    exit /b 1
)

echo Docker is ready!
echo.

REM Start Ollama container
echo Starting Ollama container...
echo This will download the Ollama image and SmolLM2 model.
echo First run may take 5-10 minutes depending on your internet speed.
echo.

docker-compose up -d ollama

echo.
echo Waiting for Ollama to initialize...
timeout /t 15 /nobreak >nul

REM Pull the SmolLM2 model
echo.
echo Pulling SmolLM2 model (this may take a few minutes)...
docker exec zentrax-ollama ollama pull smollm2

echo.
echo ================================================
echo    OLLAMA CONTAINER READY!
echo ================================================
echo.
echo Ollama is running at: http://localhost:11434
echo.
echo To test: curl http://localhost:11434/api/tags
echo.
echo Commands:
echo   Stop:    docker-compose stop ollama
echo   Start:   docker-compose start ollama
echo   Logs:    docker-compose logs ollama
echo   Remove:  docker-compose down
echo.
pause
