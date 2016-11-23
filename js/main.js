$(document).ready(function () {
    $(".hiden_menu_show").click(function (event) {
        event.preventDefault();
        $(".hiden_menu").toggleClass("active");
    });
    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    
});