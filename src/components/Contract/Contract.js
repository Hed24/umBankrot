/* eslint-disable no-unused-vars */
import { saveAs } from "file-saver";
import useFetch from "../../hooks/useFetch";

function Contract() {
    const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt?populate=*`);
    if (loading) return <p> </p>;
    if (error) return <p> Error  </p>;

    const {_, attributes } = bankrupt;  //все аттрибуты у bankrupt

    const download = attributes?.ContractDownload; // вывод аттрибут
  

    const saveFile = () => { 
        saveAs( 
            `https://randee.ru${download.data.attributes.url}`, 
          "contract.pdf" 
        ); 
      }; 

    return(
        <section id="contract" className="contract">
            <div className="container">
            <h2 className="contract____header"><b>Спишем ваши долги</b> <br />оптимальным способом</h2>
            <p className="contract____text">Прописываем все гарантии в договоре</p>
            <ul className="contract____list">
                <li className="contract____list___item">
                <h4 className="contract____list___item__header">Полная юридическая поддержка</h4>
                <p className="contract____list___item__text">Защитим ваши интересы в суде или поможем решить вопрос не доводя проблему до суда</p>
                </li>
                <li className="contract____list___item">
                <h4 className="contract____list___item__header">Быстрый старт</h4>
                <p className="contract____list___item__text">Запускаем процедуру за 2 недели, срок банкротства в среднем составляет 6-10 месяцев</p>
                </li>
                <li className="contract____list___item">
                <h4 className="contract____list___item__header">Оплата за результат</h4>
                <p className="contract____list___item__text">Мы вернем вашу оплату, если в результате процедуры долги не будут списаны</p>
                </li>
                <li className="contract____list___item">
                <h4 className="contract____list___item__header">Будем на вашей стороне</h4>
                <p className="contract____list___item__text">Защитим Ваши интересы, в случаях злоупотреблений Арбитражным управляющим</p>
                </li>
                <div className="contract____list___download" onClick={saveFile} >
                    <img className="contract____list___download__img" src="./img/dogovor.png" alt="скачать договор" />
                <span className="contract____list___download__text">Скачайте и изучите <br /><span className="redtext">ПРИМЕР ДОГОВОРА</span></span>
                </div>
            </ul>
            <div className="contract____image">
                <img src="./img/NEW.png" alt="" />   
            </div>
            </div>
        </section> 
    )
}

export default Contract;