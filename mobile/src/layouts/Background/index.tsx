import React from 'react'
import { ImageBackground } from 'react-native'

import { styles } from './styles'
import bgImg from '../../assets/background-galaxy.png'

interface BackgroundProps {
  children: React.ReactNode
}

export function Background(props: BackgroundProps) {
  const { children } = props

  return (
    <ImageBackground
      source={bgImg}
      defaultSource={bgImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  )
}
