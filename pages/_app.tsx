import Layout from '../components/Layout';

import '../styles/global.scss'
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import ApostaPrivider from '../context/ApostasContext';

function MyApp({ Component, pageProps }) {
  return(
    <ApostaPrivider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApostaPrivider>
    )
}

export default MyApp
