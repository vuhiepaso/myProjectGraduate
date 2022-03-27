import React, {memo} from 'react'
import {View, Text} from 'react-native'
import {DefaultButton} from '..'
import VerifyBox from './VerifyBox'
import styles from './styles'
import {useTranslation} from 'react-i18next'

function VerifyOTPForm({
  second,
  onNavigateResetPassword,
  onSetCode,
  ref1,
  ref2,
  ref3,
  ref4,
  ref5,
  ref6,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
}) {
  const {t} = useTranslation()
  return (
    <>
      <View style={styles.formContainer}>
        <VerifyBox autoFocus ref={ref1} value={value1} setCode={onSetCode} />
        <VerifyBox ref={ref2} value={value2} setCode={onSetCode} />
        <VerifyBox ref={ref3} value={value3} setCode={onSetCode} />
        <VerifyBox ref={ref4} value={value4} setCode={onSetCode} />
        <VerifyBox ref={ref5} value={value5} setCode={onSetCode} />
        <VerifyBox ref={ref6} value={value6} setCode={onSetCode} />
      </View>
      <Text style={styles.caption}>
        {t('VerifyOTP.expire-front')} <Text style={styles.second}>{second}</Text>{' '}
        {t('VerifyOTP.expire-back')}
      </Text>
      <DefaultButton buttonName="VerifyOTP.button-title" onClick={onNavigateResetPassword} />
    </>
  )
}

export default memo(VerifyOTPForm)
