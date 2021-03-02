import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import SwipperOptions from "./SwipperOptions";


export default function Layout({children}) {

    const [screenX, setScreenX] = useState(0)



    useEffect(()=> {
        setScreenX(window.innerWidth)
    }, [screenX])

    return (
        <div className={`app`}>
            <Header />
            <main className='masterContainer'>
                <Menu modalActive={screenX > 1080} />
                <div className='containerPrimary'>
                    <SwipperOptions />
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}