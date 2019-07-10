let obj = {
    a: 20,
    b: 10,
    sum: function(){
        return this.a + this.b;
    }
}
document.getElementById("para").innerHTML = "After running an object where object a is "+obj.a+" and object b is "+obj.b+" and sum is: " + obj.sum() + "<br><hr>";
console.log(obj.sum());

function Person(Name,Age){
    this.name = Name;
    this.age = Age;
    this.isAdult = function(){
        if(this.age > 18) {return true}
        else {return false}
    }
}

var p1 = new Person("Saurabh",21);
var p2 = new Person("Shivam",23);

document.getElementById("para").innerHTML = "The Person 1 is : " + p1.name+ " and Age is : "+ p1.age + "<br>Person 2 is : "+ p2.name +" and Age is : "+ p2.age+" and for adult is : " + p2.isAdult()+ "<br><hr>" + document.getElementById("para").innerHTML; 
