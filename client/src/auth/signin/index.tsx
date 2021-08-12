import React, { FormEvent, useState } from 'react'
import ValidationMessage from '../../components/FormError'
import Button from '../../components/FormFields/Button'
import Input from '../../components/FormFields/Input'
import auth from '../auth-helper'
import { signin } from '../api.auth'
import './styles.scss'

import { useHistory } from 'react-router'

type IForm = {
  username: string
  password: string
  servername: string
  databasename: string
  redirectToReferrer: boolean
}
const initialFormState: IForm = {
  username: '',
  password: '',
  servername: '',
  databasename: '',
  redirectToReferrer: false,
}

const Signin: React.FC = (props) => {
  const [formData, setFormData] = useState(initialFormState)
  const [formError, setFormError] = useState<any | null>(null)

  const { username, password, servername, databasename } = formData
  // routes history
   let history = useHistory()
  // let location = useLocation()
  // users

  // Enable login
  const isEnableLogin = (): boolean => {
    return username !== '' && servername !== '' && password !== '' && databasename !== ''
  }
  //validate form
  const validateForm = () => {
    let error = {}
    if (username === '') {
      error = {
        field_id: 'username',
        message: 'Your User Name is required',
      }
      return error
    }
    if (password === '') {
      error = {
        field_id: 'password',
        message: 'Please Enter Password Field',
      }
      return error
    } else if (password.length <= 4) {
      error = {
        field_id: 'password',
        message: 'Password is too short!',
      }
    }
    return error
  }
  // form submission
  const onFormSubmit = (e: any) => {
    e.preventDefault()
    setFormError(null)
    // validate form
    let error = validateForm()
    if (error) {
      setFormError(error)
      console.log(error)
      setFormData({
        ...formData,
      })
    } else {
      setFormData({ ...formData })
    }

    console.log(formData)
    signin(formData).then((data) =>{
      auth.authenticate(data,() =>{
        setFormData({...formData,redirectToReferrer:true})
      })

    })
  }
  if(auth.isAuthenticated()){
    history.push('/home')
  }
  const onchange = (e: FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement
    setFormData({ ...formData, [target.name]: target.value })

  }



  return (
    <div className="signin">
      <form className="login-form" onSubmit={onFormSubmit}>
        <div className="login-form__title">Login</div>
        <div className="login-form__fields">
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            inputclass="login-form__field--input"
            title="Username"
            name="username"
            onChange={onchange}
          />
          {formError && formError.field_id === 'username' ? (
            <ValidationMessage>{formError.message}</ValidationMessage>
          ) : (
            ''
          )}
        </div>
        <div className="login-form__fields">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            inputclass="login-form__field--input"
            title="password"
            name="password"
            onChange={onchange}
          />
          {formError && formError.field_id === 'password' ? (
            <ValidationMessage>{formError.message}</ValidationMessage>
          ) : (
            ''
          )}
        </div>
        <div className="login-form__fields">
          <label htmlFor="severname">Server Name</label>
          <Input
            type="text"
            inputclass="login-form__field--input"
            title="Server Name"
            name="servername"
            onChange={onchange}
          />
          {formError && formError.field_id === 'servername' ? (
            <ValidationMessage>{formError.message}</ValidationMessage>
          ) : (
            ''
          )}
        </div>
        <div className="login-form__fields">
          <label htmlFor="databasename">Database Name</label>
          <Input
            type="text"
            inputclass="login-form__field--input"
            title="Database Name"
            name="databasename"
            onChange={onchange}
          />
          {formError && formError.field_id === 'databasename' ? (
            <ValidationMessage>{formError.message}</ValidationMessage>
          ) : (
            ''
          )}
        </div>
        <Button btnclass={`login-form__btn ${isEnableLogin() ? '' : 'disabled'}`} type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}

export default Signin
