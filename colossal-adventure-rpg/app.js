const readline = require("readline-sync")


//***Bands and swag
const hairBands = ["RATT", "Poison", "Skid Row", "Motley Crue", "Def Leppard"]
const hairBandSwag = ["Drumsticks", "Guitar", "Locks of Hair", "Bandana", "Leather Vest"]

//***Random algo
function generateRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
// console.log(generateRandomNum(10))

//Name collection and start of game
const playerName = readline.question("Greetings, and welcome to 1985.  \nHair Bands are abound wreaking havoc on the music scene and changing our culture. \nTheir musical sound and fashion are powerful forces that people can't resist.  \nYou must bash their music down the charts and make room for some new sounds.  \nThe challenge is yours!  \nPlease enter your name to continue. ")
console.clear()

function startGame() {
    console.log("Hello " + playerName + ", can you escape the 1980's and make it to a new musical decade?")
    console.log("Enemy Hair Bands are roaming the streets looking for their next victims.")
    console.log("They've been rocking the streets of the 80's hard for years.")
    console.log("Beware of their long flowing locks of hair and don't get tangled.")
    console.log("Good luck!")
}

//Constructor functions for player and band objects
function Player(name, hp, swagObtained) {
    this.name = playerName;
    this.hp = 10;
    this.swagObtained = [];
}

function Band(bandName, bandHp, swag) {
    this.bandName = bandName;
    this.bandHp = bandHp;
    this.swag = swag;
}

//Walk function
function walk() {
    let makeChoice = readline.keyIn("Would you like to: 'w' = walk Quit 'q' = quit, or 'p' = View your profile")

    if (makeChoice === 'p') {
        console.log(player)
    }

    else if (makeChoice === 'q') {
        console.log("Lame")
        //how do I make it exit the game?
    }

    else if (makeChoice === 'w') {
        console.log("You're walking")
        let encounterChance = generateRandomNum(4)
        if (encounterChance === 2) {
            return encounter()
        }
        else if (encounterChance !== 2) {
            console.log("There's lots of music being played nearby.  Maybe you should keep exploring to find it.")  
            return walk()
        }
    }
}

startGame()
walk()
//Encountering a band - atacking, running, or escaping function
// function encounter() {
//     let bandEncounter = readline.keyIn("You've encountered an 80's Hair Band. Would you like to: 'f' = fight, or 'r' = run and escape" )


// }