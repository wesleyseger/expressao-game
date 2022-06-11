import styles from './styles.module.scss';

import { Header } from '../../components/Header';
import { WordsBox } from '../../components/WordsBox';
import { Keyboard } from '../../components/Keyboard';
import PALAVRAS from '../../palavras';

const indicePalavra = 3;
var letrasPalavra = [];

export function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <WordsBox />
      <Keyboard />
      
    </div>
  )
}

//<Keyboard onClick={verificaPalavra}/>
function verificaPalavra(tentativa) {//, indicePalavra
    carregaLetrasPalavra(indicePalavra);
    tentativa = tentativa.toUpperCase();

    var letrasTentativa = tentativa.split("");

    return letrasTentativa.map(defineCor);
}

function defineCor(letraTentativa, indiceLetra) {
    if (letraTentativa == letrasPalavra[indiceLetra]) {
        return 'V'
    }

    if (letrasPalavra.slice(indiceLetra + 1).some(it => it === letraTentativa)) {
        return 'A'
    }

    return 'C'
}

function carregaLetrasPalavra(indicePalavra){
    letrasPalavra = PALAVRAS[indicePalavra].split("");
}