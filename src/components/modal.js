import React from 'react'
import './modal.css'
import Cheers from '../img/cheers.png'

export default function Modal() {
   if(true){
       return (
           <div>
                <div className='main-container'>
                    <p className='button-close'>x</p>
                    <div className='main-content'>
                        <p className='content-first-text'>
                            Primeira vez aqui?
                        </p>
                        <p className='content-second-text'>
                            Você ganhou 15% de desconto para utilizar qualquer festa! O código promocional será enviado por e-mail!
                        </p>
                        <input type='text' className='content-input'></input>
                        <button className='content-button'>Resgatar o código</button>
                        <img src={Cheers}/>
                    </div>
                </div>
           </div>
       )
   }
}