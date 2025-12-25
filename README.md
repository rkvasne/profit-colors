# 🎨 ProfitChart Color Converter

![License](https://img.shields.io/github/license/rkvasne/profit-colors)
![GitHub stars](https://img.shields.io/github/stars/rkvasne/profit-colors?style=social)
![Languages](https://img.shields.io/github/languages/top/rkvasne/profit-colors)

Uma ferramenta web profissional, open-source e gratuita para converter cores (RGB e Hex) para o formato numérico utilizado pela plataforma de trading **ProfitChart** (Nelogica).

🔗 **[Acesse a versão online](https://rkvasne.github.io/profit-colors/)**

---

## 📸 Preview

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=Preview+da+Interface+Aqui" alt="Preview da Interface" width="100%">
  <p><em>Interface moderna, responsiva e com suporte a tema escuro.</em></p>
</div>

## ✨ Funcionalidades

### 🔄 Conversão Inteligente
- **RGB ↔ ProfitChart:** Digite valores R, G, B e obtenha o código instantaneamente.
- **Hex ↔ ProfitChart:** Cole códigos Hex (ex: `#7159c1`) e converta automaticamente.
- **Bidirecional:** Altere qualquer campo e todos os outros se atualizam.

### 🎨 Ferramentas Visuais
- **Color Picker:** Seletor visual de matiz e saturação.
- **Histórico:** Salva automaticamente as últimas 9 cores utilizadas.
- **Tabela de Referência:** Lista de cores gerada a cada 5º de matiz para consulta rápida.

### ⚡ Produtividade
- **Cópia Rápida:** Clique em qualquer código para copiar.
- **Atalhos de Teclado:**
  - `Ctrl + C`: Copiar cor atual.
  - `Alt + D`: Alternar Tema Escuro/Claro.
  - `Alt + H`: Limpar histórico.
- **URL Compartilhável:** A cor selecionada fica salva na URL, facilitando o envio para amigos.

## 🚀 Como Usar

### Versão Online (Recomendado)
Acesse **[rkvasne.github.io/profit-colors](https://rkvasne.github.io/profit-colors/)** e comece a usar agora mesmo.

### Versão Local (Offline)
Como o projeto é um **Single File Application** (Arquivo Único), você pode rodá-lo sem instalar nada:

1. Baixe o arquivo `index.html` [clicando aqui](https://raw.githubusercontent.com/rkvasne/profit-colors/main/index.html).
2. Abra o arquivo em qualquer navegador (Chrome, Edge, Firefox).
3. Pronto!

## 🧮 A Matemática por trás

O ProfitChart utiliza um formato de cor **Inteiro (Integer)** calculado da seguinte forma:

```javascript
// Fórmula de conversão
ProfitCode = Red + (Green * 256) + (Blue * 65536)
```

Onde **R, G e B** são valores inteiros entre `0` e `255`.

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Se você tem uma ideia de melhoria:

1. Faça um **Fork** do projeto.
2. Crie uma Branch para sua feature (`git checkout -b feature/MinhaFeature`).
3. Faça o Commit (`git commit -m 'Adiciona MinhaFeature'`).
4. Faça o Push (`git push origin feature/MinhaFeature`).
5. Abra um **Pull Request**.

## 👤 Autor

Desenvolvido com 💙 por **Raphael Kvasne**

- 📧 Email: rkvasne@gmail.com
- 📸 Instagram: [@rkvasne](https://www.instagram.com/rkvasne/)
- 💼 LinkedIn: [Raphael Kvasne](https://www.linkedin.com/in/raphael-kvasne/)

---

<p align="center">
  <small>Este projeto não possui afiliação oficial com a Nelogica ou a plataforma ProfitChart.</small>
</p>
