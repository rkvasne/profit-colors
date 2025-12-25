# 🎨 Conversor de Cores RGB para ProfitChart

Ferramenta web simples e eficiente para converter cores RGB e Hexadecimais para o formato de código numérico utilizado pela plataforma de trading **ProfitChart** (Nelogica).

## 🚀 Funcionalidades

- **Conversão Bidirecional:**
  - **RGB para ProfitChart:** Converta valores RGB (ex: `255, 0, 0`) para o código Profit (ex: `255`).
  - **Hex para ProfitChart:** Cole códigos Hex (ex: `#FF0000`) e obtenha o código Profit automaticamente.
  - **Visualização em Tempo Real:** Veja a cor resultante instantaneamente.

- **Seletor de Cores (Color Picker):**
  - Seletor visual de matiz, saturação e brilho para encontrar a cor perfeita sem saber os códigos.

- **Histórico de Cores:**
  - Salva automaticamente as últimas 9 cores utilizadas.
  - O histórico persiste mesmo após fechar o navegador (usa `localStorage`).

- **Tabela de Referência Rápida:**
  - Lista de cores gerada automaticamente a cada 5 graus de matiz para consulta rápida.
  - Copie o código RGB ou ProfitChart com um clique.

- **Interface Moderna:**
  - 🌓 **Tema Escuro/Claro:** Alterne entre modos para maior conforto visual.
  - 📱 **Responsivo:** Funciona perfeitamente em computadores, tablets e celulares.
  - ⌨️ **Atalhos de Teclado:**
    - `Ctrl + C`: Copiar cor atual.
    - `Alt + D`: Alternar tema.
    - `Alt + H`: Limpar histórico.

## 🛠️ Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador moderno (Chrome, Edge, Firefox).
2. **Para converter:**
   - Digite os valores **R, G, B** nos campos numéricos.
   - OU cole um código **Hexadecimal** no campo `#`.
   - OU use o **Seletor de Cores** para escolher visualmente.
3. **Obtenha o resultado:**
   - O **Código ProfitChart** aparecerá logo abaixo da prévia da cor.
   - Clique no botão de cópia ou use `Ctrl + C` para copiar.
4. **No ProfitChart:**
   - Cole o código numérico no campo de cor personalizada da plataforma.

## 💻 Tecnologias

Este projeto foi construído com tecnologias web padrão, sem necessidade de compilação ou instalação de dependências complexas.

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização moderna com Variáveis CSS (Custom Properties) e Flexbox/Grid.
- **JavaScript (ES6+):** Lógica de conversão e interatividade.
- **Bibliotecas (via CDN):**
  - [FontAwesome](https://fontawesome.com/): Ícones da interface.
  - [IMask](https://imask.js.org/): Máscara para entrada de dados no campo RGB.

## 🧮 Fórmula de Conversão

A plataforma ProfitChart utiliza um formato de cor inteiro (integer) baseado na seguinte fórmula:

```javascript
Código = Red + (Green * 256) + (Blue * 65536)
```

Onde R, G e B são valores inteiros entre 0 e 255.

## 📝 Estrutura do Projeto

O projeto é "Single File" (Arquivo Único) para facilitar o compartilhamento e uso. Todo o código (HTML, CSS, JS) reside em:

- `index.html`

## 👤 Autor

Desenvolvido por **Raphael Kvasne**

- 📧 Email: rkvasne@gmail.com
- 📸 Instagram: [@rkvasne](https://www.instagram.com/rkvasne/)

---
© 2025 Todos os direitos reservados.
