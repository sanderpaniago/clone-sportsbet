import { useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/components/footer.module.scss'

function ListItem({children}) {
    
    const [modalActive, setModalActive] = useState(false)

    function toggleModalList() {
        setModalActive(!modalActive)
    }

    return (
        <div onClick={toggleModalList} className={`${styles.listItenContainer} ${modalActive && styles.active}`}>
                {children}
        </div>
    )
}

export default function Footer() {

    
    return (
        <footer className={styles.footer}>
            <p>Sobre Sportsbet.io</p>

            <p>Sportsbet.io é uma marca gerida e operada por mBet Solutions NV (Schout Bij Nacht Doormanweg 40, P.O. Box 4745, Curaçao). Ela é licenciada e regulada para exercer operações de jogos online pelo governo de Curaçao através da licença de número 1668/JAZ. Alguns pagamentos com cartão de crédito (Wirecard Bank, Apcopay, EMerchantPay) são processados por sua subsidiária integral, mProcessing Solutions Ltd, Cyprus (Menandrou 4, 1066, Nicosia, Cyprus).</p>

            <section className={styles.listOptionsContainer}>
                <ListItem>
                    <a>
                        <h6>Esportes</h6>
                        <span>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </span>
                    </a>
                    <ul>
                        <li><a>Promoções</a></li>
                        <li><a>Ao vivo</a></li>
                        <li><a>Proximos</a></li>
                    </ul>
                </ListItem>
                <ListItem >
                    <a>
                        <h6>Cassino</h6>
                        <span>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </span>
                    </a>
                    <ul>
                        <li><a>Promoções</a></li>
                        <li><a>Ao vivo</a></li>
                        <li><a>Proximos</a></li>
                    </ul>
                </ListItem>
                <ListItem >
                    <a>
                        <h6>Suporte</h6>
                        <span>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </span>
                    </a>
                    <ul>
                        <li><a>Promoções</a></li>
                        <li><a>Ao vivo</a></li>
                        <li><a>Proximos</a></li>
                    </ul>
                </ListItem>
                <ListItem >
                    <a>
                        <h6>Sobre</h6>
                        <span>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </span>
                    </a>
                    <ul>
                        <li><a>Promoções</a></li>
                        <li><a>Ao vivo</a></li>
                        <li><a>Proximos</a></li>
                    </ul>
                </ListItem>
                <ListItem >
                    <a>
                        <h6>Médotos de Pagamentos</h6>
                        <span>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </span>
                    </a>
                    <ul>
                        <li><a>Promoções</a></li>
                        <li><a>Ao vivo</a></li>
                        <li><a>Proximos</a></li>
                    </ul>
                </ListItem>
                <ListItem >
                    <a>
                        <h6>Esportes</h6>
                        <span>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </span>
                    </a>
                    <ul>
                        <li><a>Promoções</a></li>
                        <li><a>Ao vivo</a></li>
                        <li><a>Proximos</a></li>
                    </ul>
                </ListItem>
                <ListItem >
                    <a>
                        <h6>Esportes</h6>
                        <span>
                            <FontAwesomeIcon icon={faChevronDown}/>
                        </span>
                    </a>
                    <ul>
                        <li><a>Promoções</a></li>
                        <li><a>Ao vivo</a></li>
                        <li><a>Proximos</a></li>
                    </ul>
                </ListItem>
            </section>

            <section className={styles.bitContainer}>
                <p><span>1</span> BTC = <span>39339.240</span> EUR</p>
            </section>

            <div className={styles.imgContainers}>
                <img src="//cdn.coingaming.io/bitcasino/images/icons/footer/footer/askgamblers-award-2019.png" alt=""/>
                <img src="https://sportsbet.imgix.net/sbc-2020-logo.png" alt=""/>
                <div>
                    <p>18+</p>
                </div>
            </div>
        </footer>
    )
}