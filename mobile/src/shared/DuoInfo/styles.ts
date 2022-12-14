import * as Rn from 'react-native'
import { THEME } from '../../theme'

export const styles = Rn.StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16
  },
  label: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 4
  },
  value: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  }
})
