document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home-link');
    const gameLink = document.getElementById('game-link');
    const homePage = document.getElementById('home');
    const gamePage = document.getElementById('game');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault();
        homePage.style.display = 'block';
        gamePage.style.display = 'none';
    });

    gameLink.addEventListener('click', function (event) {
        event.preventDefault();
        homePage.style.display = 'none';
        gamePage.style.display = 'block';
    });

    // Show home page by default
    homePage.style.display = 'block';
});
