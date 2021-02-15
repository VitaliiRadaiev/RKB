{
    let header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 10) {
            header.classList.add('_is-scroll');
        } else {
            header.classList.remove('_is-scroll');
        }
    })
}
