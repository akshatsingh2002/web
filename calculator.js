function display(val){
    document.getElementById("text").value+=val;
}
function solve(){
    n=document.getElementById("text").value;
    // console.log(n);
    let y=eval(n);
    document.getElementById("text").value=y;
}


function clear1(){
    let empty = " "
    document.getElementById("text").value=" "
}
function clear2(){
    n=document.getElementById("text").value
    l = n.length
    n = n.substring(0,l-1)
    document.getElementById("text").value=n
}