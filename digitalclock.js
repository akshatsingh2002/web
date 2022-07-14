function calc(){
    let y=new Date();
    let h=y.getHours();
    let m=y.getMinutes();
    let s=y.getSeconds();
    let zone="AM";
    if(s<10){
    s="0" +s;    
    }
    if(m<10){
        m="0"+m;    
        }
        if(h>12){
            zone="PM"
            h=h-12;
        }
        if(h<10){
            h="0"+h;
        }
    let str=h+":"+m+":"+s+" "+zone;
    document.getElementById("digital").innerText=str;
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let name = month[y.getMonth()];
let d=y.getUTCDate();
let yer=y.getUTCFullYear();
let cad=d+" "+name +""+yer;
document.getElementById("calander").innerHTML=cad;
    var t=setTimeout(function(){calc()},1000);
    function img(){
    document.getElementById("bg").style.backgroundImage="url('https://mustsharenews.com/wp-content/uploads/2022/05/sleepy-crayon-shin-chan-mouse-1.jpg')";
    }
    img()
}
calc()