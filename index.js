//SMART GOAL
    //1. Add a ul to my HTML instead of creating it on my JS file
    //2. Within 30 minutes I want to refactor my code to simplify my btn event listener and use preventDefault() sucessfully
    //3. refactor my code so that I use a simple array or object to represent html entities insted of an array of objects 
////

document.addEventListener("DOMContentLoaded", () => {
    const numInput = document.querySelector("input");
    const dicePara = document.querySelector("#dice-para");
    const sumPara = document.querySelector("#sum-para");
    const ul = document.querySelector("ul")
    let numOfClicks = 0
    let diceHistoryArr = []
    let sumHistoryArr = []
    const arr =["&#9856","&#9857","&#9858","&#9859", "&#9860", "&#9861"]
    
    document.querySelector("button").addEventListener("click", random)

    function random(e) {
        e.preventDefault()
        sum = 0
        dicePara.innerHTML = ""
        for (let i = 0; i < numInput.value; i++) {
            let randomdie = Math.floor(Math.random() * arr.length)
            dicePara.innerHTML += arr[randomdie]
            sum += (randomdie + 1)
        };
        sumPara.textContent = `Sum = ${sum}`
        diceHistoryArr.unshift(dicePara.innerHTML)
        sumHistoryArr.unshift(sum)


        numOfClicks++
        if (numOfClicks > 1) {
            const li = document.createElement("li");
            ul.appendChild(li)
            li.textContent = diceHistoryArr.pop() + " = " + sumHistoryArr.pop()
        };
    };
});
