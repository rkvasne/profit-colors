// Funções utilitárias compartilhadas

// --- I18N (Internationalization) ---
const translations = {
    'pt-BR': {
        // Shared / Nav
        'nav.features': 'Recursos',
        'nav.developer': 'Desenvolvedor',
        'nav.github': 'GitHub',
        'nav.open_app': 'Abrir App',
        'nav.home': 'Início',

        // Index.html specific
        'hero.badge': 'Atualização v0.1.4',
        'hero.title': 'Customize seu <span class="gradient-text">ProfitChart</span><br>como um Profissional',
        'hero.subtitle': 'Evite tentativa e erro: selecione a cor e gere o código inteiro do Profit rapidamente (RGB, Hex e seletor visual).',
        'hero.cta_primary': 'Abrir Conversor',
        'hero.cta_secondary': 'Ver Código Fonte',
        'features.title': 'Feito para usar no dia a dia',
        'features.subtitle': 'Tudo o que você precisa para padronizar as cores do seu setup',
        'features.card1.title': 'Conversão Bidirecional',
        'features.card1.desc': 'Digite RGB/Hex ou use o seletor. Copie o código inteiro pronto para colar no Profit.',
        'features.card2.title': 'Histórico Inteligente',
        'features.card2.desc': 'Suas últimas cores ficam salvas no navegador para reaproveitar no setup.',
        'features.card3.title': '100% Responsivo',
        'features.card3.desc': 'Use no PC do trading ou no celular: funciona igual em qualquer tela.',
        'features.card4.title': 'Open Source',
        'features.card4.desc': 'Código aberto, simples e auditável. Sem trackers e sem coleta de dados.',
        'faq.title': 'Perguntas Frequentes',
        'faq.subtitle': 'Dúvidas comuns sobre o uso da ferramenta',
        'faq.q1': 'Preciso instalar algo?',
        'faq.a1': 'Não. É só abrir e usar no navegador.',
        'faq.q2': 'Funciona offline?',
        'faq.a2': 'Sim, depois de carregar uma vez, tende a funcionar sem internet (depende do cache do navegador).',
        'faq.q3': 'Funciona em qualquer versão do ProfitChart?',
        'faq.a3': 'Sim. O código gerado é o valor inteiro usado pelo ProfitChart para cores.',
        'faq.q4': 'O que fica salvo?',
        'faq.a4': 'Apenas o histórico de cores no seu navegador. Nada é enviado para servidores.',
        'faq.q5': 'O ProfitColors é gratuito?',
        'faq.a5': 'Sim. O projeto é gratuito e de código aberto. Você pode usar à vontade e contribuir no GitHub.',
        'dev.role': 'Full Stack Developer & Trader',
        'dev.bio': 'Especialista em criar ferramentas que unem produtividade e design. Criador do <strong>ProfitColors</strong>, <strong>Dahora App</strong> e <strong>Taskvasne</strong>. Focado em simplicidade e usabilidade.',
        'dev.contact': 'Contato',
        'footer.developed_by': 'Desenvolvido com 💙 por',
        'footer.privacy': 'Sem login. Sem telemetria. Seus dados ficam no seu navegador.',
        'footer.disclaimer': 'Este projeto não possui afiliação oficial com a Nelogica.',

        // App.html specific
        'app.title': 'Conversor RGB',
        'app.share': 'Compartilhar',
        'shortcuts.title': 'Atalhos de Teclado',
        'shortcuts.copy': 'Copiar Código',
        'shortcuts.hex': 'Ir para Hex',
        'shortcuts.rgb': 'Ir para RGB',
        'shortcuts.reset': 'Resetar',
        'input.hex': 'Hex Code',
        'input.rgb_string': 'RGB String',
        'preview.title': 'Cor Atual',
        'preview.copy': 'Copiar Código Profit',
        'result.profit': 'Profit:',
        'accordion.default': 'Cores Padrão ProfitChart',
        'accordion.table': 'Tabela de Cores (Hue)',
        'history.title': 'Histórico Recente',
        'tooltip.title': 'Atalhos de Teclado',
        'tooltip.copy': 'Copiar Código',
        'tooltip.hex': 'Focar Hex',
        'tooltip.rgb': 'Focar R/G/B',
        'tooltip.reset': 'Limpar/Resetar',
        'copy.success': 'Copiado!',
        'copy.error': 'Não foi possível copiar',
        'share.title': 'ProfitColors',
        'share.text': 'Converta cores RGB para o ProfitChart',
        'share.copied': 'Link copiado!'
    },
    'en': {
        // Shared / Nav
        'nav.features': 'Features',
        'nav.developer': 'Developer',
        'nav.github': 'GitHub',
        'nav.open_app': 'Open App',
        'nav.home': 'Home',

        // Index.html specific
        'hero.badge': 'Update v0.1.4',
        'hero.title': 'Customize your <span class="gradient-text">ProfitChart</span><br>like a Pro',
        'hero.subtitle': 'Avoid trial and error: select the color and generate the full Profit code quickly (RGB, Hex and visual picker).',
        'hero.cta_primary': 'Open Converter',
        'hero.cta_secondary': 'View Source Code',
        'features.title': 'Made for daily use',
        'features.subtitle': 'Everything you need to standardize your setup colors',
        'features.card1.title': 'Bidirectional Conversion',
        'features.card1.desc': 'Type RGB/Hex or use the picker. Copy the full code ready to paste into Profit.',
        'features.card2.title': 'Smart History',
        'features.card2.desc': 'Your last colors are saved in the browser to reuse in your setup.',
        'features.card3.title': '100% Responsive',
        'features.card3.desc': 'Use on your trading PC or mobile: works the same on any screen.',
        'features.card4.title': 'Open Source',
        'features.card4.desc': 'Open source, simple and auditable. No trackers and no data collection.',
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Common questions about using the tool',
        'faq.q1': 'Do I need to install anything?',
        'faq.a1': 'No. Just open and use in your browser.',
        'faq.q2': 'Does it work offline?',
        'faq.a2': 'Yes, after loading once, it tends to work without internet (depends on browser cache).',
        'faq.q3': 'Does it work on any ProfitChart version?',
        'faq.a3': 'Yes. The generated code is the integer value used by ProfitChart for colors.',
        'faq.q4': 'What is saved?',
        'faq.a4': 'Only the color history in your browser. Nothing is sent to servers.',
        'faq.q5': 'Is ProfitColors free?',
        'faq.a5': 'Yes. The project is free and open source. You can use it freely and contribute on GitHub.',
        'dev.role': 'Full Stack Developer & Trader',
        'dev.bio': 'Specialist in creating tools that combine productivity and design. Creator of <strong>ProfitColors</strong>, <strong>Dahora App</strong> and <strong>Taskvasne</strong>. Focused on simplicity and usability.',
        'dev.contact': 'Contact',
        'footer.developed_by': 'Developed with 💙 by',
        'footer.privacy': 'No login. No telemetry. Your data stays in your browser.',
        'footer.disclaimer': 'This project has no official affiliation with Nelogica.',

        // App.html specific
        'app.title': 'RGB Converter',
        'app.share': 'Share',
        'shortcuts.title': 'Keyboard Shortcuts',
        'shortcuts.copy': 'Copy Code',
        'shortcuts.hex': 'Go to Hex',
        'shortcuts.rgb': 'Go to RGB',
        'shortcuts.reset': 'Reset',
        'input.hex': 'Hex Code',
        'input.rgb_string': 'RGB String',
        'preview.title': 'Current Color',
        'preview.copy': 'Copy Profit Code',
        'result.profit': 'Profit:',
        'accordion.default': 'ProfitChart Default Colors',
        'accordion.table': 'Color Table (Hue)',
        'history.title': 'Recent History',
        'tooltip.title': 'Keyboard Shortcuts',
        'tooltip.copy': 'Copy Code',
        'tooltip.hex': 'Focus Hex',
        'tooltip.rgb': 'Focus R/G/B',
        'tooltip.reset': 'Clear/Reset',
        'copy.success': 'Copied!',
        'copy.error': 'Could not copy',
        'share.title': 'ProfitColors',
        'share.text': 'Convert RGB colors for ProfitChart',
        'share.copied': 'Link copied!'
    }
};

let currentLang = localStorage.getItem('profit_lang') || 'pt-BR';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('profit_lang', lang);
    document.documentElement.lang = lang;
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'pt-BR' ? 'EN' : 'PT';
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Translate attributes (title)
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang][key]) {
            element.setAttribute('title', translations[lang][key]);
        }
    });
}

// Copiar para clipboard com feedback
function copyToClipboard(text, messageKey = 'copy.success') {
    const message = translations[currentLang][messageKey] || translations[currentLang]['copy.success'] || 'Copiado!';
    
    navigator.clipboard.writeText(text)
        .then(() => {
            showCopyMessage(message);
        })
        .catch(() => {
            const errorMsg = translations[currentLang]['copy.error'] || 'Não foi possível copiar';
            showCopyMessage(errorMsg);
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
    const title = translations[currentLang]['share.title'] || 'ProfitColors';
    const text = translations[currentLang]['share.text'] || 'Converta cores RGB para o ProfitChart';
    
    if (navigator.share) {
        navigator.share({
            title: title,
            text: text,
            url: window.location.href
        }).catch(() => {
            copyToClipboard(window.location.href, 'share.copied');
        });
    } else {
        copyToClipboard(window.location.href, 'share.copied');
    }
}

// Lógica da FAQ na Landing Page e Init Geral
document.addEventListener('DOMContentLoaded', () => {
    // Init language
    updateLanguage(currentLang);
    
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'pt-BR' ? 'en' : 'pt-BR';
            updateLanguage(newLang);
        });
    }

    // FAQ
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
