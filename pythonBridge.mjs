import { spawn } from 'child_process';

// Spawn the Python process
const pythonProcess = spawn('python3', ['getSensorValues.py']);

// Listen for data events from the Python process
pythonProcess.stdout.on('data', (data) => {
    const distance = parseFloat(data.toString().trim());
    console.log('Distance from Python:', distance);

    // Do further processing with the distance value if needed
});

// Listen for errors from the Python process
pythonProcess.stderr.on('data', (data) => {
    console.error(`Error from Python: ${data}`);
});

// Listen for the Python process to exit
pythonProcess.on('close', (code) => {
    console.log(`Python process exited with code ${code}`);
});

