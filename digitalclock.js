function calc(){
    let y=new Date();
    let h=y.getHours();
    let m=y.getMinutes();
    let s=y.getSeconds();
    let zone="AM";
    if(h>=12){
        zone="PM";
    }
    if(s<10){
    s="0" +s;    
    }
    if(m<10){
        m="0"+m;    
        }
        if(h>12){
            h=h-12;
        }
        if(h<10){
            h="0"+h;
        }
    let str=h+":"+m+":"+s+" "+zone;
    document.getElementById("digital").innerHTML=str;
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let name = month[y.getMonth()];
let d=y.getUTCDate();
let yer=y.getUTCFullYear();
let cad=d+" "+name +""+yer;
document.getElementById("calander").innerHTML=cad;
function img(){
    if(zone=="AM" && h>=4 && h<12)
    document.getElementById("background").style.backgroundImage="url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKmQnzF2P7fUguKjTUTh5RLwKSzj02f7eIv2eCAiWIB29QQLXFTiaYYRKS7LMQCCn39tPINH3CydmUm_0-bppa5xE4MemtHrb6kVT8BM3f6iqS5g4kpsQTsBTLUYLbWILJnZp2CpYXBQWkZmJ2UEYyrshpkmc9GQOfOy7iQyQrsF59NP1rN2yPQl7T/s1014/IMG_20220320_154902.jpg')";
   else if(zone=="PM"&&h==12||h<5)   
    document.getElementById("background").style.backgroundImage="url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/good-afternoon-instagram-post-design-template-ec37d94e2e9449fc0f44db2df658c14a_screen.jpg?ts=1640726752')";
    else if(zone=="PM"&&h>=5&&h<8)  
    document.getElementById("background").style.backgroundImage="url('https://www.wishesmsg.com/wp-content/uploads/Good-Evening.jpg')";
    else
    document.getElementById("background").style.backgroundImage="url('https://muskaanhindi.com/wp-content/uploads/2022/01/beautiful-good-night-images-hd.jpg')";
   }
img()
    var t=setTimeout(function(){calc()},1000);
    
}
calc()
