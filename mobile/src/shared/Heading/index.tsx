import { Text, View, ViewProps } from 'react-native'

import { styles } from './styles'

interface HeadingProps extends ViewProps {
  title: string
  subtitle: string
}

export function Heading(props: HeadingProps) {
  const { title, subtitle, ...rest } = props

  return (
    <View style={styles.container} {...rest} >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
