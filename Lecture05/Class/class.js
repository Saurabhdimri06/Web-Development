class Person{
    constructor(Name, Age){
        this.name = Name
        this.age = Age
    }
    
    isAdult(){
        if(this.age > 18)
            return true;
        else return false;
    }
    
    getName(){
        return `${this.name}`;    
    }
    
    getAge(){
        return `${this.age}`;
    }
}

var p1 = new Person("saurabh", 22);


document.getElementById("para").innerHTML = "Name is: "+ p1.getName() + " Age is : " + p1.age + " and for adult: " + p1.isAdult(); 