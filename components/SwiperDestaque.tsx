
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'

import styles from '../styles/components/swiperDestaque.module.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function SwiperDestaque() {

    const itens = [
    { 
        imgUrl: 'https://sportsbet.imgix.net/2021/February/br-abcxcea-1200x600.png?auto=compress,format?auto=compress,format&w=648',
        title: 'Bora Turbinar o Lucro no Futebol ⚽️',
        result: '1x2',
        description: 'Quem vai ser o eliminado da casa mais vigiada do Brasil? Chegou o momento de fazer sua bet nesse paredão. E o melhor é que nem precisa de ir ao confessionário. É só clicar aí!',
        infoValues: [
            {
            title: "ABC RN",
            value: 13.5,
            },
            {
                title: "ABC RN",
                value: 13.5,
            },
        ]
    },
    { 
        imgUrl: 'https://sportsbet.imgix.net/2021/February/br-intxjuv-1200x600.png?auto=compress,format?auto=compress,format&w=548',
        title: 'Bora Turbinar o Lucro no Futebol',
        result: '1x2',
        description: 'Quem vai ser o eliminado da casa mais vigiada do Brasil? Chegou o momento de fazer sua bet nesse paredão. E o melhor é que nem precisa de ir ao confessionário. É só clicar aí!',
        infoValues: [
            {
            title: "ABC RN",
            value: 13.5,
            },
            {
                title: "ABC RN",
                value: 13.5,
            },
        ]
    },
    { 
        imgUrl: 'https://sportsbet.imgix.net/2021/February/br-abcxcea-1200x600.png?auto=compress,format?auto=compress,format&w=648',
        title: 'Bora Turbinar o Lucro no Futebol',
        description: 'Quem vai ser o eliminado da casa mais vigiada do Brasil? Chegou o momento de fazer sua bet nesse paredão. E o melhor é que nem precisa de ir ao confessionário. É só clicar aí!',
        result: '1x2',
        infoValues: [
            {
            title: "ABC RN",
            value: 13.5,
            },
            {
                title: "ABC RN",
                value: 13.5,
            },
        ]
    },
    ]

    return (
        <Swiper
        spaceBetween={50}
        centeredSlides={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={styles.swiperContainer}
      >

        {itens.map(item => {
            return (
                <SwiperSlide>
                    <div className={styles.swiperItemContainer}>
                        <div>
                            <h4>{item.title}</h4>
                            <p className={styles.description}>{item.description}</p>
                            <img src={item.imgUrl} alt="" />
                            <span>
                                <span>
                                    {item.result}
                                </span>
                            </span>

                            <div className={styles.infContaniner}>
                            {item.infoValues.map(resultItem => {
                                return(
                                    <div className={styles.infoItem}>
                                            <p>{resultItem.title}</p>
                                            <strong>{resultItem.value}</strong>
                                        </div>
                                )
                            })}
                            </div>
                        </div>
                        {/* <img src={item.imgUrl} alt="" className={styles.isDesktop}/> */}
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
    )
}