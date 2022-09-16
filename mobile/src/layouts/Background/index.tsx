import React from 'react'
import * as Rn from 'react-native'

import { styles } from './styles'
import bgImg from '../../assets/background-galaxy.png'

interface BackgroundProps {
  children: React.ReactNode
}

export function Background(props: BackgroundProps) {
  const { children } = props

  return (
    <Rn.ImageBackground
      source={bgImg}
      defaultSource={bgImg}
      style={styles.container}
    >
      {children}
    </Rn.ImageBackground>
  )
}
