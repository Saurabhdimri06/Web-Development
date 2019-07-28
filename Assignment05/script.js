
document.getElementById("btn").onclick = function(){enter(document.getElementById("text").value)}
document.getElementById("delete").onclick = function(){remove()}


let counter = 0;

function enter(val)
{
    var task = val;
    console.log(val.length)
    if(task.length == 0){
        window.alert("Enter some value");
    }                                                     
    else{
        let item = document.createElement('li');
        counter++
        item.innerHTML = val;
        item.setAttribute('onclick', 'strike('+counter+')')
        item.setAttribute('id', counter)
        item.style.textDecoration = "none"
        list.appendChild(item)
        document.getElementById("text").value = " "
        document.getElementById("delete").style.visibility = "visible"
        console.log(counter)
    }
}

for(var i = 0;i<=counter;i++){
    function strike(i){
        var s = document.getElementById(i).style.textDecoration;
        if(s == "none")
        {
            document.getElementById(i).style.textDecoration = "line-through"
            document.getElementById(i).setAttribute("class", "striked")
        }
        else {document.getElementById(i).style.textDecoration = "none"}
    }
}

//function remove(){
//    console.log("clicked")
//    var list = document.getElementById("list");
//    for(var i = 1; i<=list.childElementCount;i++){
//        if(document.getElementById(i) == "null"){ }
//        else{
//            var s = document.getElementById("list").chi.style.textDecoration;
//            if(s == "line-through")
//            {
//                document.getElementById("list").removeChild(list.childNodes[i]);
//                console.log(counter)
//            }   
//        }
//    }
//}

//
//function remove(){
//    var list = document.getElementById("list");
//    while(list.hasChildNodes){
//        let i = 0;
//        while (i<list.childElementCount) {
//            if (list.children[i].style.textDecoration === 'line-through'){
//                list.removeChild(list.children[i])
//            }else{
//                i++;
//            }
//        }
//    }
//}

function remove() {
    var striked = document.getElementsByClassName('striked');
    console.log(striked)
    for(var i=0; i<striked.length; i++){
        striked[i].parentNode.removeChild(striked[i])
        i=-1;
    }
}
