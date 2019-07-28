document.getElementById("remove").onclick = function(){remove(document.getElementById("text").value)}
document.getElementById("forEach").onclick = function(){forEach(document.getElementById("text").value)}

function remove(text){
    var arr ;
    arr = text.split(" ");
    document.getElementById("para").innerHTML = "Original array is : "+ arr + "<br><hr>" + document.getElementById("para").innerHTML
    var final = [];
    final = arr.reduce(function (accum, val) {
        if (accum.indexOf(val) === -1) {
            accum.push(val);
          }
          return accum;
    }, [])

    console.log(arr);
    document.getElementById("para").innerHTML = "Filtered array is : " + final + "<br>" +document.getElementById("para").innerHTML
}

function forEach(text){
    var arr;
    var final = [];
    arr = text.split(" ");
    final = arr.reduce(function (accum,val){
        accum.push(val);
        return accum;
    }, []);
    console.log(final);
    document.getElementById("para").innerHTML = "Every element of array is : " + final + "<br><hr>" +document.getElementById("para").innerHTML
}

