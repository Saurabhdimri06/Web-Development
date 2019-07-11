// 
//var count = 10;
//const id = setInterval(timer, 1000); 
//
//function timer() {
//    document.getElementById("para").innerHTML = count;
//    count--;
//}
//
//setTimeout(() => {
//    clearInterval(id);
//    document.getElementById("para").innerHTML = "Terminated"
//},11000);
//


const start = Date.now()
setInterval(() => {
    const shown = Date.now() - start
    document.getElementById("para").innerHTML = shown/1000;
}, 1000)