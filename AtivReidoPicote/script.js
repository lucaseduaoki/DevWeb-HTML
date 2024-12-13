//Tela Splash
document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.container');
    
    function hideSplashScreen() {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }, 5000);
    }

    setTimeout(hideSplashScreen, 3000); 
});

