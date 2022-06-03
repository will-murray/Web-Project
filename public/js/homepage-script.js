

function login(){
    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
    if(username == "" || password == ""){
        alert("invalid input");
    }else{
        foo();
    }
}  

function foo(){
    //check if the username is taken

    var body = document.body;
    body.style.backgroundColor = "lime";
    var user = document.getElementById("username-input");
    
    
}

