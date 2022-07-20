function input(){
 mail=document.getElementById("ml").value;
 con  = 0
  l = mail.length
  for(i=0;i<l;i++){
   if(mail[i]!="@")
   con = 1 
   else {
   con = 0 
   break
   }
  }
  if (con == 1 ){
   mail=mail+"@gmail.com"
   document.getElementById("ml").value=mail
  }
  if (mail.endsWith("@gmail.com")){
   document.getElementById("mailbox").innerText="email verified"
  console.log("yes")
  } 
   else{
   document.getElementById("mailbox").innerText="invalid email"
   console.log("no")
   }
    }

function checkpass1(){
   fname = document.getElementById("first_name").value
   lname = document.getElementById("last_name").value
   uname = document.getElementById("uname").value
   console.log(fname,lname,uname)
}

function checkpass(){
   var u=/[A-Z]/g
   var lu=/[a-z]/g
   var nu=/[0-9]/g
   // var s =['!','@','*','.']
   passowrd=document.getElementById("pass").value
   console.log(passowrd)
   if(passowrd.length<8 )
   document.getElementById("pass_m").innerHTML="password too short shoud be at least 8 characters"
   else if (passowrd.match(fname) || passowrd.match(lname) || passowrd.match(uname))
   document.getElementById("pass_m").innerHTML="cannot create password on the input credentials"
   else if ( passowrd.match(u) && passowrd.match(lu) && passowrd.match(nu) &&(passowrd.match('#') ||passowrd.match('.')||passowrd.match('*')||passowrd.match('@')) ){
      document.getElementById("pass_m").innerHTML="valid password"
   }
   else
   document.getElementById("pass_m").innerHTML="invalid password"
}