/**
 * ProfitColors - Canvas Chart Animation
 * Cria um fundo animado de gráfico de candles
 */

const initChartBackground = () => {
    const canvas = document.getElementById('chart-bg');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let candles = [];
    
    // Configurações
    const candleWidth = 12;
    const candleSpacing = 8;
    const speed = 0.5;
    const colors = {
        bg: '#0B0F19',
        grid: 'rgba(45, 54, 70, 0.3)',
        green: '#00E396',
        greenGlow: 'rgba(0, 227, 150, 0.3)',
        red: '#FF4560',
        redGlow: 'rgba(255, 69, 96, 0.3)'
    };

    // Redimensionar
    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initCandles();
    };

    // Gerar um candle aleatório baseado no anterior
    const generateCandle = (prevClose, x) => {
        // Volatilidade baseada na altura
        const volatility = height * 0.05; 
        const change = (Math.random() - 0.5) * volatility;
        
        let close = prevClose + change;
        
        // Manter dentro da tela com margem
        if (close < height * 0.2) close += Math.abs(change) * 2;
        if (close > height * 0.8) close -= Math.abs(change) * 2;

        const open = prevClose;
        const high = Math.max(open, close) + Math.random() * (volatility * 0.5);
        const low = Math.min(open, close) - Math.random() * (volatility * 0.5);

        return { x, open, close, high, low, width: candleWidth };
    };

    // Inicializar array de candles
    const initCandles = () => {
        candles = [];
        let currentX = 0;
        let prevClose = height / 2;

        while (currentX < width + 100) {
            const candle = generateCandle(prevClose, currentX);
            candles.push(candle);
            prevClose = candle.close;
            currentX += candleWidth + candleSpacing;
        }
    };

    // Desenhar Grade
    const drawGrid = () => {
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        // Linhas horizontais
        for (let y = 0; y < height; y += 100) {
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
        }

        // Linhas verticais
        for (let x = 0; x < width; x += 100) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
        }
        ctx.stroke();
    };

    // Desenhar Candles
    const drawCandles = () => {
        candles.forEach(c => {
            const isGreen = c.close >= c.open;
            const color = isGreen ? colors.green : colors.red;
            const glow = isGreen ? colors.greenGlow : colors.redGlow;

            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 10; // Glow effect

            // Pavio (High/Low)
            ctx.beginPath();
            ctx.moveTo(c.x + c.width / 2, c.high);
            ctx.lineTo(c.x + c.width / 2, c.low);
            ctx.stroke();

            // Corpo
            const bodyHeight = Math.max(Math.abs(c.close - c.open), 1); // Mínimo 1px
            const bodyY = Math.min(c.open, c.close);
            ctx.fillRect(c.x, bodyY, c.width, bodyHeight);
            
            ctx.shadowBlur = 0; // Reset glow
        });
    };

    // Loop de Animação
    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        // Fundo
        // ctx.fillStyle = colors.bg;
        // ctx.fillRect(0, 0, width, height);
        
        drawGrid();
        drawCandles();

        // Mover candles para a esquerda
        candles.forEach(c => c.x -= speed);

        // Remover candles que saíram da tela
        if (candles[0].x < -50) {
            candles.shift();
        }

        // Adicionar novos candles
        const lastCandle = candles[candles.length - 1];
        if (lastCandle.x < width + 50) {
            const newX = lastCandle.x + candleWidth + candleSpacing;
            candles.push(generateCandle(lastCandle.close, newX));
        }

        requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
};

document.addEventListener('DOMContentLoaded', initChartBackground);