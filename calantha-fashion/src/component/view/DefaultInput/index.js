import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {TextInput, View, Text, Image} from 'react-native'

import {isEmpty} from '../../../utils/validate'
import styles from './styles'

function DefaultInput({placeholder, error, onChange, icon, autoCapitalize = 'none', ...other}) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={{uri: icon}} style={styles.icon} />
        <TextInput
          {...other}
          style={styles.textInput}
          placeholder={t(placeholder)}
          onChangeText={(e) => onChange(e)}
          // @ts-ignore
          autoCapitalize={autoCapitalize}
        />
      </View>
      {!isEmpty(error) && <Text style={styles.helperText}>{t(error)}</Text>}
    </View>
  )
}

export default memo(DefaultInput)
