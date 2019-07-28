arr = [1,12,13,5,6,2,39,3]

var ans = arr.sort()
document.getElementById("para").innerHTML = " Basic Array is : "+ans +  document.getElementById("para").innerHTML
console.log(arr)
//Default sorting lexical order sorting


var arr1 = arr.map((item) => {
    return item + 10;
})

document.getElementById("para").innerHTML ="Mapped array is : "+ arr1 + "<br><hr>"+ document.getElementById("para").innerHTML

//Or Second Way

var arr2 = arr.map(func1);
function func1(num){
    return num*10;
}
document.getElementById("para").innerHTML ="Mapped array with function call(Map the funcitons attributes to every element of array) : "+ arr2 + "<br><hr>"+ document.getElementById("para").innerHTML

var arr3 = arr.reduce(func2);
function func2(acum,item){
    return acum + item;
}
document.getElementById("para").innerHTML ="Reduce function of array (The reduce element adds next element to the previous element and give the desired output) : "+ arr3 + "<br><hr>"+ document.getElementById("para").innerHTML

var arr4 = arr.filter(odd);
function odd(num){
    if(num%2==0) return false;
    else return true;
}
document.getElementById("para").innerHTML ="Filtering odd functions using arr.filter() : "+ arr4 + "<br><hr>"+ document.getElementById("para").innerHTML

//
let mean = arr.reduce((acum, item) => {
    return acum + item
})/arr.length;
document.getElementById("para").innerHTML ="<br><hr>Creating Mean functions using arr.reduce() : "+ mean + "<br><hr>"+ document.getElementById("para").innerHTML

//Calculating Rms Value
var sq = arr.map((item) => item*item);
let mean1 = sq.reduce((acum, val) => {
    return acum + val
})/arr.length;
let rms = Math.sqrt(mean1);

document.getElementById("para").innerHTML ="Creating RMS function using arr functionalitites : "+ rms + "<br>Here mean of elements is : "+mean1+"<br>"+"Here sqaured of elements is : "+sq+"<br>"+ document.getElementById("para").innerHTML


//For single line of code
let rmsval = Math.sqrt(((arr.map(item => item*item))
    .reduce((acum, item) => acum+item)//or { return acum+item})
    )/arr.length)
document.getElementById("para").innerHTML ="<br><hr>Creating RMS function in a single line : "+ rmsval + "<br><hr>"+ document.getElementById("para").innerHTML
