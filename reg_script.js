function registerNewUser(){
    var reg_user = document.getElementById("user_reg").value;
    var reg_password = document.getElementById("passw_reg").value;

    //alert(reg_user);
    var userArray = [];

    if(sessionStorage.getItem("wUserArray")!==null){
        userArray = JSON.parse(sessionStorage.getItem("wUserArray"));
    }

    var current_reg = {
        user: reg_user,
        password: reg_password
    };

    userArray.push(current_reg);

    sessionStorage.setItem("wUserArray", JSON.stringify(userArray));
}

function goToLogin(){
    window.location.href="index.html";
}