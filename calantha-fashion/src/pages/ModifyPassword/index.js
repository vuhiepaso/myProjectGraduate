import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {recoveryPassword} from '../../api/modifyPasswordApi'
import {resetPasswordBackground} from '../../assets/images'
import {BackgroundLayout, DefaultLayout, FormLayout} from '../../component/layout'
import {OverlayIndicator} from '../../component/loading'
import {Title, Dialog} from '../../component/view'
import ModifyPasswordForm from './section/ModifyPasswordForm'
import validate from '../../utils/validate/resetPasswordValidate'
import {clearUser, setUserAfterRegister} from '../../redux/action/userAction'
import {handleError} from '../../utils/middleware'

function ModifyPassword({navigation}) {
  // @ts-ignore
  const userStore = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const changePassword = (e) => {
    setPassword(e)
    setPasswordError('')
  }

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e)
    setConfirmPasswordError('')
  }

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  const {isLoading, mutateAsync: recovery} = recoveryPassword()

  const handleResetPassword = () => {
    const {errors, isValid} = validate({password, confirmPassword})
    if (!isValid) {
      setPasswordError(errors.password)
      setConfirmPasswordError(errors.confirmPassword)
    } else {
      // @ts-ignore
      recovery({phone, password})
        .then(() => {
          dispatch(clearUser())
          dispatch(setUserAfterRegister({phone, password}))
          navigation.push('Login')
        })
        .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
    }
  }

  useEffect(() => {
    if (userStore.isNavigatePage) {
      setPhone(userStore.user.phone)
    } else {
      navigation.navigate('PersonalInformation')
    }
  }, [])
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
      <BackgroundLayout background={resetPasswordBackground}>
        <FormLayout>
          <Title title="ResetPassword.title" caption="ResetPassword.caption" />
          <ModifyPasswordForm
            passwordError={passwordError}
            confirmPasswordError={confirmPasswordError}
            changePassword={changePassword}
            changeConfirmPassword={changeConfirmPassword}
            onResetPassword={handleResetPassword}
            buttonName="ResetPassword.button-title"
          />
        </FormLayout>
      </BackgroundLayout>
    </DefaultLayout>
  )
}

export default ModifyPassword
