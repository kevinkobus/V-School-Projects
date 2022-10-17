const readline = require("readline-sync")

//***Random algo
function generateRandomNum(max) {
    return Math.floor(Math.random() * (max + 1))
}

//Constructor functions for player and bands
function Player(playerName, hp, swagObtained, bandsVanquished) {
    this.playerName = name;
    this.hp = 75;
    this.swagObtained = [];
    this.bandsVanquished = 0
}

let activePlayer = new Player()

const hairBands = ["RATT", "Skid Row", "Poison", "Motley Crue", "Def Leppard"]
const bandSwag = ["Bandana", "Leather Vest", "Lock of Hair", "Guitar", "Drumstick"]

function Band(bandName, bandHp, swag) {
    this.bandName = bandName;
    this.bandHp = bandHp;
    this.swag = swag
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
    console.clear()
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
        let encounterChance = generateRandomNum(2)
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

    //Activating a new band to encounter
    let activeBand = new Band(bandName, bandHp, swag)
    let bandName = hairBands[generateRandomNum(hairBands.length)]

    let swag = bandSwag[generateRandomNum(bandSwag.length)]
    let bandHp = (generateRandomNum(20) + 10)

    let bandEncounter = readline.keyIn("You've encountered " + activeBand.bandName + ". Would you like to: 'f' = fight, or 'r' = run and escape ")
    if (bandEncounter === 'f') {
        return fightBand()
    }
    else if (bandEncounter === 'r') {
        return run()
    }

    function fightBand() {
        while (battling) {
            //battling the band
            if (activeBand.bandHp > 0 && activePlayer.hp > 0) {
                console.log("Here comes " + activeBand.bandName + " rockin' at you")
                console.log("You've both suffered some damage")
                activeBand.bandHp = activeBand.bandHp - generateRandomNum(15)
                activePlayer.hp = activePlayer.hp - generateRandomNum(15)
                console.log("Their hp remaining is " + activeBand.bandHp)
                console.log("Your hp remaining is " + activePlayer.hp)
                //continue battling
            }
            //defeat band
            if (activeBand.bandHp <= 0 && activePlayer.hp > 0) {
                console.log("You've defeated " + activeBand.bandName + " and gained some strenth back!")
                let bandsVanquished = bandsVanquished + 1
                activePlayer.hp = activePlayer.hp + 15
                console.log("Your hp is now " + activePlayer.hp)
                console.log("You've also earned a piece of band swag---> " + activeBand.swag)
                activePlayer.swagObtained.push(activeBand.swag)
                console.log("Here's all your swag " + activePlayer.swagObtained)
                battling = !true
                return walk()
            }
            //both dead
            if (activeBand.bandHp <= 0 && activePlayer.hp <= 0) {
                console.log("Must have been an even battle, because you're both dead!")
                battling = !true
                //Game over   
            }
            //band wins
            if (activeBand.bandHp > 0 && activePlayer.hp <= 0) {
                console.log("You got out rocked!" + activePlayer.name + " You're now stuck in the 80's forever...unless you can find Dr. Emmett Brown's Delorean :)")
                console.log("GAME OVER")
                battling = !true
                //Game over
            }
        }
    }

    function run() {
        console.log("You're running....and your form is terrible by the way")
        let escapeChance = generateRandomNum(2)
        if (escapeChance === 2) {
            console.log("You escaped! But you've lost some strength")
            activePlayer.hp = activePlayer.hp - 5
            console.log("Your hp remaining is " + activePlayer.hp)
            return walk()
        }
        else if (escapeChance !== 2) {
            console.log("There's no escape, you'll have to fight")
            return fightBand()
        }
    }
}

startGame()

