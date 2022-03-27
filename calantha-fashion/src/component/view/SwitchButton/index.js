import React, { memo } from 'react'
import { View, Text } from 'react-native'
import { Switch } from 'react-native-switch'
import { useTranslation } from 'react-i18next'

import { switchColor } from '../../../assets/styles'
import styles from './styles'

function SwitchButton({ label, switchEnabled, setSwitchEnabled }) {
  const { t } = useTranslation()

  return (
    <View style={styles.switchView}>
      <Switch
        value={switchEnabled}
        onValueChange={(val) => setSwitchEnabled(val)}
        circleSize={15}
        barHeight={15}
        renderActiveText={false}
        renderInActiveText={false}
        circleBorderWidth={0}
        backgroundActive={switchColor.backgroundActive}
        backgroundInactive={switchColor.backgroundInactive}
        circleActiveColor={switchColor.circleActiveColor}
        circleInActiveColor={switchColor.circleInActiveColor}
        switchLeftPx={2}
        switchRightPx={2}
        switchWidthMultiplier={2}
        switchBorderRadius={30}
      />
      <Text style={styles.switchLabel}>{t(label)}</Text>
    </View>
  )
}

export default memo(SwitchButton)
