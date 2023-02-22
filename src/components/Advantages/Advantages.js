/* eslint-disable no-unused-vars */
import React from "react";
import useFetch from "../../hooks/useFetch";

function Advantages() {
    const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt?populate=*`);
    if (loading) return <p>  </p>;
    if (error) return <p> Error  </p>;

    const {_, attributes } = bankrupt;  //все аттрибуты у bankrupt

    const Advantages = attributes?.Advantages; // вывод аттрибут

    return (
        <section id="advantages" className="advantages">
            <div className="container">
            {/* <h2 className="advantages_____header">После начала процедуры списания, <b>вас <span className="redtext">перестанут</span> тревожить коллекторы</b></h2> */}
            <h2 className="advantages_____header" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesTitle}}></h2>

            <div className="advantages_____content">
                <div className="advantages_____content____wrapper">
                <div className="advantages_____content____wrapper___left">
                    <div className="advantages_____content____wrapper___left__item">
                    <div className="advantages_____content____wrapper___left__item_img"><img src={`https://randee.ru${Advantages.data[0].attributes.url}`} alt="" /></div>
                    {/* <div className="advantages_____content____wrapper___left__item_img"><img src="./img/phone.png" alt="" /></div> */}
                    <div className="advantages_____content____wrapper___left__item_text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesSub1}}></div>
                    {/* <p className="advantages_____content____wrapper___left__item_text">Прекращение звонков и визитов коллекторов и приставов</p> */}
                    </div>
                    <div className="advantages_____content____wrapper___left__item">
                    <div className="advantages_____content____wrapper___left__item_img"><img src={`https://randee.ru${Advantages.data[1].attributes.url}`} alt="" /></div>
                    <div className="advantages_____content____wrapper___left__item_text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesSub2}}></div>

                    {/* <p className="advantages_____content____wrapper___left__item_text">Возможность беспрепятственного выезда за границу</p> */}
                    </div>
                    <div className="advantages_____content____wrapper___left__item">
                    <div className="advantages_____content____wrapper___left__item_img"><img src={`https://randee.ru${Advantages.data[2].attributes.url}`} alt="" /></div>
                    <div className="advantages_____content____wrapper___left__item_text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesSub3}}></div>

                    {/* <p className="advantages_____content____wrapper___left__item_text">Получение зарплаты или пенсии в полном размере, без удержаний</p> */}
                    </div>
                    <div className="advantages_____content____wrapper___left__item">
                    <div className="advantages_____content____wrapper___left__item_img"><img src={`https://randee.ru${Advantages.data[3].attributes.url}`} alt="" /></div>
                    <div className="advantages_____content____wrapper___left__item_text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesSub4}}></div>

                    {/* <p className="advantages_____content____wrapper___left__item_text">Восстановите привычный уровень потребления, побалуете родных</p> */}
                    </div>
                </div>
                <div className="advantages_____content____wrapper___mid">
                    <div className="advantages_____content____wrapper___mid__item">
                    <div className="advantages_____content____wrapper___mid__item_img"><img src={`https://randee.ru${Advantages.data[4].attributes.url}`} alt="" /></div>
                    <div className="advantages_____content____wrapper___left__item_text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesSub5}}></div>

                    {/* <p className="advantages_____content____wrapper___mid__item_text">Разблокировку всех ваших банковских карт</p> */}
                    </div>
                    <div className="advantages_____content____wrapper___mid__item">
                    <div className="advantages_____content____wrapper___mid__item_img"><img src={`https://randee.ru${Advantages.data[5].attributes.url}`} alt="" /></div>
                    <div className="advantages_____content____wrapper___left__item_text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesSub6}}></div>

                    {/* <p className="advantages_____content____wrapper___mid__item_text">Возврат навязанных страховок и доп.услуг</p> */}
                    </div>
                    <div className="advantages_____content____wrapper___mid__item">
                    <div className="advantages_____content____wrapper___mid__item_img"><img src={`https://randee.ru${Advantages.data[6].attributes.url}`} alt="" /></div>
                    <div className="advantages_____content____wrapper___left__item_text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesSub7}}></div>

                    {/* <p className="advantages_____content____wrapper___mid__item_text">Прекращение хождения по замкнутому кругу</p> */}
                    </div>
                    <div className="advantages_____content____wrapper___mid__item">
                    <div className="advantages_____content____wrapper___mid__item_img"><img src={`https://randee.ru${Advantages.data[7].attributes.url}`} alt="" /></div>
                    <div className="advantages_____content____wrapper___left__item_text" dangerouslySetInnerHTML={{__html: bankrupt.attributes.AdvantagesSub8}}></div>

                    {/* <p className="advantages_____content____wrapper___mid__item_text">Будете уверенно смотреть в будущее и строить планы</p> */}
                    </div>
                </div>
                </div>

                <div className="advantages_____content____right">
                <div className="advantages_____content____right___group">
                    <h5 className="advantages_____content____right___group__header">Возьмем всю работу на себя</h5>
                    <p className="advantages_____content____right___group__text">Мы полностью возьмем на себя оформление и подачу документов</p>
                </div>
                <div className="advantages_____content____right___group">
                    <h5 className="advantages_____content____right___group__header">Возьмем всю работу на себя</h5>
                    <p className="advantages_____content____right___group__text">Мы полностью возьмем на себя оформление и подачу документов</p>
                </div>
                <div className="advantages_____content____right___group">
                    <h5 className="advantages_____content____right___group__header">Возьмем всю работу на себя</h5>
                    <p className="advantages_____content____right___group__text">Мы полностью возьмем на себя оформление и подачу документов</p>
                </div>
                </div>
            </div>
            </div>
        </section>

    )
}

export default Advantages;