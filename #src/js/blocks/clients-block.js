{
    let clientsBLock = document.querySelector('.clients-block');
    if(clientsBLock) {
        let dataSlider;
        let slider = clientsBLock.querySelector('.clients-block__list');
        function mobileSlider() {
			if(document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
				dataSlider = new Swiper(clientsBLock.querySelector('.clients-block__list'), {
					slidesPerView: 1,
					//centeredSlides: true,
					speed: 600,
                    navigation: {
                        nextEl: clientsBLock.querySelector('.clients-block__slider-btn_next'),
                        prevEl: clientsBLock.querySelector('.clients-block__slider-btn_prev'),
                    },
				});

				slider.dataset.mobile = 'true';

				//mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 767) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					dataSlider.destroy();
				}
			}
		}

        mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
    }
}