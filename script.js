let mistakes = 0;
let citizens = 0;
let stone = 0;
let wood = 0;
let food = 0;

let stoneMiners = 0;
let woodCutters = 0;

let toolMultiplier = 1;
let toolCost = 100;

document.getElementById('clickMistake').addEventListener('click', () => {
    mistakes++;
    citizens++;
    updateDisplay();
});

document.getElementById('clickFood').addEventListener('click', () => {
    food++;
    updateDisplay();
});

document.querySelectorAll('.assignJob').forEach(button => {
    button.addEventListener('click', (e) => {
        const job = e.target.getAttribute('data-job');
        assignJob(job);
    });
});

document.getElementById('upgradeTools').addEventListener('click', () => {
    upgradeTools();
});

function assignJob(job) {
    if (citizens > 0) {
        citizens--;
        switch (job) {
            case 'stoneMiner':
                stoneMiners++;
                break;
            case 'woodCutter':
                woodCutters++;
                break;
        }
        updateDisplay();
    }
}

function upgradeTools() {
    if (stone >= toolCost && wood >= toolCost) {
        stone -= toolCost;
        wood -= toolCost;
        toolMultiplier *= 2;
        toolCost *= 2;
        updateDisplay();
    }
}

function gatherResources() {
    stone += stoneMiners * toolMultiplier;
    wood += woodCutters * toolMultiplier;
    updateDisplay();
}

function checkFood() {
    if (food > 0) {
        food--;
    } else if (citizens > 0) {
        citizens--;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('mistakes').textContent = mistakes;
    document.getElementById('citizens').textContent = citizens;
    document.getElementById('stone').textContent = stone;
    document.getElementById('wood').textContent = wood;
    document.getElementById('food').textContent = food;

    document.getElementById('stoneMiners').textContent = stoneMiners;
    document.getElementById('woodCutters').textContent = woodCutters;

    document.getElementById('toolCost').textContent = toolCost;
}

setInterval(gatherResources, 1000);
setInterval(checkFood, 60000);
