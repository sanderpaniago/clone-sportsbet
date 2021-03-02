import { createContext, useEffect, useState } from "react";

interface ItemAposta {
    value: number;
    times: string[];
    placar: string;
    timeSelect: string;

}
interface ApostaContextData {
    addItemAposta: (item: ItemAposta, selectItem) => void;
    itensAposta: ItemAposta[];
    modalActive: {active: boolean, focus: number}
    updateModal: (values) => void;
    removeIAposta: (id) => void;

}

export const ApostaContext = createContext({} as ApostaContextData)



export default function ApostaPrivider({children}){

    const [modalActive, setModalActive] = useState({active: false, focus: 0})
    const [itensAposta, setItensAposta] = useState([])

    function updateModal(values) {
        setModalActive({...modalActive, ...values})
    }

    function addItemAposta(item, selectItem) {
        const value = selectItem
        const times = [item.time1.name, item.time2.name]
        const placar = `${item.time1.gols}x${item.time2.gols}`

        const timeSelect = item.time1.gols > item.time2.gols ? item.time1.name : item.time2.name
        

        setItensAposta([
            ...itensAposta, {
                value, 
                timeSelect, 
                times, 
                placar
            }])
    }

    function removeIAposta(time) {
        const newArray = itensAposta.filter(item=> item !== time)

        setItensAposta(newArray)
    }

    useEffect(()=> {
        if(itensAposta.length >= 2) {
            updateModal({focus: 1})
        }
    }, [itensAposta])

    return(
        <ApostaContext.Provider value={{
            addItemAposta,
            itensAposta,
            modalActive,
            updateModal,
            removeIAposta
        }}>
            {children}
        </ApostaContext.Provider>
    )
}