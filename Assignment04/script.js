document.getElementById("removeDuplicates").onclick = function(){remove(document.getElementById("text").value)}
document.getElementById("maxnum").onclick = function(){max(document.getElementById("text").value)}
document.getElementById("minnum").onclick = function(){min(document.getElementById("text").value)}
document.getElementById("showarr").onclick = function(){show()}

function remove(text){
    var arr;
    var farr = [];
    arr = text.split(" ");
    farr = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
});
    
    document.getElementById("para").innerHTML = "Filtered Array is: " + farr + "<br>" + document.getElementById("para").innerHTML
    document.getElementById("para").innerHTML = "Original Array is: " + arr +  "<br>" +document.getElementById("para").innerHTML
}


function max(text){
    var arr;
    arr = text.split(" ");
    var ans;
    var max;
    max = arr[0];
    ans = arr.reduce(function(accum, val){
        if(val > max)
        {max = val}
        return max;
    },0);
    
    document.getElementById("para").innerHTML = "Maximum number in the array is: " + ans
}

function min(text){
    var arr;
    var res;
    arr = text.split(" ");
    var min;
    min = arr[0];
    arr.forEach(function(item){
        if(item < min)
        {min = item;}
    })
    document.getElementById("para").innerHTML = "Minimum number in the array is: " + min
}

function show(){
    var a = [{name:'Divyansh',github_id:'silent-lad'},{name:'Abhishek',github_id:'abhishek97'},{name:'Dhruv',github_id:'imdhruvgupta'}];
    console.log(a);
    for(var i =0;i<a.length;i++){
        document.getElementById("para").innerHTML = document.getElementById("para").innerHTML+ a[i].github_id +" , "
    }
    document.getElementById("para").innerHTML = "Final array is: " +document.getElementById("para").innerHTML
}
