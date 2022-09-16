import * as Rn from 'react-native'
import { AdData } from '../../interfaces/AdData'

import { DuoInfo } from '../DuoInfo'
import { styles } from './styles'
import { THEME } from '../../theme'
import { Icon } from '../../assets/icons'

interface DuoCardProps {
  data: AdData
  onConnect: () => void
}

export function DuoCard(props: DuoCardProps) {
  const { data, onConnect } = props

  return (
    <Rn.View style={styles.container} >
      <DuoInfo label='Nome' value={data.name} />

      <DuoInfo label='Tempo de jogo' value={`${data.yearsPlaying} anos`} />

      <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo
        label='Chamada de áudio?'
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <Rn.TouchableOpacity style={styles.button} onPress={onConnect} >
        <Icon.GameController color={THEME.COLORS.TEXT} size={20} />

        <Rn.Text style={styles.buttonTitle} >Conectar</Rn.Text>
      </Rn.TouchableOpacity>
    </Rn.View>
  )
}
