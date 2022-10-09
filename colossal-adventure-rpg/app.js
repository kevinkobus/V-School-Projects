const readline = require("readline-sync")

// Welcome console and name collection
const opening = readline.question("Welcome to the Colossal Adventure RPG! Would you like to step back in time to the year 1985? (Y) for Yes, (N) for No ")

if (opening === "y" || opening === "Y") {
    const userName = readline.question("Great! May I have your name? ")
    console.log("Hello " + userName + "!")
}

else if (opening === "n" || opening === "N") {
    console.log("I don't blame you, mullets and tight pants are scary!")
}

else {
    console.log("Umm, that wasn't one of the options")
}




