import React, { ReactNode, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler'
import './styles.scss';
type IProps = {
  customclass:any
  children:ReactNode
}
const Tooltip =(props:IProps)=>{
  const {customclass,children} =props
  const [hide,setShow] = useState('')

  return (
    <OutsideClickHandler onOutsideClick={() => setShow('visible')}>
    <div className={`up-arrow ${customclass} ${hide==='visible' ? 'showToolTip' :''}`}>
      {children}
    </div>
    </OutsideClickHandler>
  )
}

export default Tooltip;
