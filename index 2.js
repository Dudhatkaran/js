function abc(){
    var name = document.getElementById("input").value;
    if(name == ""){
        document.getElementById("message").innerHTML = "*this field is required";
        document.getElementById("input").style.border = "1px solid red"
    }else{
        document.getElementById("message").innerHTML = "";
        document.getElementById("input").style.border = "1px solid black"
    }
}