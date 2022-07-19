function input(){
 mail=document.getElementById("ml").value;
    if(mail.endsWith("@gmail.com")){
        document.getElementById("mailbox").innerText="invalid email only use gmail id"
        console.log('@ is not allowed')
        return false
    }
    else 
    document.getElementById("mailbox").innerText=""
  }
  
