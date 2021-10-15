import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      number: '',
      revelNum: false,
      valueInput: '',
      hits: 0,
      miss: 0,
    };
  }

  randomNumber() {
    this.setState({ start: true });
    const numRandom = Math.floor(Math.random() * (100 - 1)) + 1;
    this.setState({ number: numRandom });
  }

  changeInput({ target }) {
    const value = parseInt(target.value);
    this.setState({ valueInput: value });
  }

  checkAnswer() {
    const { number, valueInput } = this.state;
    if (number === valueInput) {
      this.setState((state) => ({
        hits: state.hits + 1,
        revelNum: true,
        valueInput: '',
      }));
    } else {
      this.setState((state) => ({
        miss: state.miss + 1,
        revelNum: true,
        valueInput: '',
      }));
    }
  }

  nextNumber() {
    this.setState({ revelNum: false });
    this.randomNumber();
  }

  render() {
    const { start, number, revelNum, valueInput, hits, miss } = this.state;

    if (start) {
      return (
        <div className="App">
          <h1 className="num-secret">
            { revelNum ? number : '?' }
          </h1>
          <div className="scores">
            <div>
              <span>{hits}</span> ✔️
            </div>
            <div>
            ❌ <span>{miss}</span>
            </div>
          </div>
          <div className="response-input">
            <input
              type="text"
              value={valueInput}
              onChange={(e) => this.changeInput(e)}
            />
            <button
              disabled={ revelNum }
              onClick={() => this.checkAnswer()}
            >
              Ok
            </button>
          </div>
          <button
            disabled={ !revelNum }
            className="btn-next"
            onClick={() => this.nextNumber()}
          >
            Próximo número
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Adivinhe o número!</h1>
        <p>Adivinhe qual é o número aleatório de 1 a 100</p>
        <button
          onClick={() => this.randomNumber()}
          className="btn-start"
        >
          Começar
        </button>
      </div>
    );
  }
}

export default App;
