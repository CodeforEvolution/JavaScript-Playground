/** Functions **/

function HeyOMatic(name) {
    let theMessage = "Hey, what's up " + name + "!?";

    function theMessenger() {
        alert(theMessage);
    }

    return theMessenger;
}

function FriendlyButtonMaker(buttonNameArray) {
    let theButtons = [];
    for (let index = 0; index < buttonNameArray.length; index++) {
        let buttonName = "Greet " + buttonNameArray[index] + "!";

        theButtons[index] = document.createElement("button", {});
        theButtons[index].appendChild(document.createTextNode(buttonName));
        theButtons[index].onclick = HeyOMatic(buttonNameArray[index]);
    }

    return theButtons;
}

const theButtonNames = ["Jake", "Lake", "Rake", "Cake"];
builtButtons = FriendlyButtonMaker(theButtonNames);

let theJSJar = document.querySelector(".TheJSJar");
for (let index = 0; index < builtButtons.length; index++) {
    theJSJar.appendChild(builtButtons[index]);
}

