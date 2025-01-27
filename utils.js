function generateRandomNumer() {
    return Math.floor(Math.random() * 100) + 1;
}

function celtoFah(cel) {
    return (cel* 9) / 5 + 32;
}

module.exports = { generateRandomNumer, celtoFah};