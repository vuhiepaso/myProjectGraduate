import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import {verifyOTP} from '../../api/verifyOTPApi'
import {passwordRecoveryBackground} from '../../assets/images'
import {BackgroundLayout, DefaultLayout, FormLayout} from '../../component/layout'
import {OverlayIndicator} from '../../component/loading'
import {Title, Dialog, VerifyOTPForm} from '../../component/view'
import {handleError} from '../../utils/middleware'

function VerifyOTP({navigation}) {
  // @ts-ignore
  const userStore = useSelector((state) => state.user)
  const [second, setSecond] = useState(120)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  const [code, setCode] = useState('')

  const {isLoading, mutateAsync: verify} = verifyOTP()

  useEffect(() => {
    const count = setInterval(
      () =>
        setSecond((second) => {
          if (second <= 1) clearInterval(count)
          return second - 1
        }),
      1000,
    )
    return () => clearInterval(count)
  }, [])

  const handleNavigateResetPassword = () => {
    if (second <= 0) {
      navigation.goBack()
    } else {
      // @ts-ignore
      verify({otp_token: userStore?.user?.otp_token, otp: code})
        .then(() => navigation.navigate(userStore?.user?.navigate))
        .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
    }
  }

  const handleSetCode = (e) => {
    setCode((code) => {
      switch (code.length) {
        case 0:
          if (e.length >= 1) {
            setValue1(e.slice(-1))
            return code + e.slice(-1)
          } else {
            return code.slice(0, -1)
          }
        case 1:
          if (e.length >= 2) {
            setValue2(e.slice(-1))
            ref2.current.focus()
            return code + e.slice(-1)
          } else {
            setValue1('')
            return code.slice(0, -1)
          }
        case 2:
          if (e.length >= 2) {
            setValue3(e.slice(-1))
            ref3.current.focus()
            return code + e.slice(-1)
          } else {
            setValue2('')
            ref1.current.focus()
            return code.slice(0, -1)
          }
        case 3:
          if (e.length >= 2) {
            setValue4(e.slice(-1))
            ref4.current.focus()
            return code + e.slice(-1)
          } else {
            setValue3('')
            ref2.current.focus()
            return code.slice(0, -1)
          }
        case 4:
          if (e.length >= 2) {
            setValue5(e.slice(-1))
            ref5.current.focus()
            return code + e.slice(-1)
          } else {
            setValue4('')
            ref3.current.focus()
            return code.slice(0, -1)
          }
        case 5:
          if (e.length >= 2) {
            setValue6(e.slice(-1))
            ref6.current.focus()
            return code + e.slice(-1)
          } else {
            setValue5('')
            ref4.current.focus()
            return code.slice(0, -1)
          }
        case 6:
          if (e.length < 2) {
            setValue6('')
            ref5.current.focus()
            return code.slice(0, -1)
          } else {
            return code
          }
        default:
          return code
      }
    })
  }

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  return (
    <DefaultLayout statusBarStyle="dark-content">
      <Dialog
        title={dialogTitle}
        content={dialogContent}
        modalVisible={modalVisible}
        handleClose={handleCloseDialog}
        setModalVisible={setModalVisible}
      />
      {isLoading && <OverlayIndicator />}
      <BackgroundLayout background={passwordRecoveryBackground}>
        <FormLayout>
          <Title
            title="VerifyOTP.title"
            caption="VerifyOTP.caption"
            extraCaption={userStore?.user?.phone || ''}
          />
          <VerifyOTPForm
            onSetCode={handleSetCode}
            ref1={ref1}
            ref2={ref2}
            ref3={ref3}
            ref4={ref4}
            ref5={ref5}
            ref6={ref6}
            value1={value1}
            value2={value2}
            value3={value3}
            value4={value4}
            value5={value5}
            value6={value6}
            second={second}
            onNavigateResetPassword={handleNavigateResetPassword}
          />
        </FormLayout>
      </BackgroundLayout>
    </DefaultLayout>
  )
}

export default VerifyOTP
