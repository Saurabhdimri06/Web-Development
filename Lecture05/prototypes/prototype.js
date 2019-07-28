//An example of inheritence

let food = {
    veg : true,
    taste : "delicious"
}

let fruit = Object.create(food)
fruit.taste = "sweet";

let Mango = Object.create(fruit)
Mango.color = "yellow"
Mango.taste = "sour"


document.getElementById("para").innerHTML = "Mango : " + Mango.color + " Fruit : "+fruit.taste+" Food : "+food.veg+ "<br><hr>"+ document.getElementById("para").innerHTML;

//Mango acquiring property of fruit and fruit acquiring property of food
document.getElementById("para").innerHTML = "Mango : " + Mango.taste + " Fruit : "+fruit.veg+" Food : "+food.veg+"<br><hr>"+ document.getElementById("para").innerHTML;


document.getElementById("para").innerHTML = "Mango : " + Mango.__proto__ + " Fruit : "+fruit.__proto__+" Food : "+food.__proto__+"<br><hr>"+ document.getElementById("para").innerHTML;

//Here mango first checks for it's own property and the moves out to check form proto of the class
document.getElementById("para").innerHTML = "Mango : " + Mango.taste + " Fruit : "+fruit.taste+" Food : "+food.veg+"<br><hr>"+ document.getElementById("para").innerHTML;
 

//It checks for the property on proto of 1 back per step utnil it finds one. If it doesn't find any it throws the error
console.log(Mango.__proto__.__proto__)
console.log(food.__proto__)