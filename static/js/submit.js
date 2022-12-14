/*!
 * Copyright 2022 SrieMuksim
 */

var part = 1

$(document).ready(function () {
    chooserPart()
})

function chooserPart() {
    switch (part){
        case 1:
            $("#picture1").css("display", "flex");
            $("#pictureSubmit1").css("display", "flex");
            $("#picture2").css("display", "none");
            $("#pictureSubmit2").css("display", "none");
            break
        case 2:
            $("#picture1").css("display", "none");
            $("#pictureSubmit1").css("display", "none");
            $("#picture2").css("display", "flex");
            $("#pictureSubmit2").css("display", "flex");
            break
    }
}

function switchPart(num) {
    if(num === 1) {
        part = 1
        $("#MainPart").attr("class","submit-pictures-button sd submit-active")
        $("#2Part").attr("class","submit-pictures-button sd")
        chooserPart()
    } else if (num === 2) {
        part =  2
        $("#MainPart").attr("class","submit-pictures-button sd")
        $("#2Part").attr("class","submit-pictures-button sd submit-active")
        chooserPart()
    }
}

function viewImage(num) {
    if(num === 1) {
        let file = $("#submit-img1").prop('files')[0];

        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function (even) {
                $('#submit-img-div1').css("background-image" , "url(" + even.currentTarget.result + ")");
            }
        }
    } else if (num === 2) {
        let file = $("#submit-img2").prop('files')[0];

        if (file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function (even) {
                $('#submit-img-div2').css("background-image" , "url(" + even.currentTarget.result + ")");
            }
        }
    }
}

function submitData() {
    var form = {}
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    form.date = year + "." + month + "." + day
    form.name = $("#submit_name").val()
    form.description = $("#submit_description").val()
    form.type = $("#submit_type").val()
    form.topic1 = $("#submit_topic1").val()
    form.content1 = $("#submit_content1").val()
    form.topic2 = $("#submit_topic2").val()
    form.content2 = $("#submit_content2").val()
    form.author = "SrieMuksim"
    form.id =Date.parse(date);


    var web = localStorage.getItem("form")
    if(web==null || web==='') {
        web = "[]"
    }
    var webJson = JSON.parse(web)

    webJson.push(form)

    localStorage.setItem("form", JSON.stringify(webJson))
    window.location.href = "/community.html"
}
