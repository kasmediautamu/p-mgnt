import React, { ReactNode } from 'react'

interface IProps {
  type: any
  btnclass: string
  children: ReactNode
}

const Button: React.FC<IProps> = (props) => {
  const { type, btnclass, children } = props
  return (
    <button type={type} className={btnclass}>
      {children}
    </button>
  )
}
/**
 * button takes in an element e.g img or array e.g string
 */

export default Button
