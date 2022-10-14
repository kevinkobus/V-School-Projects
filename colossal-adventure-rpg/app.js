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
function Player(playerName, hp, swagObtained) {
    this.playerName = name
    this.hp = 100
    this.swagObtained = []
}

let activePlayer = new Player()

// function Band(bandName, bandHp, swag) {
//     this.bandName = bandName;
//     this.bandHp = bandHp;
//     this.swag = swag;
// }

// let rat = new Band("RATT", "10", "Bandana")
// let skidRow = new Band("Skid Row", "15", "Leather Vest")
// let poison = new Band("Poison", "25", "Lock of Hair")
// let motleyCrue = new Band("Motley Crue", "30", "Guitar")
// let defLeppard = new Band("Def Leppard", "35", "Drumstick")

let hairBands = [
    {
        name: "RATT",
        hp: 10,
        swag: "Bandana"
    },
    {
        name: "Skid Row",
        hp: 15,
        swag: "Leather Vest"
    },
    {
        name: "Poison",
        hp: 25,
        swag: "Lock of Hair"
    },
    {
        name: "Motley Crue",
        hp: 30,
        swag: "Guitar"
    },
    {
        name: "Def Leppard",
        hp: 35,
        swag: "Drumstick"
    }
]

    let alive = true

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
            return encounter()
        }
        else if (encounterChance !== 2) {
            console.log("There's lots of music being played nearby.  Maybe you should keep exploring to find it.")
            return walk()
        }
    }
}

//Encountering a band - atacking, running, or escaping function
function encounter() {
    for (i = 0; i < hairBands.length; i++) {
        console.log("You've encountered the band " + (hairBands[i]))



        // let bandEncounter = readline.keyIn("You've encountered " + ratt.bandName + ". Would you like to: 'f' = fight, or 'r' = run and escape " )

    }
}




startGame()
while (alive) {
    walk()
}
