
{
    let products = document.querySelector('.testimonials-block');
    if(products) {
        let dataSlider = new Swiper(products.querySelector('.testimonials-block__slider'), {
            speed: 600,
            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            
            pagination: {
            	el: products.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: products.querySelector('.testimonials-block__slider-btn_next'),
                prevEl: products.querySelector('.testimonials-block__slider-btn_prev'),
            },
            
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 44,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 44,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 44,
                },
                1268: {
                    slidesPerView: 5,
                    spaceBetween: 44,
                },
            },
            
        });
    }
}
