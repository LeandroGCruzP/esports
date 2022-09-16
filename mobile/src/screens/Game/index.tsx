import React from 'react'
import * as Rn from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { Layouts } from '../../layouts'
import { Shared } from '../../shared'
import { styles } from './styles'
import { THEME } from '../../theme'
import logoImg from '../../assets/logo-nlw-esports.png'
import { AdData } from '../../interfaces/AdData'
import { api } from '../../services/api'

interface RouteParams {
  id: string
  title: string
  banner: string
}

export function Game() {
  const [duos, setDuos] = React.useState<AdData[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = React.useState('')

  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as RouteParams

  React.useEffect(() => {
    api.get(`/games/${game.id}/ads`)
      .then(response => setDuos(response.data))
  }, [])

  function handleGoBack() {
    navigation.goBack()
  }

  async function getDiscordUser(adsId: string) {
    api.get(`/ads/${adsId}/discord`)
      .then(response => setDiscordDuoSelected(response.data.discord))
  }

  return (
    <Layouts.Background>
      <SafeAreaView style={styles.container} >
        <Rn.View style={styles.header} >
          <Rn.TouchableOpacity onPress={handleGoBack} >
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </Rn.TouchableOpacity>

          <Rn.Image source={logoImg} style={styles.logo} />

          <Rn.View style={styles.fakeIcon} />
        </Rn.View>

        <Rn.Image source={{ uri: game.banner }} style={styles.cover} resizeMode='cover' />

        <Shared.Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />

        <Rn.FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Shared.DuoCard
              data={item}
              onConnect={() => getDiscordUser(item.id)} />
            )
          }
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => <Rn.Text style={styles.emptyListText}>Não há anúncios publicados ainda.</Rn.Text>}
        />

        <Shared.DuoMatch
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
          visible={discordDuoSelected.length > 0}
        />
      </SafeAreaView>
    </Layouts.Background>
  )
}
