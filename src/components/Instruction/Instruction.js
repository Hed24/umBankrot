/* eslint-disable default-case */
import React, {useState} from "react";
import clsx from "clsx";
import InputMask from 'react-input-mask';
import axios from "axios";

function Instruction() {
  const [open, setOpen] = useState(false);
  const [social, setSocial] = useState('whatsApp')
  const [color, setColor] = useState('#12C868')
  const [pickedTelegram, setPickedTelegram] = useState(true);
  const [pickedWhatsApp, setPickedWhatsApp] = useState(false);
  const [phoneValue, setPhoneValue] = useState('')
  const [disabledButton, setDisabledButton] = useState(true);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState('Поле не может быть пустым');


  const inputSocialHidden = document.getElementById('socil-input');
  
  function onSubmit(e) {
    e.preventDefault();
    window.location.href = ((social==="whatsApp") ? (`https://wa.me/+79177786408?text=${phoneValue}`) : (`tg://msg?text=Mi_mensaje&to=+79177786408`));


    axios({
      method: 'post',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: 'https://randee.ru/api/leads',
      data: {
          data: {
              Info: "Отправка инструкции",
              Phone: phoneValue + ' ' + social
          },
      }
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    setPhoneValue('');
  }

  const setSocialHandler = (val) => {
    setSocial(val); 
    inputSocialHidden.value = 'null';
    if (val==="whatsApp") {
      setColor('#12C868');
      setPickedTelegram(true);
      setPickedWhatsApp(false);
    }
    if (val==="telegram") {
      setColor('#1286C8');
      setPickedTelegram(false);
      setPickedWhatsApp(true);
    }
    setOpen((prev) => prev=!prev);
    inputSocialHidden.value = 'val';
    console.log(inputSocialHidden.value)
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'phone': 
        setPhoneDirty(true);
        break;
    }
  }

  const phoneHandler = (e) => {
    setPhoneValue(e.target.value);
    if (e.target.value.length !== 18) {
      setPhoneError('Номер некорректный')
      setDisabledButton(true)
    } else {
      setPhoneError('');
      setDisabledButton(false)
    }
  }

  return (
      <section id="download"  className="instruction">
      <div className="container">
        <div className="instruction_____content">
          <h2 className="instruction_____content____header"><b>Получите полную инструкцию</b> по закрытию кредитов и займов с помощью банкротства</h2>
          <span className="instruction_____content____added"><b>+ персональную консультацию</b><br /> по телефону от нашего юриста</span>
          <form 
            onSubmit={(e) =>{onSubmit(e)}}
            className="instruction_____content____form" 
          >
            <h4 htmlFor="" className="instruction_____content____form___header">Заполните форму ниже, чтобы получить подробную PDF-инструкцию</h4>
            <span className="instruction_____content____form___text">а также развернутую консультацию юриста</span>
            <div className="instruction_____content____form___wrapper">
            {(phoneDirty && phoneError) && <div className='instruction_____content____form___wrapper__phone-error' style={{color: 'red'}}>{phoneError}</div>}
              <InputMask 
                className="instruction_____content____form___wrapper__input input mask-phone" 
                name="phone" 
                type="text" 
                placeholder="+7 (___) ___-__-__"
                mask="+7 (999) 999-99-99"
                maskChar={null}
                value={phoneValue}
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => phoneHandler(e)}
                required 
              />
  
              <div className="form-group">
                <div className="form-group____dropdown">
                  <span>Нажми для выбора месенджера</span>
                  <button 
                    onClick={() => setOpen(!open)}
                    type="button" 
                    className="form-group____dropdown___button"
                    style={{background: `${color}`}}
                  >
                    <img src={`./img/svg_${social}.svg`} alt=""/>
                  </button>
                  <ul 
                    className={clsx("form-group____dropdown___list", open && 'form-group____dropdown___list--visible')}
                  >
                    <li 
                      className={clsx("form-group____dropdown___list__item whatsapp-icon", pickedWhatsApp && 'form-group____dropdown___list__item--active whatsapp-icon--active')}
                      data-value="whatsApp"
                      onClick={(e) => setSocialHandler('whatsApp')}
                      >
                        <img className="form-group____dropdown___list__item_image image" src="./img/svg_whatsApp.svg" alt="" />
                    </li>
                    <li
                      className={clsx("form-group____dropdown___list__item telegram-icon", pickedTelegram && 'form-group____dropdown___list__item--active telegram-icon--active')}
                      data-value="telegram"
                      onClick={(e) => setSocialHandler('telegram')}
                      >
                        <img className="form-group____dropdown___list__item_image image" src="./img/svg_telegram.svg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>

              <button
                type="submit"
                className="instruction_____content____form___wrapper__btn btn"
                disabled={disabledButton}
              >    
                <span className="instruction_____content____form___wrapper__btn_text">Отправить файл</span>
                <img className="instruction_____content____form___wrapper__btn_icon" src="./img/Скачать_pdf.svg" alt="" />
              </button>
            </div>  
          </form>
        </div>
      </div>
    </section>
  )
}

export default Instruction;