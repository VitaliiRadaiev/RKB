{
    let sliderImages = document.querySelector('.slider-images');
    if(sliderImages) {
        let dataSlider = new Swiper(sliderImages.querySelector('.swiper-container'), {
            speed: 600,
            preloadImages: false,
            loop: true,
            lazy: {
                loadOnTranstitionStart: false,
                loadPrevNext:true,
            },
            navigation: {
                nextEl: sliderImages.querySelector('.slider-images__btn_next'),
                prevEl: sliderImages.querySelector('.slider-images__btn_prev'),
            },
            
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
    
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
            },
            
        });
    }
}