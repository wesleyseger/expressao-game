import styles from './styles.module.scss';

import { Header } from '../../components/Header';
import { WordsBox } from '../../components/WordsBox';
import { Keyboard } from '../../components/Keyboard';
import PALAVRAS from '../../palavras';

var retornoPalavras = [];
var letrasPalavra = [];
var indicePalavra = geraIndiceAleatorio();

export function Home() {

  return (
    <div className={styles.homeWrapper}>
      <Header resetaPalavra={resetaPalavra} />
      <WordsBox />
      <Keyboard onClick={verificaPalavra} />
    </div>
  )
}

function geraIndiceAleatorio() {
  let rand = Math.random() * (PALAVRAS.length - 1);
  return Math.floor(rand);
}

function carregaLetrasPalavra(indicePalavra) {
  letrasPalavra = PALAVRAS[indicePalavra].normalize('NFD').replace(/[\u0300-\u036f]/g, "").split("");
}

function defineCor(letraTentativa, indiceLetra) {
  if (letraTentativa == letrasPalavra[indiceLetra]) {
    delete letrasPalavra[indiceLetra];
    return 'V'
  }

  if (letrasPalavra.some(it => it === letraTentativa)) {
    delete letrasPalavra[indiceLetra];
    return 'A'
  }

  return 'C'
}

function verificaPalavra(tentativa = 'TESTE') {
  carregaLetrasPalavra(indicePalavra);

  tentativa = tentativa.toUpperCase();

  var letrasTentativa = tentativa.split("");

  retornoPalavras = letrasTentativa.map(defineCor);

  console.log('TENTATIVA: ' + tentativa);
  console.log('A PALAVRA É: ' + PALAVRAS[indicePalavra]);
  console.log(retornoPalavras);
}

function resetaPalavra() {
  indicePalavra = geraIndiceAleatorio();
  console.log('Palavra de id: ' + indicePalavra + ' é: ' + PALAVRAS[indicePalavra])
}