import { ReactNode, useContext, useState } from 'react';
import { faChevronRight, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/components/events.module.scss'
import { ApostaContext } from '../context/ApostasContext';


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

function CartaoJogo({data, key}) {

    const {addItemAposta} = useContext(ApostaContext)

    return (
        <tr key={key}>
            <td>
                <div className={styles.rowEventTable}>
                    <p>{data.time1.name}</p>
                    <span>{data.time1.gols}</span>
                </div>

                <div className={styles.rowEventTable}>
                    <p>{data.time2.name}</p>
                    <span>{data.time2.gols}</span>
                </div>

                <div className={styles.rowEventTable}>
                    <p>2° Parte 88:47</p>
                    <span>
                        <img src="icons/stop-whatch.svg" alt="" />
                    </span>
                </div>
            </td>
            <td><button onClick={()=>addItemAposta(data, data.value1)}>{data.value1}</button></td>
            <td><button onClick={()=>addItemAposta(data, data.valuex)}>{data.valuex}</button></td>
            <td><button onClick={()=>addItemAposta(data, data.value2)}>{data.value2}</button></td>
            <td>+19</td>
        </tr>
    )
}

export function EventCard({title, children, qntJogos}) {

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
                    <h4>{title}</h4>
                </div>
                <p>{qntJogos}</p>
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
                        {children}
                    </tbody>
                </table>
            </main>
        </div>
    )
}
export default function Events() {

    const cards = [
        {
            time1: {
                name: "Bolanha FC",
                gols: 2,
            },
            time2: {
                name: "SS Lazaio",
                gols: 0,
            },
            value1: 5.30,
            valuex: 1.55,
            value2: 4.90,
        },
        {
            time1: {
                name: "carlinh FC",
                gols: 2,
            },
            time2: {
                name: "SS cioio",
                gols: 0,
            },
            value1: 5.30,
            valuex: 1.55,
            value2: 4.90,
        }
    ]

    return (
        <section className={styles.eventContainer}>
            <h2>Eventos em destaque</h2>
            <EventList title='Futebol' urlIcon='icons/futebol.svg'>
                <EventCard title="Itália - Serie A" qntJogos={cards.length}>
                    {cards.map((item, index)=> {
                        return(
                            <CartaoJogo data={item} key={index} />
                        )
                    })}
                </EventCard>
            </EventList>


            <EventList title="Basquete"  urlIcon='icons/basquete.svg'>
                <EventCard  title="NBA - Serie A" qntJogos={cards.length}>
                {cards.map((item, index)=> {
                        return(
                            <CartaoJogo data={item} key={index} />
                        )
                    })}
                </EventCard>
            </EventList>
        </section>
    )
}

