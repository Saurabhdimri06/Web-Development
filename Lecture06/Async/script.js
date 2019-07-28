console.log(1)
console.log(2)

setTimeout(() => {
    console.log("after 1 sec")
},0)  //event loop is working => pushed the timeout to api then after completion to queue and after the stack is empty then it is pushed to stack for it' execution


const id = setInterval(() => {      //id is defined to exit the setInterval loop from infite execution
    console.log("every 1 sec")  
},1000)

setTimeout(() => {
    clearInterval(id)               //to terminate the setInterval 
    console.log("Terminated")
},4000)                             //terminated after 4 sec
console.log(3)
console.log(4)