console.log("usman");


$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav2 = $(".navbar-brand");
        $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav2.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav3 = $(".navbar-nav");
        $nav3.toggleClass('scrolled', $(this).scrollTop() > $nav3.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-light .navbar-nav .nav-link");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".logo1");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-toggler");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});



/*================== Read More Text ==================*/
$(function () {
    var showChar = 200;
    var moretext = `Learn more &nbsp; <i class="fas fa-arrow-right"></i>`;
    var lesstext = `Learn less &nbsp; <i class="fas fa-arrow-left"></i>`;
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-content "><span>' + hide_content +
                '</span><a href="" class="morelinks btn btn-read mt-41 mb-5" style="display:block;font-size:17px;">' + moretext + '</a>' +
                '</span>';
            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 200;
    var moretext = `Read more &nbsp; <i class='fa fa-arrow-right'></i>`;
    var lesstext = `Read less &nbsp; <i class='fa fa-arrow-left'></i>`;
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-content"><span>' + hide_content +
                '</span><a href="" class="morelink btn btn-reads arrow-outline mb-5 link-style  mt-140" style="display:block;margin-left:-47px;font-size:17px">' + moretext + '</a>' +
                '</span> ' + '';
            $(this).html(html);
        }
    });

    $(".morelink").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
//Custom

/*===================== Load More Images ======================*/
$(function () {
    $("#portfolio .btns").on("click", function () {
        $(".btns").removeClass("active");
        $(this).addClass("active");
    });
});
$(function () {
    $('a').smoothScroll();
});
/*======================= Owl Carousel =======================*/
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        slideSpeed: 1000,
        autoPlay: true
    });
});
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
/*===================== Js Ranks Counter ====================*/
$(document).ready(function () {

    var counters = $(".counter-value");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 2);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});
/*=================== Change Bannner on Click on Banner =================== */
function change_banner(id) {
    $('.hello').addClass('d-none');
    $('#img-' + id).removeClass('d-none');
    $('.yes-sir').addClass('chah-overlay');
    $('#overlay-' + id).removeClass('chah-overlay');


}

function change_overlay(id) {
    debugger
}
/*==================== 3D Slider Java Script ====================*/
$(function () {
    $(".no-display")
        .slice(0, 9)
        .show();
    $("#load-more").on("click", function (e) {
        e.preventDefault();
        $(".no-display:hidden")
            .slice(0, 3)
            .slideDown();
        if ($(".no-display:hidden").length == 0) {
            $("#load-more").html("No More Content");

            // $(".btn-load-border").fadeOut("slow");
        }
        $("html,body").animate({
                scrollTop: $(this).offset().center
            },
            1500
        );
    });
});

/*=================== Filterizer Js ====================*/
$(document).ready(function () {
    filterSelection("all");
});
/*===================== Filter Script  Script ======================*/
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 50) {
        //clearHeader, not clearheader - caps H
        $("nav").removeClass("pt-45");
    }
    if (scroll == 0) {
        $("nav").addClass("pt-45 ");
    }
});