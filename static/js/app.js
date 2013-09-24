$(document).ready(function() {
    $('.nav li').each(function(i, value) {
        if($(value).find("a").attr("href") === window.location.pathname) {
            $(value).addClass('active');
        }
    });

    if(window.location.hash) {
        $(window.location.hash).show();
    } else {
        // auto-detect OS
        var platform = navigator.platform;
        if(/mac/i.test(platform)) {
            $("#collapseMac").addClass("in");
        } else if(/linux/i.test(platform)) {
            $("#collapseLinux").addClass("in");
        } else {
            // default to Windows
            $("#collapseWindows").addClass("in");
        }
    }
});
