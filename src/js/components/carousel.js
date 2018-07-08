window.carousel = {
    slider_selector: $('.slider-showcase-section'),
    tabs_slider_selector: $('.tabs-section .js-slider'),
    init: function() {
        window.carousel.slider();
        window.carousel.tabs_with_slider();
    },
    slider: function() {
        window.carousel.slider_selector.each(function(idx) {
            var $selector_id;
            $selector_id = $(this).attr('id');
            if(!$selector_id) {
                var id = 'slider_' + (idx + 1);
                $selector_id = $(this).attr('id', id);
            }
            var selector = $selector_id.find('.js-slider');

            var arrow_prev = $(selector).parent().find('.arrow-nav-wrapper .arrow-prev'),
                arrow_next = $(selector).parent().find('.arrow-nav-wrapper .arrow-next');

          $(selector).on('init reinit', function (event,slick) {
            var items = slick.$slides.length;
            var isDesktop = null;
            $(window).resize(function() {
              if (window.tools.globalWW >= 1024) {
                isDesktop = true;
              } else {
                isDesktop = false;
              }
              if(isDesktop) {
                if(items <= 3) {
                  $(selector).siblings('.arrow-nav-wrapper').addClass('is-hide');
                }
              } else {
                if(items < 0) {
                  $(selector).siblings('.arrow-nav-wrapper').addClass('is-hide');
                } else {
                  $(selector).siblings('.arrow-nav-wrapper').removeClass('is-hide');
                }
              }
            }).trigger('resize');
          });

            $(selector).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        arrows: false
                        }
                    }
                ]
            });
            $(arrow_prev).on('click', function () {
                $(selector).slick('slickPrev');
            })
            $(arrow_next).on('click', function () {
                $(selector).slick('slickNext');
            })
        })
    },
    tabs_with_slider: function() {
      window.carousel.tabs_slider_selector.each(function(idx) {
        var $selector_id;
        $selector_id = $(this).attr('id');
        if (!$selector_id) {
          var id = 'tabs_slider_' + (idx + 1);
          $selector_id = $(this).attr('id', id);
        }
        var arrow_prev = $($selector_id).parent().find('.arrow-nav-wrapper .arrow-prev'),
          arrow_next = $($selector_id).parent().find('.arrow-nav-wrapper .arrow-next');

        $($selector_id).on('init reinit', function (event,slick) {
          var items = slick.$slides.length;
          var isDesktop = null;
          $(window).resize(function() {
            if (window.tools.globalWW >= 1024) {
              isDesktop = true;
            } else {
              isDesktop = false;
            }
            if(isDesktop) {
              if(items <= 4) {
                $($selector_id).siblings('.arrow-nav-wrapper').addClass('is-hide');
              }
            } else {
              if(items < 0) {
                $($selector_id).siblings('.arrow-nav-wrapper').addClass('is-hide');
              } else {
                $($selector_id).siblings('.arrow-nav-wrapper').removeClass('is-hide');
              }
            }
          }).trigger('resize');
        });


        $($selector_id).slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
        });
        $(arrow_prev).on('click', function () {
          $($selector_id).slick('slickPrev');
        })
        $(arrow_next).on('click', function () {
          $($selector_id).slick('slickNext');
        })

        $('#categoriesTabs .nav-link').on('click', function (e) {
          var currentItem = $(this).attr('href');
          e.preventDefault();
          setTimeout(function () {
            $(currentItem).find('.js-slider').slick('setPosition');
          }, 200)

        })
      })
    }
};
site.ready.push(function() {
    window.carousel.init();
})
site.resize.push(function () {
});