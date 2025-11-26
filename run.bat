@echo off
echo ========================================
echo Starting Indicraft Development Environment
echo ========================================
echo.

REM Check if Ollama is installed
where ollama >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Ollama is not installed or not in PATH
    echo Please install Ollama from https://ollama.ai
    pause
    exit /b 1
)

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo [1/3] Starting Ollama server...
start "Ollama Server" cmd /k "ollama serve"
timeout /t 3 /nobreak >nul

echo [2/3] Verifying Ollama is running...
timeout /t 3 /nobreak >nul
curl -s http://localhost:11434/api/tags >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [WARNING] Ollama might not be ready yet, waiting a bit longer...
    timeout /t 5 /nobreak >nul
)

echo [2.5/3] Checking if Venmathi model exists...
ollama list | findstr /C:"venmathi" >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [INFO] Creating Venmathi model from Modelfile...
    ollama create venmathi -f Modelfile
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Failed to create Venmathi model
        echo Make sure Modelfile exists in the current directory
        pause
        exit /b 1
    )
    echo [SUCCESS] Venmathi model created successfully!
) else (
    echo [OK] Venmathi model already exists
)

echo [3/3] Starting Vite development server...
start "Vite Dev Server" cmd /k "npm run dev"

echo.
echo ========================================
echo Services Started Successfully!
echo ========================================
echo.
echo Ollama Server: http://localhost:11434
echo Frontend: http://localhost:8080 (or 8081 if 8080 is busy)
echo.
echo Press any key to open the browser...
pause >nul

REM Open browser
start http://localhost:8080

echo.
echo To stop all services, close both command windows
echo or press Ctrl+C in each window
echo.
