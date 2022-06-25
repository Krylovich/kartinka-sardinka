$('.blog-slides').slick ({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    variableWidth: false,
    waitForAnimated: false,
    mobileFirst: true,
    responsive: [
        {  
            breakpoint: 430,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});