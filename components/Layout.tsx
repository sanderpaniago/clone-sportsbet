import Footer from "./Footer";
import Header from "./Header";
import SwipperOptions from "./SwipperOptions";

export default function Layout({children}) {
    return (
        <div className={`app`}>
            <Header />
            <main>
                <SwipperOptions />
                {children}
            </main>
            <Footer />
        </div>
    )
}