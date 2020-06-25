import React, { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

const ModalProvider = ({ children }) => {
  return (
    <React.Fragment>
      {createPortal(<div id='suprim-ui-modal-wrapper' />, document.body)}
      {children}
    </React.Fragment>
  )
}

export const useModal = (options) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [hasToggledBefore, setHasToggledBefore] = useState(false)
  const isModalVisibleRef = useRef(isModalVisible)
  isModalVisibleRef.current = isModalVisible

  const togglemodal = useCallback(() => {
    let timeoutHack
    timeoutHack = setTimeout(() => {
      setIsModalVisible(!isModalVisibleRef.current)
      clearTimeout(timeoutHack)
    }, 10)
    setIsShown(!isShown)
    setHasToggledBefore(!hasToggledBefore)
  }, [isShown, hasToggledBefore])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode !== 27 || (options && options.keyboardClose === false))
        return
      togglemodal()
      if (options && options.onEscapeKeyDown) {
        options.onEscapeKeyDown()
      }
    },
    [togglemodal, options]
  )

  useEffect(() => {
    if (isShown) {
      if (options && options.onShow) {
        options.onShow()
      }
      document.addEventListener('keydown', handleKeyDown)
      if (!isShown && hasToggledBefore) {
        if (options && options.onHide) {
          options.onHide()
        }
      }
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isShown, hasToggledBefore, handleKeyDown, options])

  return [{ isModalVisible, isShown, togglemodal, options }, togglemodal]
}
export default ModalProvider
