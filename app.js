// Navegación de pestañas principales
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function showTab(tabId) {
    tabContents.forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === tabId) tab.classList.add('active');
        // Asegura que el detalle de proyecto se oculte si no es la pestaña de detalle
        if (tab.id === 'project-detail' && tabId !== 'project-detail') {
            tab.style.display = 'none';
        } else if (tab.id === 'project-detail' && tabId === 'project-detail') {
            tab.style.display = '';
        }
    });
    tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
}
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));
});

// Navegación lateral en About Me
const sideButtons = document.querySelectorAll('.side-btn');
sideButtons.forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab));
});

