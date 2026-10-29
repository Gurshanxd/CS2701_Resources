function checkName(){
    let name = document.getElementById("userName").value.trim();

    if(name === ""){
        alert("Do you know how to read??? enter your name:");
    }
    else{
        alert("So you do know how to read, rare");
    }
}