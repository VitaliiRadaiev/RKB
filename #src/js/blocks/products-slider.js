{
    let products = document.querySelector('.products');
    if(products) {
        let dataSlider = new Swiper(products.querySelector('.products__slider'), {
            speed: 600,
            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            
            pagination: {
            	el: products.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: products.querySelector('.products__slider-btn_next'),
                prevEl: products.querySelector('.products__slider-btn_prev'),
            },
            
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    slidesPerGroup: 2,
                },
            },
            
        });
    }
}
