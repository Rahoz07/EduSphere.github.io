// Redirigir de Login a Registro
document.addEventListener("DOMContentLoaded", function() 
{
    const registerLink = document.querySelector(".register-link");
    if (registerLink) 
    {
        registerLink.addEventListener("click", function(event) 
        {
            event.preventDefault();
            window.location.href = "registro.html";
        });
    }
    
// Redirigir de Registro a Login
    const loginLink = document.querySelector(".login-link");
    if (loginLink) 
    {
        loginLink.addEventListener("click", function(event) 
        {
            event.preventDefault();
            window.location.href = "login.html";
        });
    }
});