/*!
 * Copyright 2022 SrieMuksim
 */

$(document).ready(function () {
    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")
    if (email == null || email === '' ) {
    }else {
        accounts.style.display = ""
        loginButton.style.display = "none"
        accountButton.innerText = "user"
    }
})