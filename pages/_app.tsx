import Layout from '../components/Layout';

import '../styles/global.scss'
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
