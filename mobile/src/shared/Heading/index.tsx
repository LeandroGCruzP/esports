import * as Rn from 'react-native'

import { styles } from './styles'

interface HeadingProps extends Rn.ViewProps {
  title: string
  subtitle: string
}

export function Heading(props: HeadingProps) {
  const { title, subtitle, ...rest } = props

  return (
    <Rn.View style={styles.container} {...rest} >
      <Rn.Text style={styles.title}>{title}</Rn.Text>
      <Rn.Text style={styles.subtitle}>{subtitle}</Rn.Text>
    </Rn.View>
  )
}
