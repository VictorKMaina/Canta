$(document).ready(function () {

    $("#dashboard").click(function () {
        $(".dash").slideDown();

        $(".one").click(function() {
            $("#userequests").toggle();
        });
        $(".prog").click(function() {
            $("#progress").toggle();
        });
        $(".three").click(function(){
        $("#usereviews").toggle();
        
    })

    });
});