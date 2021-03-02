import Events from "../components/Events";
import Footer from "../components/Footer";
import styles from '../styles/pages/home.module.scss'

import SwiperDestaque from '../components/SwiperDestaque'

export default function Home() {
  return (
        <section>
            <SwiperDestaque />
            <Events />
        </section>
  )
}
