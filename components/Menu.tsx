import stylesMenu from '../styles/components/menu.module.scss'

export default function Menu({modalActive}) {
    return(
        <div className={`${stylesMenu.menuModal} ${modalActive && stylesMenu.active}`}>
                <ul>
                    <h5 className={stylesMenu.active}>Esportes</h5>
                    <li><img src="/icons/ao-vivo.svg" alt=""/> Ao vivo</li>
                    <li><img src="/icons/calendar.svg" alt=""/> Próximos</li>
                </ul>

                <ul>
                    <h5>Cassino</h5>
                    <li><img src="/icons/cassino.svg" alt=""/> Cassino Ao vivo</li>
                    <li><img src="icons/slots.svg" alt=""/> Slots</li>
                    <li><img src="/icons/bombay-club.svg" alt=""/> <strong>Bombay Club</strong></li>
                </ul>

                <ul>
                    <li><img src="/icons/star.svg" alt=""/> Clube Sportsbet</li>
                </ul>

                <ul>
                    <li><img src="/icons/star.svg" alt=""/> Corrida de Cavalos</li>
                    <li><img src="/icons/star.svg" alt=""/> Esportes Virtuais</li>
                    <li><img src="/icons/star.svg" alt=""/> Guru De Esportes</li>
                    <li><img src="/icons/star.svg" alt=""/> Brasil</li>
                    <li><img src="/icons/star.svg" alt=""/> BBB21</li>
                    <li><img src="/icons/star.svg" alt=""/> NBA</li>
                </ul>

                <ul>
                    <li><img src="/icons/chat" alt=""/> Chat Ao Vivo</li>
                    <li><img src="/icons/central-help.svg" alt=""/> Central De Ajuda</li>
                    <li><img src="icons/promotion.svg" alt=""/> Promoçõe</li>
                    <li><img src="/icons/star.svg"/> VIP</li>
                    <li><img src="/icons/sobre.svg" alt=""/> Sobre</li>
                    <li><img src="/icons/noticias.svg" alt=""/> Notícias</li>
                </ul>

                <div className={stylesMenu.themeContainer}>
                    <span>dia</span>
                    <label>
                        <input type="checkbox" id="theme"/>
                        <span></span>
                    </label>
                    <span>noite</span>
                </div>

                <select name="lang" id="">
                    <option value="">Português</option>
                    <option value="">Englês</option>
                </select>

                <select name="number" id="">
                    <option value="">Decimal</option>
                    <option value="">Americano</option>
                </select>
            </div>
    )
}