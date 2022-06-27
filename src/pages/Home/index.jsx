import { useState } from 'react';

import styles from './styles.module.scss';

import WORDS from '../../config/words';

import { Header } from '../../components/Header';
import { WordsBox } from '../../components/WordsBox';
import { Keyboard } from '../../components/Keyboard';
import { WinnerModal } from '../../components/WinnerModal';
import { LoseModal } from '../../components/LoseModal';

var wordIndex = getRandomIndex();

function getRandomIndex() {
  let rand = Math.random() * (WORDS.length - 1);
  return Math.ceil(rand);
}

export function Home() {

  const [winnerModalShow, setWinnerModalShow] = useState(false)
  const [loseModalShow, setLoseModalShow] = useState(false)

  var attemptReturn = [];
  var wordLetters = [];

  const [blockGame, setBlockGame] = useState(false);
  const [letters, setLetters] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  const [line, setLine] = useState(0);
  const [position, setPosition] = useState(0);

  function getMinLine() {
    return line * 5;
  }

  function getMaxLine() {
    return (line + 1) * 5;
  }

  function onKeyIn(letter) {

    if (position == getMaxLine()) return;
    if (blockGame) return;

    var newLetters = [...letters];
    newLetters[position] = letter;
    setLetters(newLetters);
    setPosition(position + 1);

    console.log('Posição:' + position);
  }

  function backspace() {

    if (position <= getMinLine()) return;

    var newLetters = [...letters];
    if (newLetters[position] == '') {
      setPosition(position - 1);
      newLetters[position - 1] = '';
    } else {
      newLetters[position] = '';
    }

    setLetters(newLetters);
    console.log('Posicao:' + position);

  }

  function fetchLettersFromWord(wordIndex) {
    wordLetters = WORDS[wordIndex].normalize('NFD').replace(/[\u0300-\u036f]/g, "").split("");
  }

  function defineGreen(letterAttempt, letterIndex) {

    if (letterAttempt == wordLetters[letterIndex]) {
      delete wordLetters[letterIndex];
      return 'colorGreen'; //VERDE
    }

    return letterAttempt;
  }

  function defineColor(letterAttempt, letterIndex) {

    if (letterAttempt === 'colorGreen') {
      return letterAttempt; //VERDE
    }

    if (wordLetters.some(it => it === letterAttempt)) {
      delete wordLetters[letterIndex];
      return 'colorYellow'; //AMARELO
    }

    return 'colorGray'; //CINZA
  }

  function verifyWord() {

    console.log('Linha:' + line);
    var currentAttempt = letters.slice(getMinLine(), getMaxLine());

    if (position != getMaxLine()) return;

    setLine(line + 1);

    fetchLettersFromWord(wordIndex);

    attemptReturn = currentAttempt.map(defineGreen).map(defineColor);

    console.log('TENTATIVA: ' + currentAttempt.join(''));
    console.log('A PALAVRA É: ' + WORDS[wordIndex]);
    console.log(attemptReturn);

    let panel = document.getElementById('wordsPanel');

    attemptReturn.map((item, i) => {
      setTimeout(() => {
        document.getElementById(currentAttempt[i]).classList = item;
        panel.childNodes[line].childNodes[i].classList.add(item)
        panel.childNodes[line].childNodes[i].classList.add('rotate-in-center')
      }, 200 * i)
    })

    if (currentAttempt.join('') === WORDS[wordIndex].normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
      setTimeout(() => {
        setWinnerModalShow(true);
      }, 1500)
    } else if (line + 1 >= 6) {
      setTimeout(() => {
        setLoseModalShow(true);
      }, 1500)
    }
  }

  function resetWord() {
    setLetters(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    setPosition(0);
    setLine(0);
    setBlockGame(false);
    wordIndex = getRandomIndex();
    console.log('PALAVRA RESETADA - id: ' + wordIndex + '. Palavra: ' + WORDS[wordIndex]);
    document.getElementById('wordsPanel').childNodes.forEach(el => el.childNodes.forEach(item => item.classList = []))
    document.getElementById('keyboard').childNodes.forEach(el => el.childNodes.forEach(item => item.classList.remove('colorGreen', 'colorYellow', 'colorGray')))
  }

  return (
    <div className={styles.homeWrapper}>
      <Header resetWord={resetWord} setBlockGame={setBlockGame} />
      <WordsBox letters={letters} />
      <Keyboard submitWord={verifyWord} onKeyIn={onKeyIn} backspace={backspace} />
      <WinnerModal show={winnerModalShow} onHide={() => { setWinnerModalShow(false); setBlockGame(true) }} attempts={line} word={WORDS[wordIndex]} handleRestart={() => resetWord()} />
      <LoseModal show={loseModalShow} onHide={() => { setLoseModalShow(false); setBlockGame(true) }} word={WORDS[wordIndex]} handleRestart={() => resetWord()} />
    </div>
  )
}