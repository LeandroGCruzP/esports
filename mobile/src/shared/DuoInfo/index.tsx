import * as Rn from 'react-native'

import { THEME } from '../../theme'
import { styles } from './styles'

interface DuoInfoProps {
  label: string
  value: string
  colorValue?: Rn.ColorValue
}

export function DuoInfo(props: DuoInfoProps) {
  const { label, value, colorValue = THEME.COLORS.TEXT } = props

  return (
    <Rn.View style={styles.container} >
      <Rn.Text style={styles.label}>{label}</Rn.Text>
      <Rn.Text
        style={[styles.value, { color: colorValue }]}
        numberOfLines={1}
      >
        {value}
      </Rn.Text>
    </Rn.View>
  )
}
