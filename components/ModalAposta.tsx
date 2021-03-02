import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import styles from '../styles/components/modalAposta.module.scss'

export default function ModalAposta() {

    const [modalActive, setModalActive] = useState({active: false, focus: 0})

    return (
        <div className={styles.modalApostaContainer}>
            <header>
                <div 
                    onClick={()=> setModalActive({active: true, focus: 0})} 
                    className={ modalActive.focus === 0 && styles.active}
                    >
                    <p>simples</p>
                    <span>1</span>
                </div>
                <div 
                    onClick={()=> setModalActive({ active: true, focus: 1})} 
                    className={modalActive.focus !== 0 && styles.active}
                >
                    <p>Múltipla</p>
                </div>

                <button onClick={()=> setModalActive({...modalActive, active: !modalActive.active})} className={`${styles.iconContainer}`}>
                    {!modalActive.active? (
                        <FontAwesomeIcon icon={faPlus}/>
                    ):(
                        <FontAwesomeIcon icon={faMinus}/>
                    ) }
                </button>
            </header>
            <div style={modalActive.active ? {display: 'block'} : {display: 'none'}}>
                <main>
                    {modalActive.focus === 0 ? (
                        <div>
                            <h5>KK Sutjeska Niksic - kk Studentski Centar</h5>
                            <span>Vercedor(incluindo prorrogação)</span>

                            <div className={styles.info}>
                                <h6>KK Sutjeska Niksic</h6>
                                <p>3.05</p>
                                <input defaultValue={0} aria-valuemin={0} type="number"/>
                            </div>
                            <div className={styles.removeContainer}>
                                <a>Remover X</a>
                                <p>Ganho Potencial: <span>BRL 0,00</span></p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h5>KK Sutjeska Niksic - kk Studentski Centar</h5>
                            <span>Vercedor(incluindo prorrogação)</span>

                            <div className={styles.info}>
                                <h6>KK Sutjeska Niksic</h6>
                                <p>3.05</p>
                                <div className={styles.removeContainer} style={{width: '100%'}}>
                                    <a>Remover X</a>
                                </div>
                                <input defaultValue={0} min={0} type="number"/>
                            </div>
                            
                            <section>
                                <span>Odds: </span>
                                <p>1.09</p>
                            </section>

                            <section>
                                <span>Usar Múltipa Defendida <img src="/icons/sobre.svg" alt=""/></span>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                </p>
                            </section>

                            <section>
                                <span>Ganho Potencial:</span>
                                <p>BRL 0,00</p>
                            </section>
                        </div>
                    )}
                </main>

                <footer>
                    <span>Valor Total:</span>
                    <p>BRL 0,00</p>

                    {modalActive.focus === 0 ? (
                        <button>Entrar</button>
                    ): (
                        <button disabled>Aposta múltipla requer 2 ou mais seleções</button>
                    )}

                </footer>
            </div>
        </div>
    )

}