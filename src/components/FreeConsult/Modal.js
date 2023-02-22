import "./modalConsult.css";

function Modal({ setOpenModal, openModal, setActive, setPhoneValueFree, setInputValueFree, setPhoneError  }) {


  return (
    <div className={openModal? "resultPdf show" : "resultPdf"}>
      <div className='resultPdf___wrapper'>
        <img className='resultPdf___wrapper__img' src='../img/done.svg' alt='done'/>
        <h3>Спасибо, мы уже отправляем!</h3>
        <p>Инструкцию в ваш меcceджер.</p>
        <button 
          className="homeButton" 
          onClick={() => {setOpenModal(false); setActive(false); setPhoneValueFree(''); setInputValueFree('') }}
          >
            На главную
          </button>
      </div>
    </div>
  );
}

export default Modal;