/* eslint-disable no-unused-vars */
import React from "react";
import './questions.css';
import Droplist from "./Droplist";
import useFetch from "../../hooks/useFetch";

function Faq() {
  
  const [openElement, setOpenElement] = React.useState(null);
  const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt?populate=*`);
  if (loading) return <p> </p>;
  if (error) return <p> Error </p>;
  

  const {_, attributes } = bankrupt;

  const faqs = attributes?.faqs;

  const data = faqs.map(faq => {
    return {
      ...faq,
      isOpen: openElement === faq.id,
    };
  })

  return (
    <section id="faq" className="questions">
    <div className="container">
      <h2 className="questions_____header">Возможно <b>у вас остались вопросы</b>, на которые мы ответили ниже</h2>
      <div className="questions-block">
        {data.map(element =>
        <Droplist openElement={element.id} isOpen={element.isOpen} setOpenElement={setOpenElement} id={element.id} element={element} key={element.id}/>
          )}
      </div>
    </div>
  </section>
  )
}

export default Faq;