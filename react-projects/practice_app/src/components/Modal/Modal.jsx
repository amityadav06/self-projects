import React from 'react'

const Modal = ({close}) => {
  return (
    <div className='modal-overlay'>
        <div className="modal">
            <div className="modal-header">
                <p>Modal Title</p>
                <button onClick={() => close()}>X</button>
            </div>
            <div className="modal-body">
                <p>Hello form custom modal</p>
            </div>
        </div>
    </div>
  )
}

export default Modal