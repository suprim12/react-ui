import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import {
  ModalStyle,
  ModalOverlayStyle,
  ModalContentStyle,
  ModalFooterStyle
} from './Modal.Style'
import { useClickAway, useLockBodyScroll } from '../hooks/'

const Modal = ({ isModalVisible, togglemodal, children }) => {
  const ref = useRef(null)
  useLockBodyScroll(isModalVisible)
  useClickAway(ref, () => togglemodal())
  return isModalVisible
    ? createPortal(
        <ModalStyle className='suprim-ui-modal'>
          <ModalOverlayStyle className='suprim-ui-modal-overlay' />
          <div className='modaltest' ref={ref}>
            {children}
          </div>
        </ModalStyle>,
        document.getElementById('suprim-ui-modal-wrapper')
      )
    : null
}

const ModalContent = ({ children }) => {
  return (
    <ModalContentStyle className='suprim-ui-modal-content'>
      {children}
    </ModalContentStyle>
  )
}

const ModalFooter = ({ children }) => {
  return (
    <ModalFooterStyle>
      <div className='suprim-ui-modal-footer'>{children}</div>
      <div className='suprim-ui-modal-footer-spacer' />
    </ModalFooterStyle>
  )
}
Modal.Content = ModalContent
Modal.Footer = ModalFooter
export default Modal
