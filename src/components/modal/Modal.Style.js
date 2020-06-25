import styled from 'styled-components'

export const ModalStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  overflow: auto;
`

export const ModalOverlayStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  background-color: black;
  pointer-events: none;
  z-index: 1000;
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;
`

export const ModalContentStyle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  z-index: 1001;
  outline: none;
  max-width: 85vw;
  width: 26rem;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px;
  opacity: 1;
  transform: translate3d(0px, -40px, 0px);
  overflow: hidden;
  border-radius: 5px;
  padding: 16pt;
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &.active {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
`

export const ModalFooterStyle = styled.div`
  .suprim-ui-modal-footer {
    display: flex;
    width: 100%;
    height: 3.625rem;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    border-top: 1px solid rgb(234, 234, 234);
  }

  .suprim-ui-modal-footer-spacer {
    height: 3.625rem;
  }
`
