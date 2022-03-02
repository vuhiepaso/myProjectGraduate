import React, {useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'

import {emailIcon, lockIcon, phoneIcon} from '../../../assets/images'
import {DefaultInput, PasswordInput, DefaultButton} from '../../../component/view'

function RegisterForm({onRegister}) {
  const {t} = useTranslation()

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const changeEmail = useCallback((e) => {
    setEmail(e)
    setEmailError('')
  }, [])

  const changePhone = useCallback((e) => {
    setPhone(e)
    setPhoneError('')
  }, [])

  const changePassword = useCallback((e) => {
    setPassword(e)
    setPasswordError('')
  }, [])

  const changeConfirmPassword = useCallback((e) => {
    setConfirmPassword(e)
    setConfirmPasswordError('')
  }, [])

  return (
    <>
      <DefaultInput
        icon={emailIcon}
        placeholder={t('Register.placeholder.email')}
        onChange={changeEmail}
        // autoFocus
        // autoComplete="email"
        // textContentType="emailAddress"
        error={emailError}
      />
      <DefaultInput
        icon={phoneIcon}
        placeholder={t('Register.placeholder.phone')}
        keyboardType="phone-pad"
        // autoComplete="tel"
        // textContentType="telephoneNumber"
        onChange={changePhone}
        error={phoneError}
      />
      <PasswordInput
        icon={lockIcon}
        placeholder={t('Register.placeholder.password')}
        onChange={changePassword}
        error={passwordError}
      />
      <PasswordInput
        icon={lockIcon}
        placeholder={t('Register.placeholder.confirm-password')}
        onChange={changeConfirmPassword}
        error={confirmPasswordError}
      />
      <DefaultButton
        buttonName="Register.button"
        onClick={() =>
          onRegister({
            email,
            phone,
            password,
            confirmPassword,
            setEmailError,
            setPhoneError,
            setPasswordError,
            setConfirmPasswordError,
          })
        }
      />
    </>
  )
}

export default RegisterForm
