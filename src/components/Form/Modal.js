import "./modal.css";

function Modal({ setOpenModal, openModal}) {

  return (
    <div className={openModal? "result show" : "result"}>
      <div className='result___wrapper'>
        <img className='result___wrapper__img' src='../img/done.svg' alt='done'/>
        <h3>Спасибо, мы уже отправляем!</h3>
        <p>Инструкцию в ваш меcceджер.</p>
        <button 
          className="homeButton" 
          onClick={() => {setOpenModal(false)}}
          >
            На главную
          </button>
      </div>
    </div>
  );
}

export default Modal;