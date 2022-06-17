/*
A = NO LUGAR ERRADO (AMARELO)
C = NAO INCLUI
V = CERTO (VERDE)
*/

import styles from './styles.module.scss';

import { Header } from '../../components/Header';
import { WordsBox } from '../../components/WordsBox';
import { Keyboard } from '../../components/Keyboard';
import PALAVRAS from '../../config/palavras';
import { useState } from 'react';
import { WinnerModal } from '../../components/WinnerModal';
import { LoseModal } from '../../components/LoseModal';

var retornoPalavras = [];
var letrasPalavra = [];
var indicePalavra = geraIndiceAleatorio();

export function Home() {

  const [winnerModalShow, setWinnerModalShow] = useState(false)
  const [loseModalShow, setLoseModalShow] = useState(false)

  let [letras, setLetras] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  let [linha, setLinha] = useState(0);
  let [posicao, setPosicao] = useState(0);

  function getMinLinha() {
    return linha * 5;
  }

  function getMaxLinha() {
    return (linha + 1) * 5;
  }

  function onKeyIn(letra) {
    if (posicao == getMaxLinha()) {
      return;
    }

    var novasLetras = [...letras];
    novasLetras[posicao] = letra;
    setLetras(novasLetras);
    setPosicao(posicao + 1);

    console.log('Posicao:' + posicao);
  }

  function backspace() {
    console.log('Posicao:' + posicao);

    if (posicao <= getMinLinha()) {
      return;
    }

    var novasLetras = [...letras];
    if (novasLetras[posicao] == '') {
      setPosicao(posicao - 1);
      novasLetras[posicao - 1] = '';
    } else {
      novasLetras[posicao] = '';
    }

    setLetras(novasLetras)
  }

  function carregaLetrasPalavra(indicePalavra) {
    letrasPalavra = PALAVRAS[indicePalavra].normalize('NFD').replace(/[\u0300-\u036f]/g, "").split("");
  }

  function defineCor(letraTentativa, indiceLetra) {
    if (letraTentativa == letrasPalavra[indiceLetra]) {
      delete letrasPalavra[indiceLetra];
      return 'colorGreen'//VERDE
    }

    if (letrasPalavra.some(it => it === letraTentativa)) {
      delete letrasPalavra[indiceLetra];
      return 'colorYellow'//AZUL
    }

    return 'colorGray'//CINZA
  }

  function verificaPalavra() {

    console.log('Linha:' + linha);

    if (posicao != getMaxLinha()) {
      return;
    }

    setLinha(linha + 1);

    carregaLetrasPalavra(indicePalavra);

    var letrasTentativa = letras.slice(getMinLinha(), getMaxLinha());

    retornoPalavras = letrasTentativa.map(defineCor);

    console.log('TENTATIVA: ' + letrasTentativa.join(''));
    console.log('A PALAVRA É: ' + PALAVRAS[indicePalavra]);
    console.log(retornoPalavras);

    let panel = document.getElementById('wordsPanel');
    retornoPalavras.map((item, i) => {
      setTimeout(() => {
        panel.childNodes[linha].childNodes[i].classList.add(item)
        panel.childNodes[linha].childNodes[i].classList.add('rotate-in-center')
      }, 200 * i)
    })

    if (letrasTentativa.join('') === PALAVRAS[indicePalavra])
      setTimeout(() => {
        setWinnerModalShow(true);
      }, 1500)

    if (linha + 1 >= 6)
      setTimeout(() => {
        setLoseModalShow(true);
      }, 1500)

  }

  function resetaPalavra() {
    setLetras(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    setPosicao(0);
    setLinha(0);
    indicePalavra = geraIndiceAleatorio();
    console.log('Palavra de id: ' + indicePalavra + ' é: ' + PALAVRAS[indicePalavra]);
    document.getElementById('wordsPanel').childNodes.forEach(el => el.childNodes.forEach(item => item.classList = []))
  }

  return (
    <div className={styles.homeWrapper}>
      <Header resetaPalavra={resetaPalavra} />
      <WordsBox letras={letras} />
      <Keyboard submitWord={verificaPalavra} onKeyIn={onKeyIn} backspace={backspace} />
      <WinnerModal show={winnerModalShow} onHide={() => setWinnerModalShow(false)} attempts={linha} word={PALAVRAS[indicePalavra]} handleRestart={() => resetaPalavra()} />
      <LoseModal show={loseModalShow} onHide={() => setLoseModalShow(false)} word={PALAVRAS[indicePalavra]} handleRestart={() => resetaPalavra()} />
    </div>
  )
}

function geraIndiceAleatorio() {
  let rand = Math.random() * (PALAVRAS.length - 1);
  return Math.floor(rand);
}