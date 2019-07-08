function counter(init, delta) { 
    var x=5;
    return function count() {
        init += delta;
       console.log(init)
    }
}

let c1 = counter(1, 3);
let c2 = counter(2, 4);
c1();
c2();
c1();
c2();

function reader(val1,func2){
    var x = 10;
    function func2(){
        var y = 15;
        return x+y;
    }
}

let c = reader(1,6);
c();