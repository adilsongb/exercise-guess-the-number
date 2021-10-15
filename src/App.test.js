import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Exercício 1', () => {
  it('Verifique se é renderizado um elemento h1, p, e um button', () => {
    render(<App />);

    const titleh1 = screen.getByRole('heading', { level: 1 });
    const paragraph = screen.getByTestId('about');
    const btn = screen.getByRole('button');

    expect(titleh1).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(btn).toHaveTextContent('Começar');
  });
});

describe('Exercício 2', () => {
  it('Teste se ao clicar no botão "Começar"...', () => {
    render(<App />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    const whyNumberh1 = screen.getByRole('heading', { level: 1 });
    const input = screen.getByRole('textbox');
    const btnOk = screen.getByText('Ok');
    const btnNext = screen.getByText('Próximo número');

    expect(whyNumberh1).toHaveTextContent('?');
    expect(input).toBeInTheDocument();
    expect(btnOk).toBeInTheDocument();
    expect(btnNext).toBeDisabled();
  });
});

describe('Exercício 3', () => {
  it('Teste se ao colocar um número no input e clicar no botão "Ok"...', () => {
    render(<App />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    const whyNumberh1 = screen.getByRole('heading', { level: 1 });
    const input = screen.getByRole('textbox');
    const btnOk = screen.getByText('Ok');
    const btnNext = screen.getByText('Próximo número');

    userEvent.type(input, 28);
    userEvent.click(btnOk);

    expect(whyNumberh1).not.toHaveTextContent('?');
    expect(btnNext).toBeEnabled();
    expect(btnOk).toBeDisabled();

    userEvent.click(btnNext);

    expect(whyNumberh1).toHaveTextContent('?');
    expect(btnOk).toBeEnabled();
  });
});

describe('Exercício 4', () => {
  it('Simule situações de acertos e erros no jogo', () => {
    render(<App />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    const whyNumberh1 = screen.getByRole('heading', { level: 1 });
    const input = screen.getByRole('textbox');
    const btnOk = screen.getByText('Ok');
    const btnNext = screen.getByText('Próximo número');

    userEvent.type(input, '5');
    userEvent.click(btnOk);

    expect(whyNumberh1).toHaveTextContent('5');

    const hits = screen.getByTestId('hits');

    expect(hits).toHaveTextContent('1');

    userEvent.click(btnNext);
    userEvent.type(input, '2');
    userEvent.click(btnOk);

    const miss = screen.getByTestId('miss');
    expect(miss).toHaveTextContent('1');
  });
});
