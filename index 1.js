var json = [
    {
        name: "karan",
        password: 1234
    },
    {
        name: "ankur",
        password: 1211
    }
]
function abc(){
    var name = document.getElementById("input").value;
    // var password = document.getElementById("password").value;
    for(i=o;i<json.length;i++){
        if(json[i]["name"] == name){
            if(json[i]["password"] == password){
                console.log("successfull");
            }
        }
    }
}


// function abc(){
    // var name = document.getElementById("input").value;
    if(name == ""){
        document.getElementById("message").innerHTML = "*this field is required";
        document.getElementById("input").style.border = "1px solid red"
    }else{
        document.getElementById("message").innerHTML = "";
        document.getElementById("input").style.border = "1px solid black"
    }
// }