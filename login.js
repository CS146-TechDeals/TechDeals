var username;
var password;
function setUsername(){
    username = document.getElementById("username").value;
}
function setPassword(){
    password = document.getElementById("password").value;
}
function login(){
    if(username == "testcase1" && password == "testcase1"){
        alert("Logged in!");
        $("#info1").show();
        $("label").hide();
        $("input").hide();
        $("button").hide();
        document.getElementById("usrname").value = "Bot #001";

    }
    else if(username == "testcase2" && password == "testcase2"){
        alert("Logged in!");
        $("#info2").show();
        $("label").hide();
        $("input").hide();
        $("button").hide();
    }
    else if(username == "testcase3" && password == "testcase3"){
        alert("Logged in!");
        $("#info3").show();
        $("label").hide();
        $("input").hide();
        $("button").hide();

    }
    else{
        alert("WRONG");
    }
}


