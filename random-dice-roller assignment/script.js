const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
}

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log("roll = ", roll);
    scoreTracker[roll]++
}

function displayScores() {
    console.log("Dice Score Tracker: ");
    for (const outcome in scoreTracker) {
        console.log(`${outcome}: ${scoreTracker[outcome]} times`);
    }
}

for (let i = 0; i < 100; i++) {
    rollDice();
}

displayScores();