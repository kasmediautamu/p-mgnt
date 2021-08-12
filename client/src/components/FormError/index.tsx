import React from 'react'
import './styles.scss'

 type Props = {
     children: any
 }
function ValidationMessage( props:Props ) {
    const { children } = props
    return (
        <div className="form-validation__message">
            {children}
        </div>
    )
}
export default ValidationMessage
