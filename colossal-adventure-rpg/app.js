const readline = require("readline-sync")

// Welcome console and name collection//
// const opening = readline.question("Welcome to the Colossal Adventure RPG! Would you like to step back in time to the year 1985? (Y) for Yes, (N) for No ")

function intro() {
    let text;
    let opening = prompt(readline.question("Welcome to the Colossal Adventure RPG! Would you like to step back in time to the year 1985? (Y) for Yes, (N) for No "))
    if (opening === "y" || opening === "Y") {
        text = "Great! Let's go."

      else if (opening === "n" || opening === "N") {
            text = "I don't blame you, mullets and tight pants are scary!"
        }
        
        else {
            text = "Umm, that wasn't one of the options"
        }

        document.getElementById("start").innerHTML = text
    }


    const userName = readline.question("May I have your name? ")
    console.log("Hello " + userName + "!")
}
