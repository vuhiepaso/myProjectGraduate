import React from 'react'

import {phoneIcon} from '../../../assets/images'
import {DefaultButton, DefaultInput} from '../../../component/view'

function PasswordRecoveryForm({onVerify, changePhone, phoneError, buttonName}) {
  return (
    <>
      <DefaultInput
        icon={phoneIcon}
        placeholder="Login.placeholder.phone"
        onChange={changePhone}
        keyboardType="phone-pad"
        // autoFocus
        error={phoneError}
      />
      <DefaultButton buttonName={buttonName} onClick={onVerify} />
    </>
  )
}

export default PasswordRecoveryForm
