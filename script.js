const tasks = [
    "1.) Chef special for lunch",
    "2.) 45 minute full body massage",
    "3.) Couples relaxation",
    "4.) Getting glammed",
    "5.) Dinner with my cute girlfriend",
    "6.) Post dinner stargazing (weather permitting)",
    "7.) Night time unwind with special activity",
    "8.) Have the best sleep cuddled up"
];

let currentTaskIndex = 0;

function changeTask(direction) {
    currentTaskIndex += direction;
    if (currentTaskIndex < 0) {
        currentTaskIndex = tasks.length - 1; // Go to last task
    } else if (currentTaskIndex >= tasks.length) {
        currentTaskIndex = 0; // Go back to the first task
    }
    displayTask();
}

function displayTask() {
    document.getElementById('taskDisplay').innerText = tasks[currentTaskIndex];
}

// Initial task display
displayTask();
