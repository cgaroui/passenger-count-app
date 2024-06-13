//document.getElementById("count").innerText = 5


let count = 5
count = count + 1
console.log(count)

//create a variable , bonuspoints, initialize it as 50.I ncrease it to 100
//decrease it to 25, and then finally increase it to 70 
//console.log The value after each step 

let bonuspoints =50
console.log(bonuspoints)

bonuspoints = bonuspoints - 75
console.log(bonuspoints)

bonuspoints = bonuspoints + 45
console.log(bonuspoints)

// create the function increment()
function increment() {
    console.log("the button was clicked")
}

//using the function for less code 

function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}


//------------------------------------------------------


let lap1 = 34
let lap2 = 33 
let lap3 = 39

//create a function that logs out the sum all the lap times 
function logLapTime(){
    let totalTime = lap1 + lap2 + lap3
    console.log( totalTime)
}

// call the function to display the result 
logLapTime()



//----------------------------------------
//the function that increment the lapsCompleted variable with one 

let lapsCompleted = 0

function incrementLap() {
    lapsCompleted = lapsCompleted +1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)

//-----------------------------------------------------------

let countEl = document.getElementById("count-el")
console.log(countEl)
count = 0
function increment(){
    console.log("clicked")
    count= count+1
    countEl.innerText = count 
    console.log(count)
}


//--------------------------------------------------
//create a function , save() whitch logs out the count when it's called  

function save(){
    console.log(count)
}