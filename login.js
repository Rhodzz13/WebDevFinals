function auth() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (email === 'admin@gmail.com' && password === '123456') {
        window.location.assign('page2.html');
        return false; 
    } else {
        alert('Invalid information');
        return false; 
    }
}


const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

