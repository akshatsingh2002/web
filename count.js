function count(){
    n = document.getElementById("text_area").value
    val = document.getElementById("value").value
    splitstring = val.split("")
    r_string = splitstring.reverse()
    j_string = r_string.join("")
    console.log(j_string)
    console.log(val)
    console.log(n)
    arr= n.match(val)
    arr2 = n.match(j_string)
    document.getElementById("final_cout").innerHTML=arr.length + arr2.length
   
}