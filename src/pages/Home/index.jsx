import styles from './styles.module.scss';

import { Header } from '../../components/Header';
import { WordsBox } from '../../components/WordsBox';
import { Keyboard } from '../../components/Keyboard';
import PALAVRAS from '../../palavras';

export function Home() {

  const indicePalavra = 3;
  var retornoPalavras = [];
  var letrasPalavra = [];

  function verificaPalavra(tentativa = 'TESTE') {//, indicePalavra
    carregaLetrasPalavra(indicePalavra);
    tentativa = tentativa.toUpperCase();

    var letrasTentativa = tentativa.split("");

    retornoPalavras = letrasTentativa.map(defineCor);

    console.log(tentativa);
    console.log(PALAVRAS[indicePalavra]);
    console.log(retornoPalavras);
  }

  function defineCor(letraTentativa, indiceLetra) {
    if (letraTentativa == letrasPalavra[indiceLetra]) {
      return 'V'
    }

    if (letrasPalavra.some(it => it === letraTentativa)) {
      return 'A'
    }

    return 'C'
  }

  function carregaLetrasPalavra(indicePalavra) {
    letrasPalavra = PALAVRAS[indicePalavra].split("");
  }

  return (
    <div className={styles.homeWrapper}>
      <Header />
      <WordsBox />
      <Keyboard onClick={verificaPalavra} />
    </div>
  )
}