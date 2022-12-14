/*!
 * Copyright 2022 SrieMuksim
 */

new WOW().init();
let menuState = 0;
let loginState = 0;
let signupState = 0;
let accounts = document.getElementById('navbar-account')
let loginButton = document.getElementById('navbar-login')
let accountButton = document.getElementById('account')

$(document).ready(function () {
    $(".canvas-layout").fadeIn()
    $("a").click(function (event) {
        event.preventDefault();
        redirectLink = this.href;
        $(".canvas-layout").fadeOut().delay(1000, redirectToLink);

    });

    function redirectToLink() {
        window.location = redirectLink;
    }

});


window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.offsetHeight;

    let scrollPercentage = scrollTop / (documentHeight - windowHeight);
    let scrollY = 95 - scrollPercentage * 80;

    var sphere = document.getElementById('sphere');
    sphere.style.bottom = scrollY + 'px';
})

function getMenu() {
    let menuButtonBox = document.getElementById('menu-box')
    let menuButton = document.getElementById('menu-button')
    let menuLinks = document.getElementsByClassName('menu-links')
    if (menuState == 0) {
        setTimeout(() => {
            menuButtonBox.style.width = '100%';
            menuButton.innerText = 'Close';
            for (var i = 0; i < menuLinks.length; i++) {
                menuLinks[i].style.display = 'block'
            }
            menuState = 1
        }, 10);
    } else {
        setTimeout(() => {
            document.getElementById('menu-box').style.width = '0';
            menuButton.innerText = 'Menu';
            menuState = 0
        }, 10);
        setTimeout(() => {
            for (var i = 0; i < menuLinks.length; i++) {
                menuLinks[i].style.display = 'none'
            }
        }, 1);
    }
}

function doLogin() {
    let signupButton = document.getElementById('signup')
    let loginButton = document.getElementById('login')
    if (loginState == 0) {
        setTimeout(() => {
            signupButton.style.animationDirection = 'reverse';
            signupButton.className = "login login-animation"
        }, 10);
        setTimeout(() => {
            signupButton.style.display = 'none';
            signupState = 0
        }, 450);
        setTimeout(() => {
            loginButton.style.animationDirection = 'normal';
            loginButton.style.display = 'flex';
        }, 10);
        setTimeout(() => {
            loginButton.style.opacity = 1
            loginButton.className = "login"
            loginState = 1
        }, 450);
    } else {
        setTimeout(() => {
            loginButton.style.animationDirection = 'reverse';
            loginButton.className = "login login-animation"
        }, 10);
        setTimeout(() => {
            loginButton.style.display = 'none';
            loginState = 0
        }, 450);
    }
}

function doSignup() {
    let signupButton = document.getElementById('signup')
    let loginButton = document.getElementById('login')
    if (signupState == 0) {
        setTimeout(() => {
            loginButton.style.animationDirection = 'reverse';
            loginButton.className = "login login-animation"
        }, 10);
        setTimeout(() => {
            loginButton.style.display = 'none';
            loginState = 0
        }, 450);
        setTimeout(() => {
            signupButton.style.animationDirection = 'normal';
            signupButton.style.display = 'flex';
        }, 10);
        setTimeout(() => {
            signupButton.style.opacity = 1
            signupButton.className = "login"
            signupState = 1
        }, 450);
    } else {
        setTimeout(() => {
            signupButton.style.animationDirection = 'reverse';
            signupButton.className = "login login-animation"
        }, 10);
        setTimeout(() => {
            signupButton.style.display = 'none';
            signupState = 0
        }, 450);
    }
}

function createCookie(name,value,days,path,domain,secure){
    if(days){
        var date = new Date();
        date.setTime(date.getTime()+(5*24*60*60*1000));
        var expires = date.toGMTString();
    }
    else var expires = "";
    cookieString = name + "=" +excape(value);
    if(expires) cookieString += ";expires=" +expires;
    if(path) cookieString += ";path=" + escape(path);
    if(domain) cookieString += ";domain=" + escape(domain);
    if(secure) cookieString += ";secure=" + escape(secure);
    document.cookie = sookieString;

}

function loginSuccess() {
    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")
    console.log(email)
    if (email == null || email === '' || !(email===$("#email").val()&&password===$("#password").val())) {
        window.alert("login fail")
    }else {
        doLogin()
        accounts.style.display = "flex"
        loginButton.style.display = "none"
    }
}

function register() {
    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")
    if (remail == null || email === '' || !(email===$("#remail").val()&&password===$("#rpassword").val())) {
        localStorage.setItem("email", $("#remail").val())
        localStorage.setItem("password", $("#rpassword").val())
        doLogin()
    }else {
        doLogin()
        accounts.style.display = "flex"
        loginButton.style.display = "none"
    }
}

