import React, { memo } from 'react'

import { emailIcon, lockIcon, phoneIcon } from '../../../assets/images'
import { DefaultInput, PasswordInput, DefaultButton } from '../../../component/view'

function RegisterForm({
  onRegister,
  email,
  changeEmail,
  emailError,
  changePhone,
  phoneError,
  changePassword,
  passwordError,
  changeConfirmPassword,
  confirmPasswordError,
}) {
  return (
    <>
      <DefaultInput
        icon={emailIcon}
        placeholder="Register.placeholder.email"
        onChange={changeEmail}
        value={email}
        // autoFocus
        error={emailError}
      />
      <DefaultInput
        icon={phoneIcon}
        placeholder="Register.placeholder.phone"
        keyboardType="phone-pad"
        onChange={changePhone}
        error={phoneError}
      />
      <PasswordInput
        icon={lockIcon}
        placeholder="Register.placeholder.password"
        onChange={changePassword}
        error={passwordError}
      />
      <PasswordInput
        icon={lockIcon}
        placeholder="Register.placeholder.confirm-password"
        onChange={changeConfirmPassword}
        error={confirmPasswordError}
      />
      <DefaultButton buttonName="Register.button" onClick={onRegister} />
    </>
  )
}

export default memo(RegisterForm)
