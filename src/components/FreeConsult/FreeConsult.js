/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import React, { useState } from 'react';
import './freeconsult.css';
import InputMask from 'react-input-mask';
import axios from 'axios';
import Modal from './Modal';

const Result = ({active, phoneError, setPhoneError, phoneValueFree, inputValueFree, setPhoneValueFree, setInputValueFree, setActive, setOpenModal, }) => {
    // const [phoneValueFree, setPhoneValueFree] = useState('');
    // const [inputValueFree, setInputValueFree] = useState('');
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [inputDirty, setInputDirty] = useState(false);
    // const [phoneError, setPhoneError] = useState('Поле не может быть пустым');
    const [inputError, setInputError] = useState('Поле не может быть пустым');
    const [disabledButton, setDisabledButton] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    function onSubmit(e) {
      e.preventDefault();
      
      if(isChecked) {
        setOpenModal(true)
        axios({
          method: 'post',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          url: 'https://randee.ru/api/leads',
          data: {
              data: {
                  Info: inputValueFree,
                  Phone: phoneValueFree
              },
          }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      } else {
        document.querySelector('.checkbox').style.background="#ED2656";
        setTimeout((() => {
          document.querySelector('.checkbox').style.background="#D9D9D9";
        }), 1000);
      }
    }

      const blurPhoneHandler = (e) => {
        switch (e.target.name) {
          case 'phone':
            setPhoneDirty(true);
            break;
        }
      }

      const blurInputHandler = (e) => {
        switch (e.target.name) {
          case 'text':
            setInputDirty(true);
            break;
        }
      }
      
      const phoneHandler = (e) => {
        setPhoneValueFree(e.target.value);
        if (e.target.value.length !== 18) {
          setPhoneError('Номер некорректный');
        } else {
          setPhoneError('');
        }
      }

      const inputHandler = (e) => {
        setInputValueFree(e.target.value);
        if (e.target.value.length === 0) {
          setInputError('Поле не должно быть пустым');
        } else {
          setInputError('');
        }
      }

      const checkboxHandler = () => {
        setIsChecked(!isChecked);
      }

      // const disabledButtonHandler = (e) => {
      //   if ((phoneValueFree.length === 18) && (inputValueFree !== '')) { 
      //     setDisabledButton(false);
      //   } else {
      //     setDisabledButton(true);
      //   }
      // }

      const isEnabled = (!((phoneValueFree.length !== 18) || (inputValueFree.length === 0)));

      const disabledButtonHandler = (e) => {
        setDisabledButton(isEnabled)
      }




    return (
      <div  className={active? "free-result free-active" : "free-result"}>
        <div className='free-container'>
            <h4 className='free_____header'>Опишите вашу проблему</h4>
            <p className='free_____text'>Мы обязательно ответим вам в течении 30 минут</p>
            <form 
                className='free_____form'
                onSubmit={(e) =>{onSubmit(e)}}>
                
                <div className='phone-wrapper'>
                  <InputMask
                    onBlur={(e) => blurPhoneHandler(e)}
                    value={phoneValueFree}
                    onChange={(e) => {phoneHandler(e); disabledButtonHandler(e)}}
                    mask="+7 (999) 999-99-99"
                    maskChar={null}
                    id='tel2'
                    name='phone'
                    className="free_____phone mask-phone"
                    type="text"           
                    placeholder="+7 (___) ___-__-__">              
                  </InputMask>
                  {(phoneDirty && phoneError) && <div className='free____phone-error' style={{color: '#ED2656'}}>{phoneError}</div>}
                </div>


                <div className='input-wrapper'>
                  <textarea
                    onBlur={(e) => blurInputHandler(e)}
                    value={inputValueFree}
                    onChange={(e) => {inputHandler(e); disabledButtonHandler(e)}}
                    className="free_____input-text"
                    placeholder='Ваша проблема:'
                    name='text'
                  >
                  </textarea>
                  {(inputDirty && inputError) && <div className='free____input-error' style={{color: '#ED2656'}}>{inputError}</div>}
                </div>
                
                


                <div className='wrapper'>
                  <label className='wrapper__checkbox'>
                    <input
                      value={isChecked}
                      type='checkbox'
                      name='checkbox'
                      onChange={(e) => {checkboxHandler(e); disabledButtonHandler(e)}}
                    />
                    <svg
                      className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                      aria-hidden="true"
                      viewBox="0 0 15 11"
                      fill="none"
                    >
                      <path
                        d="M1 4.5L5 9L14 1"
                        strokeWidth="2"
                        stroke={isChecked ? "#ED2656" : "none"}
                      />
                    </svg>
                    <span>Вы соглашаетесь с обработкой <span className='underline'>персональных данных</span></span>

                  </label>

                  <button 
                      disabled = {!isEnabled}
                      className="free_____button-send" 
                      type="submit">
                      Отправить
                  </button>
                </div>
            </form>            
            
            <button 
              className="free_____homeButton-close" 
              onClick={function (event) { setPhoneError(''); setActive(false); setPhoneValueFree(''); setInputValueFree(''); setDisabledButton(true); setIsChecked(false)}}
              >
              <img src='./img/Close.svg' alt='close' />
            </button>
        </div>
      </div>
    );
  }

  function FreeConsult() {    
    const [modalActive, setModalActive] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [phoneValueFree, setPhoneValueFree] = useState('');
    const [inputValueFree, setInputValueFree] = useState('');
    const [phoneError, setPhoneError] = useState('Поле не может быть пустым');


    return (
        <div>
            <button
                onClick={() => setModalActive(true)}
                className="top__consult btn">
                    Бесплатная консультация
                
            </button>
            
        { <Result active={modalActive} phoneError={phoneError} phoneValueFree={phoneValueFree} inputValueFree={inputValueFree} setOpenModal={setOpenModal} openModal={openModal} setActive={setModalActive} setPhoneValueFree={setPhoneValueFree} setInputValueFree={setInputValueFree} setPhoneError={setPhoneError}/> }        
        <Modal setOpenModal={setOpenModal} setActive={setModalActive} openModal={openModal} setPhoneValueFree={setPhoneValueFree} setInputValueFree={setInputValueFree} />
        </div>
    );
  }




export default FreeConsult;