function input(){
 mail=document.getElementById("ml").value;
 for(i=0;i<mail.length;i++){
  if(mail[i]=="@"){
  document.getElementById("ml").value=mail+"gmail.com"
  mail=mail+"gmail.com"
  break
  }
 }
    if(mail.endsWith("@gmail.com")){
      document.getElementById("mailbox").innerText="email verified"
      // return false
    }
     else{ 

        document.getElementById("mailbox").innerText="invalid email only use gmail id"
        console.log('@ is not allowed')
        // return false
     }
  
    }