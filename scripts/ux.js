$(document).ready(function() {

    if (screen.width <= 962) {
        $("#ms_3-b-inn-dropdown").click(function() {
            $("#ms_3-b-inn-dropdown").css("opacity", "1");
            $("#ms_3-b-inn-dropdown").css("max-height", "280px");
        })

        $("#ms_3-b-resort-dropdown").click(function() {
            $("#ms_3-b-resort-dropdown").css("opacity", "1");
            $("#ms_3-b-resort-dropdown").css("max-height", "320px");
        })
    }

    if (screen.width <= 601) {
        $("#nav-mobile").click(function() {
            if ( $("#nav-mobile_item-container").css("display") == "none" ){
                $("#nav-mobile_item-container").css("display", "flex");
                $("#nav-mobile").css("background-image", "url(../images/hamburger_close.png)");
            } else {
                $("#nav-mobile_item-container").css("display", "none");
                $("#nav-mobile").css("background-image", "url(../images/hamburger_open.png)");
            }
        })


    }
})