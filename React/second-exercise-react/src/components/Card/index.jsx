import poster from '../../assets/poster.jpg'
import styles from './Card.module.css'

export default function Card(){
  return(
    <div className={styles.card}>
      <img className={styles.poster} src={poster} alt="Poster Star Wars"/>
      <div>
        <h1>Pôster: Star Wars (1977)</h1>
        <p className={styles.desc}>Um poster decoratio épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico poster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button className={styles.btn}>Comprar agora</button>
      </div>
    </div>
  )
}