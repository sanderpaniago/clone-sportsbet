import { ReactNode, useState } from 'react';
import { faChevronRight, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/components/events.module.scss'


interface EventListProps {
    children: ReactNode;
    title: string;
    urlIcon: string
}

export function EventList({children, title, urlIcon}: EventListProps) {
    return(
        <div className={`${styles.eventContent}`}>
                <header>
                    <img src={`${urlIcon}`} alt="futebol" />
                    <h3>{title}</h3>
                    <a href="">Ver todos</a>
                </header>
                <main>
                    <section className={styles.eventsListContainer}>
                        {children}
                    </section>
                </main>
        </div>
    )
}

export function EventCard() {

    const [cardActive, setCardActive] = useState(false)

    function toggleCard() {
        setCardActive(!cardActive)
    }

    return (
        <div className={`${styles.cardEvent} ${cardActive && styles.active}`}>
            <header onClick={toggleCard}>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                    <h4>Itália - Serie A</h4>
                </div>
                <p>2</p>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>1</th>
                            <th>X</th>
                            <th>2</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.rowEventTable}>
                                    <p>Bolonha FC</p>
                                    <span>2</span>
                                </div>

                                <div className={styles.rowEventTable}>
                                    <p>SS Lazio</p>
                                    <span>0</span>
                                </div>

                                <div className={styles.rowEventTable}>
                                    <p>2° Parte 88:47</p>
                                    <span>
                                        <img src="icons/stop-whatch.svg" alt="" />
                                    </span>
                                </div>
                            </td>
                            <td>5.30</td>
                            <td>1.55</td>
                            <td>4.90</td>
                            <td>+19</td>
                        </tr>

                        <tr>
                            <td>
                                <div className={styles.rowEventTable}>
                                    <p>Bolonha FC</p>
                                    <span>2</span>
                                </div>

                                <div className={styles.rowEventTable}>
                                    <p>SS Lazio</p>
                                    <span>0</span>
                                </div>

                                <div className={styles.rowEventTable}>
                                    <p>2° Parte 88:47</p>
                                    <span>
                                        <img src="icons/stop-whatch.svg" alt="" />
                                    </span>
                                </div>
                            </td>
                            <td>5.30</td>
                            <td>1.55</td>
                            <td>4.90</td>
                            <td>+19</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}
export default function Events() {
    return (
        <section className={styles.eventContainer}>
            <h2>Eventos em destaque</h2>
            <EventList title='Futebol' urlIcon='icons/futebol.svg'>
                <EventCard />
            </EventList>
            <EventList title="Basquete"  urlIcon='icons/basquete.svg'>
                <EventCard />
            </EventList>
        </section>
    )
}

