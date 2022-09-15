import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { GameData } from '../../interfaces/GameData'
import { THEME } from '../../theme'
import { styles } from './styles'

interface GameCardProps extends TouchableOpacityProps {
  data: GameData
}

export function GameCard(props: GameCardProps) {
  const { data, ...rest } = props

  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <ImageBackground style={styles.cover} source={{ uri: data.banner }}>
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER} >
          <Text style={styles.name} >
            {data.title}
          </Text>

          <Text style={styles.ads} >
            {data._count.ads}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
