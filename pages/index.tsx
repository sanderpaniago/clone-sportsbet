import Header from "../components/Header";
import SwipperOptions from "../components/SwipperOptions";
import styles from '../styles/pages/home.module.scss'

export default function Home() {
  return (
    <div className={`app ${styles.app}`}>
      <div className={styles.boxContent}>

        <Header />

        <section className={styles.container}>
          <aside className={styles.menuAside}>
          </aside>
          <div className={styles.mainContent}>
            <SwipperOptions />

          </div>

        </section>
      </div>
    </div>
  )
}
