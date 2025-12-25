# Guia de Contribuição

Obrigado pelo seu interesse em contribuir para o **ProfitColors**! 🎉

Este documento contém diretrizes para garantir que sua contribuição seja suave e eficaz.

## 🤝 Como Contribuir

### 1. Reportando Bugs
Se você encontrou um erro, por favor abra uma [Issue](https://github.com/rkvasne/profit-colors/issues) seguindo nosso template de Bug Report.
- Use um título claro e descritivo.
- Descreva os passos para reproduzir o erro.
- Informe seu navegador e sistema operacional.

### 2. Sugerindo Melhorias
Tem uma ideia para deixar o projeto ainda melhor? Abra uma Issue com a tag `enhancement`.
- Explique o "porquê" da melhoria.
- Se possível, inclua mockups ou exemplos.

### 3. Enviando Código (Pull Requests)
1. Faça um **Fork** do repositório.
2. Clone o projeto para sua máquina.
3. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`).
4. Faça suas alterações.
5. Teste suas alterações localmente abrindo o arquivo `index.html` e `app.html`.
6. Faça commit das suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade'`).
7. Faça push para a branch (`git push origin feature/MinhaFeature`).
8. Abra um **Pull Request** no repositório original.

## 🎨 Padrões de Código

- **HTML/CSS/JS:** Mantenha o estilo consistente com o código existente.
- **Commits:** Use [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) (ex: `feat:`, `fix:`, `docs:`, `style:`).
- **Sem Frameworks:** O projeto é "Vanilla" (HTML/CSS/JS puro). Evite adicionar bibliotecas externas (React, Vue, etc) a menos que seja estritamente necessário e discutido previamente.

## 🧪 Testes

Como o projeto é frontend puro sem build system complexo:
1. Abra `index.html` e `app.html` em diferentes navegadores (Chrome, Firefox, Edge).
2. Verifique a responsividade em modo mobile (F12).
3. Teste o tema escuro/claro.
4. Verifique se a conversão de cores está matematicamente correta.

## 📜 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a licença MIT do projeto.
