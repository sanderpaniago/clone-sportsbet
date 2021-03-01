import { useEffect, useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../styles/components/swipperOptions.module.scss'


interface OptionsProps {
    nameIcon: string;
    text: string;
    path: string
    
}

function Options({nameIcon, text, path }: OptionsProps) {

    const router = useRouter()

    return(
        <Link href={`${path === '/nan' ? '/' : path}`}>
            <a className={`${styles.itemContainer} ${path === router.pathname && styles.active }`}> 
                <div>
                    <img src={`icons/${nameIcon}`} alt=""/>
                </div>
                <p>{text}</p>
            </a>
        </Link>
    )
}

export default function SwipperOptions() {

    


    return (
        <ul className={styles.swipperContainer}>
            <Options path='/' nameIcon='destaque.svg' text="Destaques"/>
            <Options path='/futebol' nameIcon='futebol.svg' text="Futebol"/>
            <Options path='/nan' nameIcon='basquete.svg' text="Basquete"/>
            <Options path='/nan' nameIcon='tenis.svg' text="Tênis"/>
            <Options path='/nan' nameIcon='especiais.svg' text="Especiais do io"/>
            <Options path='/nan' nameIcon='game.svg' text="CS:GO"/>
            <Options path='/nan' nameIcon='nfl.svg' text="Futebol Americano"/>
            <Options path='/nan' nameIcon='nfl.svg' text="AFL"/>
            <Options path='/nan' nameIcon='bandy.svg' text="Bandy"/>
            <Options path='/nan' nameIcon='beisebol.svg' text="Beisebol"/>
            <Options path='/nan' nameIcon='biathlon.svg' text="Biathlon"/>
            <Options path='/nan' nameIcon='boxe.svg' text="Boxe"/>
            <Options path='/nan' nameIcon='game.svg' text="Call of Duty"/>
            <Options path='/nan' nameIcon='criquete.svg' text="Críquete"/>
            <Options path='/nan' nameIcon='cross.svg' text="Cross Country"/>
            <Options path='/nan' nameIcon='ciclismo.svg' text="Cilcismo"/>
            <Options path='/nan' nameIcon='dardos.svg' text="Dardos"/>
            <Options path='/nan' nameIcon='game.svg' text="Dota 2"/>
            <Options path='/nan' nameIcon='futebol.svg' text="eFIFA"/>
            <Options path='/nan' nameIcon='basquete.svg' text="eNBA"/>
            <Options path='/nan' nameIcon='bandy.svg' text="Floorball"/>
            <Options path='/nan' nameIcon='golf.svg' text="Golfe"/>
            <Options path='/nan' nameIcon='handebol.svg' text="Handebol"/>
            <Options path='/nan' nameIcon='game.svg' text="Lol"/>
            <Options path='/nan' nameIcon='mma.svg' text="MMA"/>
            <Options path='/nan' nameIcon='motor.svg' text="Motor"/>
            <Options path='/nan' nameIcon='game.svg' text="Rocket League"/>
            <Options path='/nan' nameIcon='nfl.svg' text="Rugby"/>
            <Options path='/nan' nameIcon='tenis.svg' text="SetTennis"/>
            <Options path='/nan' nameIcon='sinuca.svg' text="Sinuca"/> 
            <Options path='/nan' nameIcon='champion.svg' text="Especiais"/>
            <Options path='/nan' nameIcon='game.svg' text="StarCraft"/>
            <Options path='/nan' nameIcon='tenis-mesa.svg' text="Tênis de Mesa"/>
            <Options path='/nan' nameIcon='voleibol.svg' text="Voleibol"/>
        </ul>
    )
}