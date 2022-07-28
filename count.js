function count(){
    n = document.getElementById("text_area").value
    val = document.getElementById("value").value
    splitstring = val.split("")
    r_string = splitstring.reverse()
    j_string = r_string.join("")
    console.log(j_string)
    console.log(val)
    console.log(n)
    count2 = 0
    l=val.length
    for(i=0;i<n.length;i++){
        if(n.substring(i,i+l)==val ||n.substring(i,i+l)==j_string)
        count2++
    }
    console.log(count2)
    document.getElementById("final_cout").value=count2
    
}