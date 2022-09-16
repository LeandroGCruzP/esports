import React from 'react'
import * as Rn from 'react-native'
import * as Clipboard from 'expo-clipboard'

import { Icon } from '../../assets/icons'
import { THEME } from '../../theme'
import { Heading } from '../Heading'
import { styles } from './styles'

interface DuoMatchProps extends Rn.ModalProps {
  discord: string
  onClose: () => void
}

export function DuoMatch(props: DuoMatchProps) {
  const { discord, onClose, ...rest } = props

  const [isCopping, setIsCopping] = React.useState(false)

  async function handleCopyDiscordToClipboard() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)

    Rn.Alert.alert('Discord copiado!', 'Nome de usuário copiado.')
    setIsCopping(false)
  }

  return (
    <Rn.Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}
    >
      <Rn.View style={styles.container} >
        <Rn.View style={styles.content} >
          <Rn.TouchableOpacity style={styles.closeIcon} onPress={onClose} >
            <Icon.Close color={THEME.COLORS.CAPTION_500} size={20} />
          </Rn.TouchableOpacity>

          <Icon.CheckCircle color={THEME.COLORS.SUCCESS} size={64} weight='bold' />

          <Heading
            title="Let's play"
            subtitle='Agora é só começar a jogar!'
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Rn.Text style={styles.label} >Adicione seu discord</Rn.Text>

          <Rn.TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopping}
          >
            <Rn.Text style={styles.discord}>
              {isCopping
                ? <Rn.ActivityIndicator color={THEME.COLORS.PRIMARY} />
                : discord
              }
            </Rn.Text>
          </Rn.TouchableOpacity>
        </Rn.View>
      </Rn.View>
    </Rn.Modal>
  )
}
