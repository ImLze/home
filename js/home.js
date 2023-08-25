var typed = new Typed('#hi', {
    strings: [
        "Lze.",
        "from Fuzhou, China."
    ],
    typeSpeed: 350,
    loop: true,
});

var typed = new Typed('#dev', {
    strings: [
	    "Develop",
            "C Language",
            "GitHub",
	    "Blog",
	    "Python",
    ],
    typeSpeed: 350,
    loop: true,
});

function goHome() {
    $("#home").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#homeの").show();
    $("#blogの").hide();
    $("#projectsの").hide();
}

function goBlog() {
    $("#blog").addClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projects").removeClass("nav-active");
    $("#blogの").show();
    $("#homeの").hide();
    $("#projectsの").hide();

    $.get("// RSS 接口", function (data) {
        $('#blogs').empty();
        $(data).find('item').each(function () {
            var $item = $(this);
            var title = $item.find('title').text();
            var link = $item.find('link').text();
            var html = "<div class=\"box-item\">";
            html += "<b>" + title + "</b>";
            html += "&nbsp;&nbsp;->&nbsp;&nbsp;<a href=\"" + link + "\" target=\"_blank\">Read More</a>";
            html += "</div>";
            
            $('#blogs').append(html);
        });
    });
}

function goProjects() {
    $("#projects").addClass("nav-active");
    $("#blog").removeClass("nav-active");
    $("#home").removeClass("nav-active");
    $("#projectsの").show();
    $("#blogの").hide();
    $("#homeの").hide();
}
