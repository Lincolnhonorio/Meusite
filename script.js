function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

function showTab(tabId) {
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active-content');
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active-content');
    }

    const activeTab = Array.from(document.querySelectorAll('.tab')).find(tab => 
        tab.getAttribute('onclick').includes(tabId)
    );
    if (activeTab) {
        activeTab.classList.add('active');
    }


    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.remove('show');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
