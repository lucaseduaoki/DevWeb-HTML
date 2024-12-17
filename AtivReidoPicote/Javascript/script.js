document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.container');
    const loginForm = document.querySelector('.login-form'); 

    function hideSplashScreen() {
        splashScreen.style.opacity = 0;
        splashScreen.style.visibility = "hidden"; 
        setTimeout(() => {
            splashScreen.style.display = 'none'; 
            mainContent.style.display = 'block'; 
        }, 1000); 
    }
    setTimeout(hideSplashScreen, 3000);

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        window.location.href = "home.html"; 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('agendamento');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const servico = document.getElementById('servico').value;

        const agendamento = {
            nome: nome,
            telefone: telefone,
            data: data,
            hora: hora,
            servico: servico
        };

        localStorage.setItem('agendamento', JSON.stringify(agendamento));

        alert('Agendamento salvo com sucesso!');
        
        window.location.href = "historico.html";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".icon-hamb"); 
    const header = document.querySelector(".cabecalho"); 

    if (menuIcon && header) {
       
        menuIcon.addEventListener("click", () => {
            header.classList.toggle("active");
            console.log("Menu toggle acionado!"); 
        });
    } else {
        console.error("Elementos necessários para o menu não foram encontrados!");
    }
});
