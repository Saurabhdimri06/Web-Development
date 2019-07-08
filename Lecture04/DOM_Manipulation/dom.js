let para = document.getElementById("para");
let link = document.getElementById("link");
let text = document.getElementById("text");
let submit = document.getElementById("submit");

link.setAttribute("href","https://www.codingblocks.com/");
link.innerHTML = "For Coding blocks";


document.getElementById("submit").onclick = function(){myfunc(text.value)};

var t = text.value;
var i;
para.innerHTML= "<br> <b>PARA</b> ADDED VIA HTML";
function myfunc(t){
    for(i=0;i<=text;i++){
        if(i%2==0){
            document.getElementById("para2").innerHTML = i+getElementById('para').innerHTML;
        }
    }
}
