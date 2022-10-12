const readline = require("readline-sync")


//Bands and swag
const hairBands = ["RATT", "Poison", "Skid Row", "Motley Crue", "Def Leppard"]
const hairBandSwag = ["Drumsticks", "Guitar", "Locks of Hair", "Bandana", "Leather Vest"]

//Random algo 25% or 33%



//Run escape or get attacked chance




//Name collection and start of game
const playerName = readline.question("Greetings, and welcome to 1985.  You must defeat five Hair Bands to escape the 1980's.  Please enter you name to continue. ")

function startGame() {
    console.log("Hello" + playerName + ", can you escape the 1980's without being rocked out of town by Hair Bands")
    console.log("Your enemy Hair Bands are RATT, Poison, Skid Row, Motely Crue, and Def Leppard")
    console.log("They've been rocking the 80's hard for years. Can you escape their sound and make it to an new musical decade?")
    console.log("Good luck!")
}

function Player(name, hp, bandsDefeated, swagObtained) {
    this.name = playerName;
    this.hp = 10;
    this.swagObtained = [];
}

function Band(bandName, bandHp, swag) {
    this.bandName = bandName;
    this.bandHp = bandHp;
    this.swag = swag;
}

