function change(){
 n=document.getElementById("area").value
 var line=n.split("\r\n|\r|\n")

 document.getElementById("area").innerText=line
 console.log(line)  
}