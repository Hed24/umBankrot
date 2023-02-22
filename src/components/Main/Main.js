import React, { useState } from "react";
import Video from '../Video/VideoComponent';
import useFetch from "../../hooks/useFetch";
import FreeConsult from "../FreeConsult/FreeConsult";
import clsx from "clsx";


function Main() {
    const [activeWhatsApp, setActiveWhatsApp] = useState(false);
    const [activeTelegram, setActiveTelegram] = useState(false);
    const [activeVk, setActiveVk] = useState(false);
    // const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt`);
    // if (loading) return <p>  </p>;
    // if (error) return <p> Error  </p>;



    const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt?populate=*`);
    if (loading) return <p> </p>;
    if (error) return <p> Error  </p>;
  
    const {_, attributes } = bankrupt;  //все аттрибуты у bankrupt
    const video3 = attributes?.video3; // вывод аттрибут
  
    const src=`https://randee.ru${video3.data.attributes?.url}`;

    return (
        <div>

            <section className="block1">
                <div id="video-block" className="block1__video-block">
                    {src && <Video />  }
                </div>                
                <div className="container">
                <header id="main" className="top">
                    <a href="/">
                    <div className="top___logo">
                        <div className="top___logo__icon">
                        <img className="top___logo__icon_img" src="./img/logo_svg.svg" alt="" /> 
                        </div>
                        <div className="top___logo__text">
                        <div className="top___logo__text_zag">
                            умный банкрот
                        </div>
                        <div className="top___logo__text_podzag">
                            Свобода от кредитов
                        </div>
                        </div>
                    </div>
                    </a>
                    <div className="top___social">
                    <div className="top___social__text">
                        Время ответа <br />всего 15 <b>секунд</b>
                    </div>

                        <a href="https://wa.me/+79177786408" className="top___social__item whatsapp">
                        <button 
                            data-value="WhatsApp" 
                            className={clsx('top___social__item_sub  whatsapp-bgnd', activeWhatsApp && 'top___social__item_sub  whatsapp-bgnd active')} 
                            onMouseOver={()=>setActiveWhatsApp(true)}
                            onMouseOut={()=>setActiveWhatsApp(false)}
                        >
                            <span>Написать в WhatsApp</span>
                            <img src="./img/svg_whatsApp.svg" alt="" />
                        </button>
                        </a>
                        <a href="tg://resolve?domain=+79177786408" className="top___social__item telegram">
                        <button 
                            data-value="Telegram" 
                            // className="top___social__item_sub telegram-bgnd"
                            className={clsx('top___social__item_sub telegram-bgnd', activeTelegram && 'top___social__item_sub telegram-bgnd active')} 
                            onMouseOver={()=>setActiveTelegram(true)}
                            onMouseOut={()=>setActiveTelegram(false)}
                        >
                            <span>Написать в Telegram</span>
                            <img src="./img/svg_telegram.svg" alt="" />
                        </button>
                        </a>
                        <a href="https://vk.com" className="top___social__item vk">
                        <button 
                            data-value="Vk" 
                            className={clsx('top___social__item_sub vk-bgnd', activeVk && 'top___social__item_sub vk-bgnd active')} 
                            onMouseOver={()=>setActiveVk(true)}
                            onMouseOut={()=>setActiveVk(false)}
                        >
                            <span>Написать в Вконтакте</span>
                            <img src="./img/svg_vk.svg" alt="" />
                        </button>
                        </a>
                
                    </div>
                    <div className="top___phone">
                    <div className="top___phone__text">Звоните, Пн-ВС 10:00 - 21:00</div>
                    <div tabIndex="0" className="top___phone__number">{bankrupt.attributes.MainPhone}</div>
                    </div>
                    <div id="freeConsult" className="top__consult-wrapper">
                        <FreeConsult />
                    </div>
                </header>
                <div className="offer">
                    <div className="offer____content">
           
                    <h1 className="offer____content___header" dangerouslySetInnerHTML={{__html: bankrupt.attributes.MainTitle}}></h1>

       
                    <div className="offer____content___text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.MainSubtitle}}></div>
                    <div className="offer____content___buttons">
                        <a href="#download" className="offer____content___buttons__button btn download">
                        <span className="offer____content___buttons__button_text">Скачать инструкцию</span>
                        <img className="offer____content___buttons__button_icon" src="./img/Скачать_pdf.svg" alt="" />
                        </a>            
                        <a href="tg://resolve?domain=alexhed" className="offer____content___buttons__button btn send-telegram">
                        <div>
                            <span className="offer____content___buttons__button_header">Выслать в Telegram</span>
                            <span className="offer____content___buttons__button_text telegram-resonse">время ответа 15 секунд</span>
                        </div>              
                        <img src="./img/svg_telegram.svg" alt="" />
                        </a>
                    </div>
                    <ul className="offer____content___advantages">
                        <li className="offer____content___advantages__item">
                        <h4 className="offer____content___advantages__item_header">1000+<br />
                            клиентов </h4>
                        <p className="offer____content___advantages__item_text">Нас выбирает каждая <br />вторая медицинаская <br />организация</p>
                        </li>
                        <li className="offer____content___advantages__item">
                        <h4 className="offer____content___advantages__item_header">20 + <br />
                            лет на рынке</h4>
                        <p className="offer____content___advantages__item_text">Мы работаем более <br />20 лет на российском <br />рынке</p>
                        </li>
                        <li className="offer____content___advantages__item">
                        <h4 className="offer____content___advantages__item_header">100% <br />гарантия</h4>
                        <p className="offer____content___advantages__item_text">Собственная гарантия <br />на оборудование купленное у <br />нас</p>
                        </li>
                    </ul>         
                    </div>
                </div>
                
                <div className="block1__right">
                    <img src="./img/MAN.png" alt="" />
                </div>
                </div>
            </section>
        </div>


    )
}

export default Main;