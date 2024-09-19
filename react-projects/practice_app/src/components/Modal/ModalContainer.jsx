import React, { useState } from 'react'
import Modal from './Modal'
import './modal.css'

const ModalContainer = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

  return (
    <div>
        <h5>This is modal container</h5>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && (
            <Modal close={closeModal} />
        )}
    </div>
  )
}

export default ModalContainer