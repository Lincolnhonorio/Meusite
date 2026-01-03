function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

function showTab(tabId) {
    // 1. Esconde todos os conteúdos
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active-content');
    });

    // 2. Remove classe ativa de todas as abas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // 3. Mostra o conteúdo da aba clicada
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active-content');
    }

    // 4. Adiciona classe ativa na aba clicada procurando pelo texto/id
    // Isso é mais seguro que usar event.target
    const activeTab = Array.from(document.querySelectorAll('.tab')).find(tab => 
        tab.getAttribute('onclick').includes(tabId)
    );
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // 5. Fecha o menu mobile (ESSENCIAL)
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.remove('show');
    }
}
