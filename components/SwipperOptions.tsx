import styles from '../styles/components/swipperOptions.module.scss'


interface OptionsProps {
    nameIcon: string;
    text: string;
    value?: string
}

function Options({nameIcon, text, value}: OptionsProps) {

    

    return(
        <div className={`${styles.itemContainer} `}> 
            <div>
                <img src={`icons/${nameIcon}`} alt=""/>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default function SwipperOptions() {


    return (
        <ul className={styles.swipperContainer}>
            <Options nameIcon='destaque.svg' text="Destaques"/>
            <Options nameIcon='futebol.svg' text="Futebol"/>
            <Options nameIcon='basquete.svg' text="Basquete"/>
            <Options nameIcon='tenis.svg' text="Tênis"/>
            <Options nameIcon='especiais.svg' text="Especiais do io"/>
            <Options nameIcon='game.svg' text="CS:GO"/>
            <Options nameIcon='nfl.svg' text="Futebol Americano"/>
            <Options nameIcon='nfl.svg' text="AFL"/>
            <Options nameIcon='bandy.svg' text="Bandy"/>
            <Options nameIcon='beisebol.svg' text="Beisebol"/>
            <Options nameIcon='biathlon.svg' text="Biathlon"/>
            <Options nameIcon='boxe.svg' text="Boxe"/>
            <Options nameIcon='game.svg' text="Call of Duty"/>
            <Options nameIcon='criquete.svg' text="Críquete"/>
            <Options nameIcon='cross.svg' text="Cross Country"/>
            <Options nameIcon='ciclismo.svg' text="Cilcismo"/>
            <Options nameIcon='dardos.svg' text="Dardos"/>
            <Options nameIcon='game.svg' text="Dota 2"/>
            <Options nameIcon='futebol.svg' text="eFIFA"/>
            <Options nameIcon='basquete.svg' text="eNBA"/>
            <Options nameIcon='bandy.svg' text="Floorball"/>
            <Options nameIcon='golf.svg' text="Golfe"/>
            <Options nameIcon='handebol.svg' text="Handebol"/>
            <Options nameIcon='game.svg' text="Lol"/>
            <Options nameIcon='mma.svg' text="MMA"/>
            <Options nameIcon='motor.svg' text="Motor"/>
            <Options nameIcon='game.svg' text="Rocket League"/>
            <Options nameIcon='nfl.svg' text="Rugby"/>
            <Options nameIcon='tenis.svg' text="SetTennis"/>
            <Options nameIcon='sinuca.svg' text="Sinuca"/> 
            <Options nameIcon='champion.svg' text="Especiais"/>
            <Options nameIcon='game.svg' text="StarCraft"/>
            <Options nameIcon='tenis-mesa.svg' text="Tênis de Mesa"/>
            <Options nameIcon='voleibol.svg' text="Voleibol"/>
        </ul>
    )
}