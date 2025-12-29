/**
 * Lógica da Aplicação ProfitColors
 */

// Elementos DOM
const hexInput = document.getElementById('hexInput');
const rgbSingle = document.getElementById('rgbSingle');
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const colorPreview = document.getElementById('colorPreview');
const resultDiv = document.getElementById('result');
const colorPickerCanvas = document.getElementById('colorPicker');
const huePickerCanvas = document.getElementById('huePicker');

// Contextos Canvas
const ctxColor = colorPickerCanvas?.getContext('2d');
const ctxHue = huePickerCanvas?.getContext('2d');

// Estado
let currentColor = { r: 0, g: 0, b: 0 };
const HISTORY_KEY = 'colorHistory';

function clearElement(element) {
    while (element.firstChild) element.removeChild(element.firstChild);
}

// Conversão RGB para ProfitCode (Lógica Core)
function rgbToProfitCode(r, g, b) {
    return r + (g * 256) + (b * 256 * 256);
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Atualização da UI
function updateUI() {
    const { r, g, b } = currentColor;
    
    // Inputs Numéricos
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
    
    // Inputs Texto
    rgbSingle.value = `${r}, ${g}, ${b}`;
    hexInput.value = rgbToHex(r, g, b);
    
    // Preview
    colorPreview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    colorPreview.style.boxShadow = `0 0 20px rgb(${r}, ${g}, ${b})`;
    
    // Resultado Profit
    const profitCode = rgbToProfitCode(r, g, b);
    clearElement(resultDiv);
    resultDiv.append('Profit: ');
    const strong = document.createElement('strong');
    strong.textContent = String(profitCode);
    resultDiv.appendChild(strong);
    
    // Atualizar tabela (se existir linha selecionada)
    // updateTable(); // Simplificado para este exemplo
}

// Histórico
function addToHistory(r, g, b, code) {
    const historyContainer = document.getElementById('colorHistory');
    if (!historyContainer) return;

    // Verificar duplicata recente
    const firstItem = historyContainer.firstElementChild;
    if (firstItem && firstItem.dataset.code === String(code)) return;

    const item = document.createElement('div');
    item.className = 'history-item';
    item.dataset.code = code;
    item.onclick = () => {
        currentColor = { r, g, b };
        updateUI();
    };

    const swatch = document.createElement('div');
    swatch.className = 'history-swatch';
    swatch.style.backgroundColor = `rgb(${r},${g},${b})`;

    const info = document.createElement('div');
    info.className = 'history-info';

    const strong = document.createElement('strong');
    strong.textContent = String(code);

    const hex = document.createElement('span');
    hex.textContent = rgbToHex(r, g, b);

    info.appendChild(strong);
    info.appendChild(hex);
    item.appendChild(swatch);
    item.appendChild(info);

    historyContainer.insertBefore(item, historyContainer.firstChild);
    if (historyContainer.children.length > 12) {
        historyContainer.removeChild(historyContainer.lastChild);
    }
}

function getStoredHistory() {
    try {
        const raw = localStorage.getItem(HISTORY_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter((x) => x && typeof x === 'object')
            .filter((x) => Number.isFinite(x.r) && Number.isFinite(x.g) && Number.isFinite(x.b) && Number.isFinite(x.code))
            .slice(0, 12);
    } catch {
        try {
            localStorage.removeItem(HISTORY_KEY);
        } catch {}
        return [];
    }
}

function setStoredHistory(items) {
    try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, 12)));
    } catch {
        if (typeof showCopyMessage === 'function') {
            showCopyMessage('Não foi possível salvar o histórico');
        }
    }
}

function addToHistoryAndPersist(r, g, b, code) {
    const existing = getStoredHistory();
    const next = [{ r, g, b, code }, ...existing.filter((x) => x.code !== code)].slice(0, 12);
    setStoredHistory(next);
    addToHistory(r, g, b, code);
}

function renderStoredHistory() {
    const historyContainer = document.getElementById('colorHistory');
    if (!historyContainer) return;
    clearElement(historyContainer);
    const items = getStoredHistory();
    items.forEach((x) => addToHistory(x.r, x.g, x.b, x.code));
}

function hsvToRgb(h, s, v) {
    const c = v * s;
    const hp = (h % 360) / 60;
    const x = c * (1 - Math.abs((hp % 2) - 1));
    let r1 = 0;
    let g1 = 0;
    let b1 = 0;
    if (hp >= 0 && hp < 1) { r1 = c; g1 = x; b1 = 0; }
    else if (hp >= 1 && hp < 2) { r1 = x; g1 = c; b1 = 0; }
    else if (hp >= 2 && hp < 3) { r1 = 0; g1 = c; b1 = x; }
    else if (hp >= 3 && hp < 4) { r1 = 0; g1 = x; b1 = c; }
    else if (hp >= 4 && hp < 5) { r1 = x; g1 = 0; b1 = c; }
    else { r1 = c; g1 = 0; b1 = x; }
    const m = v - c;
    return {
        r: Math.round((r1 + m) * 255),
        g: Math.round((g1 + m) * 255),
        b: Math.round((b1 + m) * 255),
    };
}

function initProfitDefaults() {
    const colorsGrid = document.getElementById('profitHueGrid');
    const graysGrid = document.getElementById('profitGrayGrid');
    if (!colorsGrid || !graysGrid) return;

    clearElement(colorsGrid);
    clearElement(graysGrid);

    function createProfitTile({ r, g, b, label }) {
        const item = document.createElement('div');
        item.className = 'color-item-std';
        const swatch = document.createElement('div');
        swatch.className = 'std-swatch';
        swatch.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        const text = document.createElement('span');
        text.textContent = label;

        item.appendChild(swatch);
        item.appendChild(text);

        item.addEventListener('click', () => {
            window.loadColor(r, g, b);
        });

        return item;
    }

    const hueStep = 6;
    const hueColors = [];
    for (let hue = 0; hue <= 354; hue += hueStep) {
        const { r, g, b } = hsvToRgb(hue, 1, 1);
        hueColors.push({ r, g, b, label: `${hue}°`, sortHue: hue });
    }

    const specialByHue = new Map([
        [0, { r: 255, g: 0, b: 0, label: 'Vermelho (Baixa)', sortHue: 0 }],
        [120, { r: 0, g: 255, b: 0, label: 'Verde (Alta)', sortHue: 120 }],
        [162, { r: 0, g: 227, b: 150, label: 'Verde Profit', sortHue: 162 }],
        [210, { r: 46, g: 147, b: 250, label: 'Azul Profit', sortHue: 210 }],
        [354, { r: 255, g: 69, b: 96, label: 'Vermelho Profit', sortHue: 354 }],
    ]);

    hueColors
        .map((x) => specialByHue.get(x.sortHue) ?? x)
        .forEach(({ r, g, b, label }) => {
            colorsGrid.appendChild(createProfitTile({ r, g, b, label }));
        });

    const grays = [
        { r: 11, g: 15, b: 25, label: 'Fundo Dark' },
        { r: 21, g: 26, b: 37, label: 'Card Dark' },
        { r: 255, g: 255, b: 255, label: 'Branco' },
        { r: 230, g: 230, b: 230, label: 'Cinza 90%' },
        { r: 200, g: 200, b: 200, label: 'Cinza Claro' },
        { r: 179, g: 179, b: 179, label: 'Cinza 70%' },
        { r: 139, g: 155, b: 180, label: 'Cinza (Texto)' },
        { r: 128, g: 128, b: 128, label: 'Cinza 50%' },
        { r: 102, g: 102, b: 102, label: 'Cinza 40%' },
        { r: 64, g: 64, b: 64, label: 'Cinza Escuro' },
        { r: 51, g: 51, b: 51, label: 'Cinza 20%' },
        { r: 0, g: 0, b: 0, label: 'Preto (Fundo)' },
    ];

    grays.forEach(({ r, g, b, label }) => {
        graysGrid.appendChild(createProfitTile({ r, g, b, label }));
    });
}

function initColorTable() {
    const hueGrid = document.getElementById('hueColorGrid');
    const grayGrid = document.getElementById('grayColorGrid');
    if (!hueGrid || !grayGrid) return;

    clearElement(hueGrid);
    clearElement(grayGrid);

    function createColorTile({ r, g, b, label }) {
        const item = document.createElement('div');
        item.className = 'color-item-std';
        const swatch = document.createElement('div');
        swatch.className = 'std-swatch';
        swatch.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        const text = document.createElement('span');
        text.textContent = label;

        item.appendChild(swatch);
        item.appendChild(text);

        item.addEventListener('click', () => {
            window.loadColor(r, g, b);
        });

        return item;
    }

    const hueStep = 6;
    for (let hue = 0; hue <= 354; hue += hueStep) {
        const { r, g, b } = hsvToRgb(hue, 1, 1);
        hueGrid.appendChild(createColorTile({ r, g, b, label: `${hue}°` }));
    }

    const grayScaleColors = [
        { rgb: [255, 255, 255], label: 'Cinza 100%' },
        { rgb: [230, 230, 230], label: 'Cinza 90%' },
        { rgb: [204, 204, 204], label: 'Cinza 80%' },
        { rgb: [179, 179, 179], label: 'Cinza 70%' },
        { rgb: [153, 153, 153], label: 'Cinza 60%' },
        { rgb: [128, 128, 128], label: 'Cinza 50%' },
        { rgb: [102, 102, 102], label: 'Cinza 40%' },
        { rgb: [77, 77, 77], label: 'Cinza 30%' },
        { rgb: [51, 51, 51], label: 'Cinza 20%' },
        { rgb: [26, 26, 26], label: 'Cinza 10%' },
        { rgb: [13, 13, 13], label: 'Cinza 5%' },
        { rgb: [0, 0, 0], label: 'Cinza 0%' },
    ];

    grayScaleColors.forEach(({ rgb, label }) => {
        const [r, g, b] = rgb;
        grayGrid.appendChild(createColorTile({ r, g, b, label }));
    });
}

// Canvas Logic
function initCanvas() {
    if (!ctxColor || !ctxHue) return;

    // Desenhar Hue
    const gradHue = ctxHue.createLinearGradient(0, 0, huePickerCanvas.width, 0);
    gradHue.addColorStop(0, "red");
    gradHue.addColorStop(0.17, "yellow");
    gradHue.addColorStop(0.33, "green");
    gradHue.addColorStop(0.5, "cyan");
    gradHue.addColorStop(0.67, "blue");
    gradHue.addColorStop(0.83, "magenta");
    gradHue.addColorStop(1, "red");
    ctxHue.fillStyle = gradHue;
    ctxHue.fillRect(0, 0, huePickerCanvas.width, huePickerCanvas.height);

    // Desenhar Color Picker Inicial (Vermelho)
    drawColorPicker('red');
}

function drawColorPicker(color) {
    if (!ctxColor) return;
    
    ctxColor.fillStyle = color;
    ctxColor.fillRect(0, 0, colorPickerCanvas.width, colorPickerCanvas.height);

    const gradWhite = ctxColor.createLinearGradient(0, 0, colorPickerCanvas.width, 0);
    gradWhite.addColorStop(0, 'rgba(255,255,255,1)');
    gradWhite.addColorStop(1, 'rgba(255,255,255,0)');
    ctxColor.fillStyle = gradWhite;
    ctxColor.fillRect(0, 0, colorPickerCanvas.width, colorPickerCanvas.height);

    const gradBlack = ctxColor.createLinearGradient(0, 0, 0, colorPickerCanvas.height);
    gradBlack.addColorStop(0, 'rgba(0,0,0,0)');
    gradBlack.addColorStop(1, 'rgba(0,0,0,1)');
    ctxColor.fillStyle = gradBlack;
    ctxColor.fillRect(0, 0, colorPickerCanvas.width, colorPickerCanvas.height);
}

// Event Listeners Canvas
function pickHue(e) {
    const rect = huePickerCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pixel = ctxHue.getImageData(x, 0, 1, 1).data;
    const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    drawColorPicker(color);
    // update color based on color picker center for continuity? 
    // Or just wait for user to click color picker
}

function pickColor(e) {
    const rect = colorPickerCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pixel = ctxColor.getImageData(x, y, 1, 1).data;
    
    currentColor = { r: pixel[0], g: pixel[1], b: pixel[2] };
    updateUI();
}

// Event Listeners Inputs
function handleInputUpdate() {
    let r = parseInt(redInput.value) || 0;
    let g = parseInt(greenInput.value) || 0;
    let b = parseInt(blueInput.value) || 0;
    
    // Clamp
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    currentColor = { r, g, b };
    updateUI();
}

function handleHexUpdate() {
    const rgb = hexToRgb(hexInput.value);
    if (rgb) {
        currentColor = rgb;
        updateUI();
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    updateUI();
    renderStoredHistory();
    initProfitDefaults();
    initColorTable();

    // Mouse events canvas
    let isDraggingHue = false;
    let isDraggingColor = false;

    huePickerCanvas?.addEventListener('mousedown', (e) => { isDraggingHue = true; pickHue(e); });
    huePickerCanvas?.addEventListener('mousemove', (e) => { if (isDraggingHue) pickHue(e); });
    window.addEventListener('mouseup', () => { isDraggingHue = false; isDraggingColor = false; });

    colorPickerCanvas?.addEventListener('mousedown', (e) => { isDraggingColor = true; pickColor(e); });
    colorPickerCanvas?.addEventListener('mousemove', (e) => { if (isDraggingColor) pickColor(e); });

    // Inputs
    [redInput, greenInput, blueInput].forEach(input => {
        input.addEventListener('input', handleInputUpdate);
    });
    
    hexInput.addEventListener('input', handleHexUpdate);
    
    // Copy result
    resultDiv.addEventListener('click', () => {
        const code = rgbToProfitCode(currentColor.r, currentColor.g, currentColor.b);
        addToHistoryAndPersist(currentColor.r, currentColor.g, currentColor.b, code);
        copyToClipboard(String(code), 'copy.success');
    });

    // Shortcuts Logic
    setupShortcuts();
});

// Função auxiliar para carregar cor padrão
window.loadColor = (r, g, b) => {
    currentColor = { r, g, b };
    updateUI();
    drawColorPicker(`rgb(${r},${g},${b})`);
};

function setupShortcuts() {
    // Toggle Help
    const helpBtn = document.getElementById('helpButton');
    const helpContent = document.getElementById('helpContent');
    
    if (helpBtn && helpContent) {
        helpBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            helpContent.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!helpContent.contains(e.target) && e.target !== helpBtn) {
                helpContent.classList.remove('show');
            }
        });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.activeElement.blur();
            helpContent?.classList.remove('show');
            return;
        }

        if (!e.altKey) return;

        switch(e.key.toLowerCase()) {
            case 'c':
                e.preventDefault();
                window.copyColorFromPreview();
                break;
            case 'h':
                e.preventDefault();
                hexInput.focus();
                hexInput.select();
                break;
            case 'r':
                e.preventDefault();
                redInput.focus();
                redInput.select();
                break;
            case 'g':
                e.preventDefault();
                greenInput.focus();
                greenInput.select();
                break;
            case 'b':
                e.preventDefault();
                blueInput.focus();
                blueInput.select();
                break;
        }
    });
}

// Expor função para o HTML (se necessário)
window.copyColorFromPreview = () => {
    const { r, g, b } = currentColor;
    addToHistoryAndPersist(r, g, b, rgbToProfitCode(r, g, b));
    copyToClipboard(rgbToProfitCode(r, g, b).toString(), 'Código Profit Copiado!');
};
