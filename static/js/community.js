/*!
 * Copyright 2022 SrieMuksim
 */


$(document).ready(function () {
    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")
    if (email == null || email === '' ) {
    }else {
        accounts.style.display = "flex"
        loginButton.style.display = "none"
    }
})

var form = localStorage.getItem("form")
var formJson = {}
formJson.form = JSON.parse(form)

$.get("static/tpl/post.tpl", function(result){
    var html = ejs.compile(result)(formJson);
    $(".gallery-web-show").html(html);
});