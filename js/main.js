// Funções utilitárias compartilhadas

// Copiar para clipboard com feedback
function copyToClipboard(text, message = 'Copiado!') {
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopyMessage(message);
        })
        .catch(() => {
            showCopyMessage('Não foi possível copiar');
        });
}

// Mostrar mensagem toast
function showCopyMessage(msg) {
    const messageEl = document.getElementById('copyMessage');
    if (!messageEl) return;
    
    messageEl.textContent = msg;
    messageEl.classList.add('show');
    
    setTimeout(() => {
        messageEl.classList.remove('show');
    }, 2000);
}

// Compartilhar URL
function shareUrl() {
    if (navigator.share) {
        navigator.share({
            title: 'ProfitColors',
            text: 'Converta cores RGB para o ProfitChart',
            url: window.location.href
        }).catch(() => {
            copyToClipboard(window.location.href, 'Link copiado!');
        });
    } else {
        copyToClipboard(window.location.href, 'Link copiado!');
    }
}

// Lógica da FAQ na Landing Page
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Fecha outros
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            // Toggle atual
            item.classList.toggle('active');
        });
    });

    // Atualizar ano copyright
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
