//Declarando Variables
document.getElementById("btn_register").addEventListener("click", register);
document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesión);
window.addEventListener("resize", anchoPagina);

var container_login_register = document.querySelector(".container_login-register");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var fondo_login = document.querySelector(".fondo_login");
var fondo_register = document.querySelector(".fondo_register");

anchoPagina();

function anchoPagina() {
        if(window.innerWidth > 850){
            fondo_register.style.display = "block";
            fondo_login.style.display = "block";
    }else{
            fondo_register.style.display = "block";
            fondo_register.style.opacity = "1";
            fondo_login.style.display = "none";
            formulario_login.style.display = "block";
            formulario_register.style.display = "none";
            container_login_register.style.left = "0px";
        }
    }       


function iniciarSesión () {

    if (window.innerWidth > 850){
        formulario_register.style.display = "none";
        container_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        fondo_register.style.opacity = "1";
        fondo_login.style.opacity = "0";
}else{
        formulario_register.style.display = "none";
        container_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        fondo_register.style.display = "block";
        fondo_login.style.display = "none";
    }
}                    

function register () {

    if (window.innerWidth > 850){
        formulario_register.style.display = "block";
        container_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        fondo_register.style.opacity = "0";
        fondo_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        container_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        fondo_register.style.display = "none";
        fondo_login.style.display = "block";
        fondo_login.style.opacity = "1";
    }    
}    
