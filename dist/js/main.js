function menu () {
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navbar');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            navigation.classList.add('open');
        }else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            navigation.classList.remove('open');
        }
    });
}

menu();