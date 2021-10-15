Esse é um projeto de um jogo de adivinhação para os exercícios bônus de `RTL`.

### Antes de iniciar

Crie um [fork](https://github.com/UNIVALI-LITE/Portugol-Studio/wiki/Fazendo-um-Fork-do-reposit%C3%B3rio) do [repositório do exercício](https://github.com/adilsongb/exercise-guess-the-number) e clone o repositório.

Rode o comando `npm install` na pasta do projeto.

Implemente os seguintes testes em `App.test.js`:

1. Verifique se é renderizado um elemento `h1`, `p`, `button`;
2. Teste se ao clicar no botão "Começar"...
    1. um elemento `h1` contendo "?" é renderizado
    2. um input e um botão "Ok" são renderizados
    3. um botão "Próximo número" é renderizado e ele deve estar desativado.
3. Teste se ao colocar um número no input e clicar no botão "Ok"...
    1. o elemento `h1` contém algo diferente de "?"
    2. o botão "Próximo número" é ativado
    3. o botão "Ok" é desativado
    4. Verifique se ao clicar no botão "Próximo número" o elemento `h1` voltar a ter "?" e o botão "Ok" é ativado novamente.
4. Simule situações de acertos e erros no jogo e verifique se os números, que mostram as quantidades de acertos e erros, mudam.
    1. Dica: edite a função `randomNumber()` para que ela gere apenas um número fixo, você pode testar se apenas esse número aparece no elemento `h1`.
    