const readline = require("readline-sync")

// Welcome console and name collection
const opening = readline.question("Welcome to the Colossal Adventure RPG! Would you like to step back in time to the year 1985? y for yes, n for no ")

if (opening === "y") {
    const userName = readline.question("Great! May I have your name? ")
    console.log("Hello " + userName + "!")
}

else if (opening === "n") {
    console.log("I don't blame you, mullets and tight pants are scary!")
}

else {
    console.log("Umm, that wasn't one of the options")
}




