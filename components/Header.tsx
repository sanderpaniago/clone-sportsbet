import { faChevronLeft, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

import styles from '../styles/components/header.module.scss'
import stylesMenu from '../styles/components/menu.module.scss'


export default function Header() {


    const [modalActive, setModalActive] = useState(false)

    function handleModalToggle() {
        setModalActive(!modalActive)
    }

    return(
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/logo.svg" alt="Sportbet.io"/>

                <div className={styles.parceirosOficiais}>
                    <p>Parceiro oficial</p>
                    <div>
                        <span>
                            <img src="/time-header-1.svg" alt=""/>
                        </span>
                        <span>
                            <img src="/time-header-2.svg" alt=""/>
                        </span>
                        <span>
                            <img src="/time-header-3.svg" alt=""/>
                        </span>
                        <span>
                            <img src="/time-header-4.svg" alt=""/>
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.toggleMenuContainer}>
                <button type='button' onClick={handleModalToggle}>
                    {!modalActive? (
                        <FontAwesomeIcon icon={faBars} />
                    ): (
                        <FontAwesomeIcon icon={faTimes} />
                    )}
                </button>
            </div>
            <div className={styles.btnBackpage}>
                <button >
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
            </div>

            <div className={styles.searchContainer}>
                <div>
                    <label >
                        <FontAwesomeIcon icon={faSearch} />
                    </label>
                    <input type='search' placeholder='Pesquisar'/>
                </div>
            </div>
            <div className={styles.accountButtonsContainer}>
                <div>
                    <button>Criar conta</button>
                    <button>Entrar</button>
                </div>
            </div>
            
            <div className={`${stylesMenu.menuModal} ${modalActive && stylesMenu.active}`}>
                <ul>
                    <h5 className={stylesMenu.active}>Esportes</h5>
                    <li>Ao vivo</li>
                    <li>Próximos</li>
                </ul>

                <ul>
                    <h5>Cassino</h5>
                    <li>Cassino Ao vivo</li>
                    <li>Slots</li>
                    <li><strong>Bombay Club</strong></li>
                </ul>

                <ul>
                    <li>Clube Sportsbet</li>
                </ul>

                <ul>
                    <li>Corrida de Cavalos</li>
                    <li>Esportes Virtuais</li>
                    <li>Guru De Esportes</li>
                    <li>Brasil</li>
                    <li>BBB21</li>
                    <li>NBA</li>
                </ul>

                <ul>
                    <li>Chat Ao Vivo</li>
                    <li>Central De Ajuda</li>
                    <li>Promoçõe</li>
                    <li>VIP</li>
                    <li>Sobre</li>
                    <li>Notícias</li>
                </ul>

                <div>
                    <div>
                        <input type="checkbox" id="theme"/>
                        <span></span>
                    </div>
                </div>

                <select name="lang" id="">
                    <option value="">Português</option>
                    <option value="">Englês</option>
                </select>

                <select name="number" id="">
                    <option value="">Decimal</option>
                    <option value="">Americano</option>
                </select>
            </div>
        </header>
    )
}