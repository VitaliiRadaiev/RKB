// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		let classNameElem = document.querySelector('.burger').dataset.activel;
		document.querySelector(`.${classNameElem}`).classList.toggle('open');
		document.body.classList.toggle('lock');
	}
	$('.burger').click((e) => burgerBtnAnimation(e));

	let menuCloseBtn = document.querySelector('.menu__mobile-close');
	if(menuCloseBtn) {
		menuCloseBtn.addEventListener('click', () => {
			document.body.classList.remove('lock');
			document.querySelector('.header__menu').classList.remove('open')
		})
	}
// === Burger Handler =====================================================================	