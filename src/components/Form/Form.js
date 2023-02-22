/* eslint-disable default-case */
import useFetch from "../../hooks/useFetch";
import InputMask from 'react-input-mask';
import axios from "axios";
import React, {useState} from "react";
import Modal from './Modal'

import './modal.css'

function Form() {
    const [phoneValue, setPhoneValue] = useState('')
    // const [disabledButton, setDisabledButton] = useState(true);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [phoneError, setPhoneError] = useState('Поле не может быть пустым');
    const [openModal, setOpenModal] = useState(false);

    const { loading, error, bankrupt } = useFetch(`https://randee.ru/api/bankrupt`);
    if (loading) return <p></p>;
    if (error) return <p></p>;
  
    function onSubmit(e, phoneValue) {
        e.preventDefault(); 
        setOpenModal(true)      
      
        axios({
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: 'https://randee.ru/api/leads',
            data: {
                data: {
                    Info: "Консультация",
                    Phone: phoneValue
                }
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
    //   setDisabledButton(true)
    } else {
      setPhoneError('');
    //   setDisabledButton(false)
    }
  }

    return (
        <section id="form" className="form">
            <div className="container">
                <div className="form______left">
                
                    
                    <img src="./img/woman-form.png" alt="" className="form______left_____img" />
                </div>
                <Modal setOpenModal={setOpenModal} openModal={openModal} />
                <div className="form______content">
                    <h2 className="form______content_____header">Запишитесь на бесплатную часовую консультацию юриста в нашем офисе</h2>
                    <p className="form______content_____text">В этом месяце осталось <b>{bankrupt.attributes.FormNumberOfConsult} мест</b> на бесплатную консультацию</p>
                    <form 
                        onSubmit={(e) =>{onSubmit(e, phoneValue)}}
                        className="form______content_____form"  
                    >
                    {(phoneDirty && phoneError) && <div className='form______content_____form____phone-error' style={{color: 'red'}}>{phoneError}</div>}

                        <div className="form______content_____form____text-wrap">
                            <div className="form______content_____form____text-wrap___left">
                                <h3 className="form______content_____form____text-wrap___left__header"><b>Заполните форму ниже</b>, чтобы записаться на консультацию</h3>
                                <p className="form______content_____form____text-wrap___left__text">Вам перезвонит юрист чтобы назначить время</p>
                            </div>
                            <div className="form______content_____form____text-wrap___right">
                                <img className="form______content_____form____text-wrap___right__img" src="./img/iphone-form.png" alt="phone" />
                            </div>
                        </div>
                    
                        <div className="form______content_____form____wrapper">
                            <InputMask 
                                type="text" 
                                name="phone" 
                                className="form______content_____form____wrapper___input input mask-phone" 
                                placeholder="+7 (___) ___-__-__" 
                                mask="+7 (999) 999-99-99"
                                maskChar={null}
                                value={phoneValue}
                                onBlur={(e) => blurHandler(e)}
                                onChange={(e) => phoneHandler(e)}
                                required
                            />
                            <button
                                // onClick={() => {  setOpenModal(true) }}
                                type="submit"
                                className="form______content_____form____wrapper___button"
                            >
                                <span className="form______content_____form____wrapper___button__text">Отправить</span>
                                <span className="form______content_____form____wrapper___button__symbols">
                                    <img className="form______content_____form____wrapper___button__symbols_item" src="./img/Vector.svg" alt=">"/>
                                    <img className="form______content_____form____wrapper___button__symbols_item" src="./img/Vector.svg" alt=">"/>
                                    <img className="form______content_____form____wrapper___button__symbols_item" src="./img/Vector.svg" alt=">"/>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form;