import React from 'react';
import './questions.css';
import clsx from 'clsx';

const Droplist = (props, openElement, isOpen, setOpenElement, id ) => {
  // const [open, setOpen] = React.useState(false);
  // setOpen(false)
  // console.log(props.open)
  const toggleElement = (id) => {
    if (props.openElement === props.id) {
      props.setOpenElement(id);
      if(props.isOpen) {
        props.setOpenElement(null);
      }
    } else {
      props.setOpenElement(null);
    }    
  };

  return (
    <div 
      className={clsx('droplist', props.isOpen && 'droplist-active')}
      onClick={() => toggleElement(props.id)}>
      <button className='droplist___button'>
        <span name="droplist" className={clsx('droplist___button__arrow', props.isOpen && 'droplist___button__arrow-active')}></span>
        {props.element.title}
      </button>
      <div className={clsx('droplist___answer', props.isOpen && 'droplist___answer-active')}>
        {props.element.answer}
      </div>
    </div>    
  );
};

export default Droplist;