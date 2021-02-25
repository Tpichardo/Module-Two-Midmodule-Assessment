document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");
    const numInput = document.querySelector("input");
    const dicePara = document.querySelector("#dice-para");
    const sumPara = document.querySelector("#sum-para");
    const arr = [
        { dice: "&#9856", value: 1 },
        { dice: "&#9857", value: 2 },
        { dice: "&#9858", value: 3 },
        { dice: "&#9859", value: 4 },
        { dice: "&#9860", value: 5 },
        { dice: "&#9861", value: 6 },
    ];
    
    btn.addEventListener("click", () => {
        random();
    });
    
    let sum = 0
    function random() {
        sum = 0
        dicePara.innerHTML = ""
        for (let i = 0; i < numInput.value; i++) {
            let randomNumber = Math.floor(Math.random() * arr.length)
            dicePara.innerHTML += arr[randomNumber].dice
            sum += arr[randomNumber].value
        };
        sumPara.textContent = `Sum = ${sum}`
    };

    btn.addEventListener("click", () => {
        diceHistory()
    });

    let numOfClicks = 0
    const ul = document.createElement("ul")
    function diceHistory(){
        if(numOfClicks > 1){
            document.createElement("li");
        }
    }


    
});
