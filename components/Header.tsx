import { faChevronLeft, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';

import styles from '../styles/components/header.module.scss'


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
        </header>
    )
}