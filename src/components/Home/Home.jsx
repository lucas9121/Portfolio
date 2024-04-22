import styles from './Home.module.css'

export default function Home({sticky}) {
  return (
    <section className={!sticky ? styles.homeHero : styles.homeHero && styles.hide}>
      <h1 >Hello World</h1>
      <h2>I'm Lucas Carlos</h2>
      <div className={styles.homeHeroInfo}>
        <p>
          A software engineer passionate about building innovative solutions and delivering exceptional user experiences.
        </p>
      </div>
    </section>
  )
}