function checkLogin(){
    //obtener el usuario
    var user = document.getElementById("user").value;
    var password = document.getElementById("passw").value;

    var userArray = JSON.parse(sessionStorage.getItem("wUserArray"));
    alert("in session")

    if(user !== null && user!== "" ){
        if(password !== null && password !== ""){

            //login es correcto o esta aprobado
            //enviarme al dashboard
            if(user ==="bal" && password==="123"){
                window.location.href="dashboard.html";
            }else{
                alert("user or password are not correct");
            }

        }else{
            alert("password must not be empty");
        }
    }else{
        alert("user must not be empty");
    }

}

function goToRegistration(){
    window.location.href="registration.html";
}