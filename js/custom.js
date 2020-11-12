$(function () {
    
    new WOW().init(); 
    
    $(".scrolltop").on('click', function(){
        $("html,body").animate({
            scrollTop:0
        }, 1000)
    });
    
    $(window).on('scroll',function(){
        if ($(window).scrollTop() > 600) {
             $('.scroll_menu').addClass('animated slideInDown fix')
          } else {
              $('.scroll_menu').removeClass('animated slideInDown fix')
          }
    })
    
     $('.venobox').venobox({
        spinner: 'wandering-cubes',
        spinColor: '#ffba00',
    });
    
    $('.small_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true,
                }
                },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
                },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
                }
            ]
    });
    $('.brands_sliders').slick({
        infinite: true,
        dots: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                }
                },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
                }
            ]
    });
    $('.testi_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
                },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
    });

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: function (element) {
                return $(element).text();
            }
        }
    });
    $('.filter button').on("click", function () {
        var value = $(this).attr('data-name');
        $grid.isotope({
            filter: value
        });
        $('.filter button').removeClass('active');
        $(this).addClass('active');
    })
    $('.sort button').on("click", function () {
        var value = $(this).attr('data-name');
        $grid.isotope({
            sortBy: value
        });
        $('.sort button').removeClass('active');
        $(this).addClass('active');
    })
})
$(function () {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

        $(".active").css("color", "#fcac45");

    })

})
