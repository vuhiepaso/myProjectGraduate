import React, {useCallback} from 'react'
import {useMutation} from 'react-query'
import {connect} from 'react-redux'

import axios from '../../config/axios'
import {BackgroundLayout, DefaultLayout, FormLayout} from '../../component/layout'
import {Link, Title} from '../../component/view'
import {OverlayIndicator} from '../../component/loading'
import {registerBackground} from '../../assets/images'
import RegisterForm from './section/RegisterForm'
import validateRegister from '../../utils/validate/registerValidate'
import {handleError, handleSuccess} from '../../utils/middleware'

function Register(props) {
  const {navigation} = props

  const handleNavigateLogin = () => navigation.navigate('login')

  const handleRegister = useCallback(
    ({
      email,
      phone,
      password,
      confirmPassword,
      setEmailError,
      setPhoneError,
      setPasswordError,
      setConfirmPasswordError,
    }) => {
      const {errors, isValid} = validateRegister({
        email,
        phone,
        password,
        confirmPassword,
      })
      if (!isValid) {
        setEmailError(errors.email)
        setPhoneError(errors.phone)
        setPasswordError(errors.password)
        setConfirmPasswordError(errors.confirmPassword)
      } else {
        // @ts-ignore
        mutateAsync({email, phone, password})
      }
    },
    [],
  )

  const {isLoading, mutateAsync} = useMutation(
    'register',
    (values) => axios.post('/user/register', values),
    {
      onError: (e) => handleError(e),
      onSuccess: (res) => handleSuccess(res),
    },
  )

  return (
    <DefaultLayout statusBarStyle="light-content">
      {isLoading && <OverlayIndicator />}
      <BackgroundLayout background={registerBackground}>
        <FormLayout>
          <Title title="Register.title" caption="Register.caption" />
          <RegisterForm onRegister={handleRegister} />
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

const mapStateToProps = (state) => ({
  data: state.CreateUser,
})

export default connect(mapStateToProps)(Register)
