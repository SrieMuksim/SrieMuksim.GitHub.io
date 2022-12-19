/*!
 * Copyright 2022 SrieMuksim
 */
var form = JSON.parse(localStorage.getItem("form"))
var formJson = {}
var url = window.location.href

var id = url.split("id=")[1]
console.log(id)

for(i = 0; i<form.length; i++) {
    if(form[i].id == id) {
        formJson.form = form[i]
        $.get("static/tpl/webDisplay.tpl", function(result){
            var html = ejs.compile(result)(formJson);
            $(".sections").html(html);
        });
        var email = localStorage.getItem("email")
        var password = localStorage.getItem("password")
        if (email == null || email === '' ) {
        }else {
            accounts.style.display = "flex"
            loginButton.style.display = "none"
        }
    }
}

function deleteItem() {
    for(i = 0; i<form.length; i++) {
        if(form[i].id == id) {
            form.splice(i,1)
            $(".gallery-comments").remove()
            localStorage.setItem("form", JSON.stringify(form))
            window.location.href = "/community.html"
        }
    }
}
