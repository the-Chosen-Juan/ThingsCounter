

//document.getElementById("count").innerText = 5


//variable LET

//let count = 0

// (let count be 0)

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)


// let myAge = 28

// myAge = 29 //Esto reemplaza a la de arriba, es como CSS, lo actualiza por la q sigue

// let humanDogRatio = 7

// let dogYears = myAge * humanDogRatio


// let count = 5

// //cound +1

// count = count + 1 // 5 + 1

// console.log(count)


// function increment() {
//     console.log("the button was clicked")
// }

// using functions to write less code: COMMAND

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// //setting up the race 

// countdown()

// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

// countdown()

// function fortyTwo() {
//     console.log(42)
// }

// // fortyTwo()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function laps() {
//     let sumOfLaps = lap1 + lap2 + lap3
//     console.log(sumOfLaps)
// }

// laps()


// let lapsCompleted = 0

// function laps () {
//     lapsCompleted = lapsCompleted + 1
// }

// console.log(lapsCompleted)

// laps()

// console.log(lapsCompleted)

// laps()

// console.log(lapsCompleted)

// laps()

// console.log(lapsCompleted)

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
}

function save() {
    let countAndDash = count + " - "
    saveEl.textContent += countAndDash
    countEl.textContent = 0
    count = 0
}





