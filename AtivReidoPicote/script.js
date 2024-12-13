document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.container');
    const loginForm = document.querySelector('.login-form'); // Seleciona o formulário de login

    // Função que esconde a tela Splash após 3 segundos e exibe o conteúdo principal
    function hideSplashScreen() {
        splashScreen.style.opacity = 0;
        splashScreen.style.visibility = "hidden"; // Esconde a tela splash após o fade
        setTimeout(() => {
            splashScreen.style.display = 'none'; // Remove do fluxo
            mainContent.style.display = 'block'; // Exibe a tela de login
        }, 1000); // Tempo após a animação de fade
    }

    // Esconde a tela Splash após 3 segundos
    setTimeout(hideSplashScreen, 3000);

    // Adicionando evento de submit no formulário de login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário (evita o reload da página)
        
        // Redirecionar diretamente para a página principal após o login
        window.location.href = "home.html"; // Alterar para a página desejada (página principal)
    });
});
