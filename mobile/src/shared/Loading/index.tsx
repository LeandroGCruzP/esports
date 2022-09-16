import * as Rn from 'react-native'

import { THEME } from '../../theme'
import { styles } from './styles'

export function Loading() {
  return (
    <Rn.View style={styles.container} >
      <Rn.ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </Rn.View>
  )
}
