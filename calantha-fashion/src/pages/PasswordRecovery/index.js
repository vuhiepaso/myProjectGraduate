import React, {useCallback, useState} from 'react'

import {OverlayIndicator} from '../../component/loading'
import {passwordRecoveryBackground} from '../../assets/images'
import {BackgroundLayout, DefaultLayout, FormLayout} from '../../component/layout'
import {Title, Dialog} from '../../component/view'
import {sendMessage} from '../../api/passwordRecoveryApi'
import PasswordRecoveryForm from './section/PasswordRecoveryForm'
import validate from '../../utils/validate/passwordRecoveryValidate'
import {handleError} from '../../utils/middleware'
import {useDispatch} from 'react-redux'
import {setUserNavigatePage} from '../../redux/action/userAction'

function PasswordRecovery({navigation}) {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const changePhone = (e) => {
    setPhone(e)
    setPhoneError('')
  }

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  const {isLoading, mutateAsync: send} = sendMessage()

  const handleVerify = () => {
    const {errors, isValid} = validate({phone})
    if (!isValid) {
      setPhoneError(errors.phone)
    } else {
      // @ts-ignore
      send(phone)
        .then((res) => {
          dispatch(
            // @ts-ignore
            setUserNavigatePage({
              phone,
              otp_token: res?.data?.otp_token,
              navigate: 'ResetPassword',
            }),
          )
          navigation.navigate('VerifyOTP')
        })
        .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
    }
  }

  return (
    <DefaultLayout statusBarStyle="light-content">
      {isLoading && <OverlayIndicator />}
      <Dialog
        title={dialogTitle}
        content={dialogContent}
        modalVisible={modalVisible}
        handleClose={handleCloseDialog}
        setModalVisible={setModalVisible}
      />
      <BackgroundLayout background={passwordRecoveryBackground}>
        <FormLayout>
          <Title title="PasswordRecovery.title" caption="PasswordRecovery.caption" />
          <PasswordRecoveryForm
            phoneError={phoneError}
            changePhone={changePhone}
            onVerify={handleVerify}
            buttonName="PasswordRecovery.button-title"
          />
        </FormLayout>
      </BackgroundLayout>
    </DefaultLayout>
  )
}

export default PasswordRecovery
