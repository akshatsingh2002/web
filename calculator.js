function display(val){
    document.getElementById("text").value+=val;
}
function solve(){
    n=document.getElementById("text").value;
    // console.log(n);
    let y=eval(n);
    document.getElementById("text").value=y;
}