import React, {useCallback, useEffect, useState} from 'react'

import {BackgroundLayout, DefaultLayout, FormLayout} from '../../component/layout'
import {Link, Title, Dialog} from '../../component/view'
import {OverlayIndicator} from '../../component/loading'
import {registerBackground} from '../../assets/images'
import RegisterForm from './section/RegisterForm'
import validate from '../../utils/validate/registerValidate'
import {handleError} from '../../utils/middleware'
import {register, sendMessage} from '../../api/registerApi'
import {useDispatch, useSelector} from 'react-redux'
import {clearUser, setUserAfterRegister, setUserNavigatePage} from '../../redux/action/userAction'

function Register({navigation}) {
  // @ts-ignore
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
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

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  useEffect(() => {
    if (user.isAfterGoogleRegister) {
      setEmail(user.user.email)
      dispatch(clearUser())
    }
  }, [])

  const {isLoading: registerLoading, mutateAsync} = register()
  const {isLoading: sendLoading, mutateAsync: send} = sendMessage()

  const handleNavigateLogin = useCallback(() => navigation.push('Login'), [])

  const handleRegister = () => {
    const {errors, isValid} = validate({email, phone, password, confirmPassword})
    if (!isValid) {
      setEmailError(errors.email)
      setPhoneError(errors.phone)
      setPasswordError(errors.password)
      setConfirmPasswordError(errors.confirmPassword)
    } else {
      // @ts-ignore
      mutateAsync({email, phone, password})
        .then(() => {
          // @ts-ignore
          dispatch(setUserAfterRegister({phone, password}))
          // @ts-ignore
          send(phone)
            .then((res) => {
              // @ts-ignore
              dispatch(
                setUserNavigatePage({phone, otp_token: res?.data?.otp_token, navigate: 'Login'}),
              )
              navigation.navigate('VerifyOTP')
            })
            .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
        })
        .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
    }
  }

  return (
    <DefaultLayout statusBarStyle="light-content">
      {(registerLoading || sendLoading) && <OverlayIndicator />}
      <Dialog
        title={dialogTitle}
        content={dialogContent}
        modalVisible={modalVisible}
        handleClose={handleCloseDialog}
        setModalVisible={setModalVisible}
      />
      <BackgroundLayout background={registerBackground}>
        <FormLayout>
          <Title title="Register.title" caption="Register.caption" />
          <RegisterForm
            onRegister={handleRegister}
            email={email}
            changeEmail={changeEmail}
            emailError={emailError}
            changePhone={changePhone}
            phoneError={phoneError}
            changePassword={changePassword}
            passwordError={passwordError}
            changeConfirmPassword={changeConfirmPassword}
            confirmPasswordError={confirmPasswordError}
          />
          <Link
            caption="Register.link-caption"
            buttonName="Register.link-button"
            action={handleNavigateLogin}
          />
        </FormLayout>
      </BackgroundLayout>
    </DefaultLayout>
  )
}

export default Register
