import "../styles/App.scss";
import { useState } from "react";

function App() {
  //const [numberOfErrors, setNumbersOfErrors] = useState(0);
  const [word, setWord] = useState('katcroker');
  const [userLetters, setUserLetters] = useState([]);
  const wordLetters = word.split('');

  const renderSolutionLetters = () => {
    //return wordLetters.map(letter => <li class="letter"></li>)
    return wordLetters.map((letter, i) => userLetters.includes(letter) ?<li key={i} className="letter">{letter}</li> :<li className="letter" key={i}></li>)
  }

 const renderErrorLetters = () => {
  const failLetters = userLetters.filter(letter => !wordLetters.includes(letter));
  return failLetters.map((letter, i) => <li key={i} className="letter">{letter}</li>);
 }


  // const handleClick = () => {
  //   setNumbersOfErrors(numberOfErrors + 1);
  //   console.log(`dummy error-${numberOfErrors}`);
  // };

  const [lastLetter, setLastLetter] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handelInputLetter = (ev) => {
    const inputValue = ev.currentTarget.value;
    const validatedLetter = /^[A-Za-z]+$/;

    if (inputValue.match(validatedLetter)) {
      setLastLetter(inputValue);
      setUserLetters([...userLetters, inputValue]);
      setAlertMessage("");
    } else {
      setAlertMessage(" Debes introducir una letra");
    }
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          {/* <button onClick={handleClick}>Incrementar</button> */}
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
              {renderSolutionLetters()}
            </ul>
          </div>


          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {/* <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li> */}
              {renderErrorLetters()}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handelInputLetter}
              //value = {lastLetter}
            />
            <p>{alertMessage}</p>
          </form>
        </section>
        <section className={`dummy error-${renderErrorLetters().length}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
