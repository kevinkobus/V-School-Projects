const readline = require("readline-sync")

//***Random algo
function generateRandomNum(max) {
    return Math.floor(Math.random() * max)
}

//Name collection and start of game
const name = readline.question("Greetings, and welcome to 1985.  \nHair Bands are abound wreaking havoc on the music scene and changing our culture. \nTheir musical sound and fashion are powerful forces that people can't resist.  \nYou must bash their music down the charts and make room for some new sounds.  \nThe challenge is yours!  \nPlease enter your name to continue. ")
console.clear()

function startGame() {
    console.log("Hello " + name + ", can you escape the 1980's and make it to a new musical decade?")
    console.log("Enemy Hair Bands are roaming the streets looking for their next victims.")
    console.log("They've been rocking the streets of the 80's hard for years.")
    console.log("Beware of their long flowing locks of hair and don't get tangled.")
    console.log("Good luck!")
}

//Constructor functions for player and bands
function Player(playerName, hp, swagObtained, bandsVanquished) {
    this.playerName = name
    this.hp = 75
    this.concertTickets = 0
    this.bandsVanquished = 0
}

let activePlayer = new Player()

let hairBands = ["RATT", "Skid Row", "Poison", "Motley Crue", "Def Leppard"]

function Band(bandName, bandHp, swag) {
    this.bandName = name
    this.bandHp = 30
    this.swag = swag
}

let activeBand = new Band()

// let alive = true

startGame()

//     while (alive) {
//     walk()
// }

while (activePlayer.hp > 0 && activePlayer.bandsVanquished < 3) {
    walk()
}

//Walk function
function walk() {
    let makeChoice = readline.keyIn("Would you like to: 'w' = walk Quit 'q' = quit, or 'p' = View your profile ")

    if (makeChoice === 'p') {
        console.log(activePlayer)
    }

    else if (makeChoice === 'q') {
        console.log("Are you seriously afraid of tight leather pants and mullets!? Just type w ")
        //how do I make it exit the game if they quit?
    }

    else if (makeChoice === 'w') {
        console.log("You're walking...")
        let encounterChance = generateRandomNum(3)
        if (encounterChance === 2) {
            return concert()
        }
        else if (encounterChance !== 2) {
            console.log("There's lots of music being played nearby.  Maybe you should keep exploring to find it.")
            return walk()
        }
    }
}

//Encountering a band function
function concert() {
    let bandName = hairBands[0].name
    let bandEncounter = readline.keyIn("You've encountered " + bandName + ". Would you like to: 'f' = fight, or 'r' = run and escape ")
    if (bandEncounter === 'f') {
        return fightBand()
    }
    else if (bandEncounter === 'r') {
        return run()
    }
    hairBands.push(hairBands.shift())
}


function fightBand() {
    while (bandName.hp > 0 && activePlayer.hp > 0) {

        console.log("Here comes " + bandName + " right at you")
        console.log("Boom, bang, smash, slam " + bandName + " takes some damage")
        bandName.hp = bandName.hp - generateRandomNum(15)
        console.log(bandName.hp)

        console.log(bandName + " fights back")
        console.log("Crash, blam, boing, screetch!")
        console.log("You've suffered some damage")
        activePlayer.hp = activePlayer.hp - generateRandomNum(15)
        console.log(activePlayer.hp)

        console.log("Here comes " + bandName + " back at you again")
        console.log("You've both suffered some damage")
        bandName.hp = bandName.hp - generateRandomNum(15)
        activePlayer.hp = activePlayer.hp - generateRandomNum(15)
        console.log(bandName.hp)
        console.log(activePlayer.hp)

        if (bandName.hp <= 0 && activePlayer.hp > 0) {
            console.log("You've defeated " + bandName + " and gained some strenth back!")
            activePlayer.hp = activePlayer.hp + 15
            console.log(activePlayer.hp)
            console.log("You've also earned a piece of band swag---> " + bandName.swag)
            activePlayer.swagObtained.push(bandName.swag)
            console.log(activePlayer.swagObtained) 
        }
        

    }

}

function run() {
    console.log("You're running....")
    let escapeChance = generateRandomNum(2)
    if (escapeChance === 2) {
        console.log("You escaped! But you've lost some strength")
        activePlayer.hp = activePlayer.hp - 5
        return walk()
    }
    else if (escapeChance !== 2) {
        console.log("There's no escape, you'll have to fight")
        return fightBand()
    }
}



