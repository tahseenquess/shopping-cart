import React from 'react'

interface CustomButton {
    label: string;
    onButtonClick: ()=> void ;
}

export default function Button({label, onButtonClick}: CustomButton) {
  return (
        <button onClick={onButtonClick} className='btn btn-primary'>{label}</button>

  )
}
