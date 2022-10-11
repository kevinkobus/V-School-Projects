const readline = require("readline-sync")

// Welcome console and name collection//

const opening = readline.question("Welcome to 1985.  You must defeat five Hair Bands to make it to 1990.  If you'd like to continue, type: (Y) for Yes, (N) for No ")

    if (opening === "y" || opening === "Y") {
        console.log("Great! Let's go.")

    } else if (opening === "n" || opening === "N") {
        console.log("I don't blame you, mullets and tight pants are scary!")


    } else {
        console.log("Umm, that wasn't one of the options")
    }


const userName = readline.question("May I have your name? ")
console.log("Hello " + userName + "!")

let player = {
    name: userName,
    hp: 100,
    hairbandsDefeated: 0,

}

let playerInventory = {
    drumsticks: 0,
    guitars: 0,
    locksOfHair: 0,
    bandanas: 0,
    leatherVests: 0,
    rockerMakeup: 0,
}

const hairBands = ["RATT", "Poison", "Skid Row", "Motley Crue", "Def Leppard", "GNR"]

const hairBandSwag = ["Drumsticks", "Guitar", "Locks of Hair", "Bandana", "Leather Vest", "Rocker makeup" ]


