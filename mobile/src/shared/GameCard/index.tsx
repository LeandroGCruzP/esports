import * as Rn from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { GameData } from '../../interfaces/GameData'
import { THEME } from '../../theme'
import { styles } from './styles'

interface GameCardProps extends Rn.TouchableOpacityProps {
  data: GameData
}

export function GameCard(props: GameCardProps) {
  const { data, ...rest } = props

  return (
    <Rn.TouchableOpacity style={styles.container} {...rest} >
      <Rn.ImageBackground style={styles.cover} source={{ uri: data.banner }}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER} >
          <Rn.Text style={styles.name} >
            {data.title}
          </Rn.Text>

          <Rn.Text style={styles.ads} >
            {data._count.ads}
          </Rn.Text>
        </LinearGradient>
      </Rn.ImageBackground>
    </Rn.TouchableOpacity>
  )
}
