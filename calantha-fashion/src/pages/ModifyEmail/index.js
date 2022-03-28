import React, {useCallback, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {recoveryEmail} from '../../api/modifyEmailApi'
import {passwordRecoveryBackground} from '../../assets/images'
import {BackgroundLayout, DefaultLayout, FormLayout} from '../../component/layout'
import validate from '../../utils/validate/modifyEmailValidate'
import {OverlayIndicator} from '../../component/loading'
import {Title, Dialog} from '../../component/view'
import {clearUser} from '../../redux/action/userAction'
import {handleError} from '../../utils/middleware'
import ModifyEmailForm from './section/ModifyEmailForm'

function ModifyEmail({navigation}) {
  const dispatch = useDispatch()
  // @ts-ignore
  const userStore = useSelector((state) => state.user)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const changeEmail = (e) => {
    setEmail(e)
    setEmailError('')
  }

  const {isLoading, mutateAsync: recovery} = recoveryEmail()

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  const handleChangeEmail = () => {
    const {errors, isValid} = validate({email})
    if (!isValid) {
      setEmailError(errors.email)
    } else {
      // @ts-ignore
      recovery({phone, password})
        .then(() => {
          dispatch(clearUser())
          navigation.push('PersonalInformation')
        })
        .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
    }
  }

  return (
    <DefaultLayout statusBarStyle="dark-content">
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
          <Title title="ModifyEmail.title" caption="ModifyEmail.caption" />
          <ModifyEmailForm
            oldEmail={userStore?.user?.email || ''}
            changeEmail={changeEmail}
            emailError={emailError}
            onModifyEmail={handleChangeEmail}
          />
        </FormLayout>
      </BackgroundLayout>
    </DefaultLayout>
  )
}

export default ModifyEmail
