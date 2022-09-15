import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { THEME } from '../../theme'

export type GameCardData = {
  id: string
  name: string
  ads: string
  cover: ImageSourcePropType
}

interface GameCardProps extends TouchableOpacityProps {
  data: GameCardData
}

export function GameCard(props: GameCardProps) {
  const { data, ...rest } = props

  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} >
          <Text style={styles.name} >
            {data.name}
          </Text>

          <Text style={styles.ads} >
            {data.ads}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
