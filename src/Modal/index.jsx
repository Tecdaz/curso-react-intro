import React from 'react';
import './Modal.css'
import ReactDOM from 'react-dom';

function Modal(){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <p>Hola mundo</p>
        </div>,
        document.querySelector('#modal')
    )
}

export { Modal };