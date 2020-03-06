// Start
// Style button
const btnStart = document.querySelector('.start');
btnStart.addEventListener('mousedown', () => {
    btnStart.style.fontSize = "24px";
    btnStart.style.letterSpacing = "3px"
})
btnStart.addEventListener('mouseup', () => {
    btnStart.style.fontSize = "";
    btnStart.style.letterSpacing = "";
})

// Variables
const weapons = {
    playerWeapon: "",
    aiWeapon: "",
    gameResult: "",
    statement: "",
};

const stats = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const hands = document.querySelectorAll('.photos img');
const spnResult = document.querySelectorAll('.finalResult span');
const cursor = document.querySelector('.finalResult span:last-child');


// Functions
// Function - choose player weapon
function playerWeapon() {
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 5px yellow";
    weapons.playerWeapon = this.dataset.option;
}

// Choose AI weapon function
function chooseAIWeapon() {
    threeWeapons = document.querySelectorAll('.photos img');
    index = Math.floor(Math.random() * threeWeapons.length);
    randomChoice = threeWeapons[index].dataset.option;
    weapons.aiWeapon = randomChoice;
}

// Match result function
function competition(player, ai) {
    let resultStatement = "";
    if (player === "rock" && ai === "scissors" || player === "paper" && ai === "rock" || player === "scissors" && ai === "paper") {
        weapons.gameResult = "win";
        resultStatement = "You win! :D ";
        spnResult.forEach(spn => spn.style.color = "green");
    } else if (player === ai) {
        weapons.gameResult = "draw";
        resultStatement = "Draw "
        spnResult.forEach(spn => spn.style.color = "#555");
    } else {
        weapons.gameResult = "loss";
        resultStatement = "You lose :( "
        spnResult.forEach(spn => spn.style.color = "red");
    }
    weapons.statement = "";

    let index = 0;
    const addLetter = () => {
        weapons.statement += resultStatement[index];
        index++;
        document.querySelector('.finalResult span').textContent = weapons.statement;
        if (index === resultStatement.length) clearInterval(typeText);
    }

    const typeText = setInterval(addLetter, 50);

}

// Show weapons function
function showWeapons() {
    document.querySelector('.playerWeapon span').textContent = weapons.playerWeapon;
    document.querySelector('.aiWeapon span').textContent = weapons.aiWeapon;
    document.querySelector('.finalResult span').textContent = weapons.statement;
}

// Show statistics function
function showStats(result) {
    document.querySelector('.games span').textContent = ++stats.games;
    if (result === "win") {
        document.querySelector('.wins span').textContent = ++stats.wins;
    } else if (result === "loss") {
        document.querySelector('.losses span').textContent = ++stats.losses;
    } else {
        document.querySelector('.draws span').textContent = ++stats.draws;
    }
}

// Reset function
function resetAll() {
    document.querySelector(`[data-option=${weapons.playerWeapon}]`).style.boxShadow = "";
    weapons.playerWeapon = "";
    weapons.aiWeapon = "";
}


// Main function
function mainFunction() {
    if (!weapons.playerWeapon) return alert("Choose your weapon first.");
    chooseAIWeapon();
    competition(weapons.playerWeapon, weapons.aiWeapon);
    showWeapons();
    showStats(weapons.gameResult);
    resetAll();
}


hands.forEach(hand => hand.addEventListener('click', playerWeapon));
btnStart.addEventListener('click', mainFunction);

// Cursor animation
const cursorAnimation = () => {
    cursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);








// The end :)