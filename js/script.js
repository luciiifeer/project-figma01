
$('.main_banner_slidder').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplayspeed: 3000,
    speed: 1000
});

	
$('.main_slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right right"></i>`,
    centerMode: true,
    centerPadding: '0px',

    responsive: [
      
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1
        }
      },
            {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1
        }
      },
      

        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1
          }
        }

      ]
});

				