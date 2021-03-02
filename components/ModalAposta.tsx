import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from 'react';
import { ApostaContext } from '../context/ApostasContext';
import styles from '../styles/components/modalAposta.module.scss'

export default function ModalAposta() {


    const {itensAposta, modalActive, updateModal, removeIAposta } = useContext(ApostaContext)

    return (
        <div className={styles.modalApostaContainer}>
            <header>
                <div 
                    onClick={()=> updateModal({ active: true, focus: 0})} 
                    className={ modalActive.focus === 0 && styles.active}
                    >
                    <p>simples</p>
                    <span>{itensAposta.length}</span>
                </div>
                <div 
                    onClick={()=> updateModal({ active: true, focus: 1})} 
                    className={modalActive.focus !== 0 && styles.active}
                >
                    <p>Múltipla</p>
                </div>

                <button onClick={()=> updateModal({...modalActive, active: !modalActive.active})} className={`${styles.iconContainer}`}>
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
                        itensAposta.map((item, index) => {
                            return(
                                <div key={index} className={styles.itemCard}>
                                    <h5>{item.times[0]} - {item.times[1]}</h5>
                                    <span>Vercedor(incluindo prorrogação)</span>

                                    <div className={styles.info}>
                                        <h6>{item.timeSelect}</h6>
                                        <p>{item.value}</p>
                                        <input defaultValue={0} aria-valuemin={0} type="number"/>
                                    </div>
                                    <div className={styles.removeContainer}>
                                        <a onClick={()=> removeIAposta(item)}>Remover X</a>
                                        <p>Ganho Potencial: <span>BRL 0,00</span></p>
                                    </div>
                                </div>
                            )
                        })
                    ) : ( 
                        <div>
                            {itensAposta.map((item, index) => {
                                return(
                                    <div key={index} className={styles.itemCard}>
                                        <h5>{item.times[0]} - {item.times[1]}</h5>
                                        <span>Vercedor(incluindo prorrogação)</span>

                                        <div className={styles.info}>
                                            <h6>{item.timeSelect}</h6>
                                            <p>{item.value}</p>
                                            <div className={styles.removeContainer} style={{width: '100%'}}>
                                                <a onClick={()=> removeIAposta(item)}>Remover X</a>
                                            </div>
                                            <input defaultValue={0} min={0} type="number"/>
                                        </div>
                                    </div>
                                )}
                            )}
                            
                            
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