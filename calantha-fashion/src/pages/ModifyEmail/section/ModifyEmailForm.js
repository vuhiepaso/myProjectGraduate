import React from 'react'

import { emailIcon } from '../../../assets/images'
import { DefaultButton, DefaultInput } from '../../../component/view'

function ModifyEmailForm({ onModifyEmail, oldEmail, changeEmail, emailError }) {
  return (
    <>
      <DefaultInput
        icon={emailIcon}
        placeholder="ModifyEmail.placeholder.old-email"
        onChange={() => {}}
        error=""
        value={oldEmail}
        editable={false}
      />
      <DefaultInput
        icon={emailIcon}
        placeholder="ModifyEmail.placeholder.new-email"
        onChange={changeEmail}
        error={emailError}
      />
      <DefaultButton buttonName={'ModifyEmail.button-title'} onClick={onModifyEmail} />
    </>
  )
}

export default ModifyEmailForm
