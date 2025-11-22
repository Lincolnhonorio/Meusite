function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
}

function showTab(tabId) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active-content');
    });

    // Remove classe ativa das abas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Mostra conteúdo da aba clicada
    document.getElementById(tabId).classList.add('active-content');
    event.target.classList.add('active');

    // Fecha o menu mobile ao clicar em uma aba
    const menu = document.getElementById('menu');
    if(menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
}
