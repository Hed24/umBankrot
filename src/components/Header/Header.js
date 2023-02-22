/* eslint-disable jsx-a11y/anchor-is-valid */
import useFetch from "../../hooks/useFetch";
import clsx from "clsx";
import React, {useState} from "react";

function Header() {
  const [open, setOpen] = useState(false)
  const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt`);
  if (loading) return <p>  </p>;
  if (error) return <p> Error  </p>;
  
  return(

    <header className="header">
      <nav className="header_____nav container">
      <div 
        className={clsx("header_____nav____burger", open && 'header_____nav____burger-active')}
        onClick={() => setOpen(!open)}
        >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a className="header_____nav____phone" href={`tel:${bankrupt.attributes.MainPhone}`}>{bankrupt.attributes.MainPhone}</a>
      <ul className={clsx("header_____nav____list", open && "header_____nav____list-active")}>
        <li onClick={() => setOpen(!open)} className="header_____nav____list__item"><a href="#main" className="header_____nav____list__item_link">КАК СПИСАТЬ ДОЛГИ</a></li>
        <li onClick={() => setOpen(!open)} className="header_____nav____list__item"><a href="#quizz" className="header_____nav____list__item_link">ВАРИАНТЫ И СТОИМОСТЬ</a></li>
        <li onClick={() => setOpen(!open)} className="header_____nav____list__item"><a href="#advantages" className="header_____nav____list__item_link">ЧТО ВЫ ПОЛУЧИТЕ?</a></li>
        <li onClick={() => setOpen(!open)} className="header_____nav____list__item"><a href="#download" className="header_____nav____list__item_link">PDF - ИНСТРУКЦИЯ</a></li>
        <li onClick={() => setOpen(!open)} className="header_____nav____list__item"><a href="#feedbacks" className="header_____nav____list__item_link">ОТЗЫВЫ</a></li>
        <li onClick={() => setOpen(!open)} className="header_____nav____list__item"><a href="#contract" className="header_____nav____list__item_link">ГАРАНТИИ</a></li>
        <li onClick={() => setOpen(!open)} className="header_____nav____list__item"><a href="#faq" className="header_____nav____list__item_link">ВОПРОСЫ?</a></li>
        <li onClick={() => setOpen(!open)} className="header_____nav____list__item"><a href="#form" className="header_____nav____list__item_link">КОНТАКТЫ</a></li>
      </ul>
      </nav>
    </header>
  )
}

export default Header;