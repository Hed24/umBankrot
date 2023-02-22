/* eslint-disable no-unused-vars */
/* eslint-disable default-case */

import React, { useState } from 'react';
import clsx from 'clsx';
import InputMask from 'react-input-mask';
import axios from 'axios';
import "./quizz.css";
import useFetch from "../../hooks/useFetch";

function Game({ step, question, onClickVariant, inputHidden, arr,  inputType}) {
  const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt`);
  if (loading) return <p> </p>;
  if (error) return <p> Error</p>;

  const {_, attributes } = bankrupt;
  const quizz = attributes?.quizz;

  const percentage = 20+ Math.round(step / (quizz.length + 1) * 100);


  const getClick = function (setChecked) {
  const checkedItem = document.querySelectorAll('input:checked');
    checkedItem.forEach((item) => {
      let dataValue = item.getAttribute('data-value');
          arr.push(dataValue); // массив ответов
    })
        inputHidden.value = inputHidden.value + '\r\n' + quizz[step].title + ': ' + arr; // заполнение инпута
        // console.log(inputHidden.value)
  }

  return (
    <>
      <div className="left-block">
        <span className="left-block___question-lable"> Вопрос {step + 1} из {quizz.length}</span>
        <div className="left-block___progress">
          <div style={{ width: `${percentage}%` }} className="left-block___progress__inner"></div>
        </div>
        <h3>{ quizz[step].title }</h3>
        <ul className="left-block___list" id="browsers">
          {quizz[step].variants.map((text, index) => (
            <li className="left-block___list__item" tabIndex="0" key = { text }>
              <input
                tabIndex={"-1"}
                data-value={ text }
                className = 'left-block___list__item_input'
                name={step}
                id={index}
                type={inputType}>
              </input>

              <label
                tabIndex={"-1"}
                htmlFor={index}>
                  { text }
              </label>
            </li>
            ))}
        </ul>
        <button 
          className="left-block___button btn" 
          onClick={()=>{ getClick(); onClickVariant()}}>
          <span className="left-block___button__text">Далее</span>
          <span className="left-block___button__symbols">
            <img className="left-block___button__symbols_item" src="./img/Vector.svg" alt=">"/>
            <img className="left-block___button__symbols_item" src="./img/Vector.svg" alt=">"/>
            <img className="left-block___button__symbols_item" src="./img/Vector.svg" alt=">"/>
          </span>
        </button>
      </div>
        <article className="rightblock">
          <div className="rightblock___content">
            <h5 className="rightblock___content__header">После получения ваших ответов мы <b>бесплатно</b></h5>
            <div className="rightblock___content__group">
              <p className="rightblock___content__group_text">Определим как сохранить залоговое имущество (ипотека или автомобиль)</p>
              <p className="rightblock___content__group_text">Составим стратегию полного или частичного списания долгов</p>
              <p className="rightblock___content__group_text">Расскажем как законно защитить свое имущество</p>
            </div>
            <p className="rightblock___content__text change">{ quizz[step].text }</p>
          </div>
          <img className='rightblock___man' src="./img/man_quiz.png" alt='man'></img>
        </article>
    </>
  );
}

function Send({ setModalActive, inputHidden, arr}) { 
  const [open, setOpen] = useState(false);
  const [inpValue, setInpValue] = useState('WhatsApp');
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState('Поле не может быть пустым');
  const [disabledButton, setDisabledButton] = useState(true);
  const commonData = inpValue + ' ' + phoneValue;

  function handleInpClick(val) {
    setInpValue(val);
    setOpen((prev) => prev=!prev);
  }

  function onSubmit(e, inputHidden) {
    e.preventDefault();
    inputHidden.value = inputHidden.value + ' ' + arr; // заполнение инпута

    axios({
      method: 'post',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      url: 'https://randee.ru/api/leads',
      data: {
          data: {
              Quizz: inputHidden.value,
              Phone: commonData
          },
      }
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
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
    <>
      <div className="left-block">
        <span className="left-block___question-lable"> Готово на 99% </span>
        <div className="left-block___progress">
          <div style={{ width: '99%' }} className="left-block___progress__inner"></div>
        </div>
        <h3>Отправьте данные, чтобы мы определили возможность списания долгов и его стоимость</h3>
        <h4>После отправки ответов вы получите:</h4>
        <div className="left-block____answers">
          <p className="left-block____answers__text">Определим как сохранить залоговое имущество (ипотека или автомобиль)</p>
          <p className="left-block____answers__text">Составим стратегию полного или частичного списания долгов</p>
          <p className="left-block____answers__text">Расскажем как законно защитить свое имущество</p>
        </div>
        <form 
          className="left-block____form" 
          onSubmit={(e) =>{onSubmit(e, inputHidden)}}
          >
          {(phoneDirty && phoneError) && <div className='left-block____form___phone-error' style={{color: 'red'}}>{phoneError}</div>}
          <InputMask
            onBlur={(e) => blurHandler(e)}
            value={phoneValue}
            onChange={(e) => phoneHandler(e)}
            mask="+7 (999) 999-99-99"
            maskChar={null}
            id='tel'
            name='phone'
            className="left-block____form___input mask-phone"
            type="text"           
            placeholder="+7 (___) ___-__-__">              
          </InputMask>

          <div className='left-block____form____select'>
            <div
              tabIndex={0}
              data-value={inpValue}
              onClick={() => setOpen(!open)}
              id='droplist-button'
              className={clsx('left-block____form____select___button', open && 'left-block____form____select___button-active')}>

              <div className={inpValue +"Icon"}></div>
              <input 
                className='left-block____form____select___button__input' 
                disabled="true"
                name='social'
                value={inpValue}>
              </input>

            </div>
            <ul 
              className={clsx('left-block____form____select___list', open && 'left-block____form____select___list-active')} 
              id='socialList'>

              <li
                tabIndex={0}
                onClick={() => handleInpClick('WhatsApp')} 
                className='left-block____form____select___list__item left-block____form____select___list__item-whatsapp' 
                data-social="WhatsApp">
                  
                <div className='left-block____form____select___list__item_text left-block____form____select___list__item_text-whatsapp'>WhatsApp</div>
              </li>
              
              <li
                tabIndex={0}
                onClick={() => handleInpClick('Telegram')}
                className='left-block____form____select___list__item left-block____form____select___list__item-telegram' 
                data-social="Telegram">

                <div className='left-block____form____select___list__item_text  left-block____form____select___list__item_text-telegram'>Telegram</div>
              </li>
            </ul>
          </div>
          <input 
            className="social-input" 
            onChange={()=>{}}
            name="phone"
            value={commonData}
            type="hidden">
          </input>
        
        
          <button 
            disabled = {disabledButton}
            className="left-block___button left-block___button-send" 
            onClick={() => {setModalActive(true)}}
            type="submit">
            
            
            <span className="left-block___button__text button-send">Отправить</span>
            <span className="left-block___button__symbols">
              <img className="left-block___button__symbols_item" src="./img/Vector.svg" alt=">"/>
              <img className="left-block___button__symbols_item" src="./img/Vector.svg" alt=">"/>
              <img className="left-block___button__symbols_item" src="./img/Vector.svg" alt=">"/>
            </span>
          </button>        
        </form>


      </div>
      <article className="rightblock">
        <div className="rightblock___content rightblock___content-send">
          <h4 className="rightblock___content__header-send">Вы получите на<b> whatsapp</b> или <b>телеграм ответ с правильной стратегией</b></h4>
          <p className="rightblock___content__text-send">Правильный выбор стратегии списания долгов снижает затраты должника на процедуру до 50 %, снижает вероятность неосвобождения от долгов, потери имущества и отмены сделок</p>
        </div>
        <img className="rightblock__hand" src="./img/png_hand.png" alt='hand'></img>
      </article>     
    </>
  );
}

const Result = ({active, setActive, setBack, inputHidden}) => {

  const resetData = function() {
    inputHidden.value = '';
  }
  
  return (
    <div className={active? "result active" : "result"}>
      <div className='result___wrapper'>
        <img className='result___wrapper__img' src='../img/done.svg' alt='done'/>
        <h3>Спасибо за ваши ответы!</h3>
        <p>Мы выслали ответ в менеджер на ваш номер мобильного телефона</p>
        <button className="homeButton" onClick={function (event) 
          {setActive(false); 
          resetData(); 
          setBack()
          }}>На главную</button>
      </div>
    </div>
  );
}

function Quizz() {
  const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt`);
  const [step, setStep] = useState(0);  
  const [modalActive, setModalActive] = useState(false);
  const inputHidden = document.getElementById('hidden-quizz');
  const [inputType, setInputType] = useState('radio');
  const arr = [];

  if (loading) return <p> </p>;
  if (error) return <p> Error  </p>;

  const {_, attributes } = bankrupt;
  const quizz = attributes?.quizz;
  const question = quizz[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if ((step === 0) || (step === 1)) {
      setInputType('checkbox');
    } else {
      setInputType('radio');
    }
  }
  
  const setBack =() => {
    setStep(0);
  }

  return (
    <section id='quizz' className="test">
      <div className="container"> 
        <h2 className="test__header" dangerouslySetInnerHTML={{__html: bankrupt.attributes.QuizzTitle}}></h2>
        <div className="App">
          {step !== quizz.length ? (<Game quizz={quizz} step={step} arr={arr} setInputType={setInputType} inputType={inputType} inputHidden={inputHidden}  question={question} onClickVariant={onClickVariant}/>) : (<Send arr={arr} inputHidden={inputHidden} setModalActive={setModalActive}/> )}
          { <Result active={modalActive} setBack={setBack} inputHidden={inputHidden} setActive={setModalActive}/> }
        </div>
      </div>
    </section>
  );
}

export default Quizz;