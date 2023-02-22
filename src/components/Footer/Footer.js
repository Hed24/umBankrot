function Footer() {
    return(
        <footer className="footer">
            <div className="container">
            <div className="footer____wrapper">
                <div className="footer____wrapper___logo">
                <div className="footer____wrapper___logo__icon">
                    <img className="footer____wrapper___logo__icon_img" src="./img/logo_svg.svg" alt="Logo" /> 
                </div>
                <div className="footer____wrapper___logo__text">
                    <div className="footer____wrapper___logo__text_zag">
                    умный банкрот
                    </div>
                    <div className="footer____wrapper___logo__text_podzag">
                    Свобода от кредитов
                    </div>
                </div>
                </div>

                <div className="footer____wrapper___copyrights">
                <p className="footer____wrapper___copyrights__rights">Copyright © Все права защищены</p>
                <p className="footer____wrapper___copyrights__politics">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
                </div>

                <div className="footer____wrapper___made">Сделано с любовью в <span className="redtext"><a href={"/"}>randee.ru</a></span></div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;