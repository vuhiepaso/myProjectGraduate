import React from 'react'

import { lockIcon } from '../../../assets/images'
import { DefaultButton, PasswordInput } from '../../../component/view'

function ResetPasswordForm({
  onResetPassword,
  changePassword,
  passwordError,
  changeConfirmPassword,
  confirmPasswordError,
  buttonName,
}) {
  return (
    <>
      <PasswordInput
        icon={lockIcon}
        placeholder="ResetPassword.placeholder.password"
        onChange={changePassword}
        // autoFocus
        error={passwordError}
      />
      <PasswordInput
        icon={lockIcon}
        placeholder="ResetPassword.placeholder.confirm-password"
        onChange={changeConfirmPassword}
        error={confirmPasswordError}
      />
      <DefaultButton buttonName={buttonName} onClick={onResetPassword} />
    </>
  )
}

export default ResetPasswordForm
