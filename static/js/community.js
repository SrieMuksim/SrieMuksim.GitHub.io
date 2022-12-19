/*!
 * Copyright 2022 SrieMuksim
 */


$(document).ready(function () {
    var email = localStorage.getItem("email")
    var password = localStorage.getItem("password")
    if (email == null || email === '' ) {
        localStorage.setItem("email", "aaa@qq.com")
        localStorage.setItem("password", "123")
    }else {
        accounts.style.display = "flex"
        loginButton.style.display = "none"
    }
    var form = {}
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    form.date = year + "." + month + "." + day
    form.name = "THEÓ PERM"
    form.description = "独自のクリーミーな泡剤形で、施術・仕上がりがもっと快適に。 ジオパーマは、リッジの効いたパーマスタイルから、やわらかでナチュラルなパーマスタイルまで、幅広いデザインと髪質へ対応し、あらゆるメンズのスタイルニーズを叶えていく。"
    form.type = "Japen"
    form.topic1 = "New Form"
    form.content1 = "Advancing the economic networks of the future."
    form.topic2 = "New Form"
    form.content2 = "Advancing the economic networks of the future."
    form.author = "SrieMuksim"
    form.id =1;

    var web = localStorage.getItem("form")
    if(web==null || web==='') {
        web = "[]"
        var webJson = JSON.parse(web)
        webJson.push(form)
        localStorage.setItem("form", JSON.stringify(webJson))
    }

    form = localStorage.getItem("form")
    var formJson = {}
    formJson.form = JSON.parse(form)

    $.get("static/tpl/post.tpl", function(result){
        var html = ejs.compile(result)(formJson);
        $(".gallery-web-show").html(html);
    });

})

