import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import Modal from '../../../../components/modal/Modal';

import './FormHomeSection.css'

const FormHomeSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='form-home-section'>
      get in touch
      <div onClick={() => setOpen(true)}>open modal</div>
      <NavLink to="/corporate">
        <div>to collections btn</div>
      </NavLink>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Настройки"
        width="600px"
      ></Modal>
    </div>
  )
}

export default FormHomeSection
