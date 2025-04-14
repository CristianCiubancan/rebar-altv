import { exec } from 'child_process';

function formatTimestamp(time) {
    const date = new Date(time);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {
        hour: hour <= 9 ? `0${hour}` : `${hour}`,
        minute: minutes <= 9 ? `0${minutes}` : `${minutes}`,
        second: seconds <= 9 ? `0${seconds}` : `${seconds}`,
    };
}

function logMessage(msg) {
    const timestamp = formatTimestamp(Date.now());
    console.log(`[${timestamp.hour}:${timestamp.minute}:${timestamp.second}] ${msg}`);
}

function execPromise(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject({ error, stderr, stdout });
                return;
            }
            resolve(stdout);
        });
    });
}

async function checkTypes() {
    const start = Date.now();
    let success = true;

    logMessage(`TypeScript Check Started`);
    try {
        // Run TypeScript compiler in noEmit mode using the check configuration
        await execPromise('npx tsc --project tsconfig.json --noEmit');
        logMessage(`TypeScript Check Completed Successfully - ${Date.now() - start}ms`);
    } catch (error) {
        logMessage(`TypeScript Check Failed - ${Date.now() - start}ms`);
        console.error(error.stdout || error.stderr);
        success = false;
    }

    return success;
}

// Run the type check
checkTypes().then((success) => {
    if (!success) {
        process.exit(1);
    }
});
