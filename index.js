//SMART GOAL
    //1. Within 30 minutes I want to refactor my code to simplify my btn event listener and use preventDefault() sucessfully
    //2. Add a ul to my HTML instead of creating it on my JS file
    //3. refractor my code so that I use a simple array or object to represent html entities insted of an array of objects 
////

document.addEventListener("DOMContentLoaded", () => {
    const numInput = document.querySelector("input");
    const dicePara = document.querySelector("#dice-para");
    const sumPara = document.querySelector("#sum-para");
    const ul = document.querySelector("ul")
    let numOfClicks = 0
    let diceHistoryArr = []
    let sumHistoryArr = []
    const arr = [
        { dice: "&#9856", value: 1 },
        { dice: "&#9857", value: 2 },
        { dice: "&#9858", value: 3 },
        { dice: "&#9859", value: 4 },
        { dice: "&#9860", value: 5 },
        { dice: "&#9861", value: 6 },
    ];
    
    document.querySelector("button").addEventListener("click", random)

    function random(e) {
        e.preventDefault()
        sum = 0
        dicePara.innerHTML = ""
        for (let i = 0; i < numInput.value; i++) {
            let randomNumber = Math.floor(Math.random() * arr.length)
            dicePara.innerHTML += arr[randomNumber].dice
            sum += arr[randomNumber].value
        };
        sumPara.textContent = `Sum = ${sum}`
        diceHistoryArr.unshift(dicePara.innerHTML)
        sumHistoryArr.unshift(sum)


        numOfClicks++
        if (numOfClicks > 1) {
            const li = document.createElement("li");
            ul.appendChild(li)
            li.textContent = diceHistoryArr.pop() + " = " + sumHistoryArr.pop()
            // li.textContent = `${dicePara.innerHTML} = ${sum}` <-- this solution passed the test when numOfClicks was greater than 0
        };
    };
});
