import React from 'react'
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { Layouts } from '../../layouts'
import { Shared } from '../../shared'
import { styles } from './styles'
import { THEME } from '../../theme'
import logoImg from '../../assets/logo-nlw-esports.png'
import { AdData } from '../../interfaces/AdData'

interface RouteParams {
  id: string
  title: string
  banner: string
}

export function Game() {
  const [duos, setDuos] = React.useState<AdData[]>([])

  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as RouteParams

  React.useEffect(() => {
    fetch(`http://172.31.175.225:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Layouts.Background>
      <SafeAreaView style={styles.container} >
        <View style={styles.header} >
          <TouchableOpacity onPress={handleGoBack} >
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.fakeIcon} />
        </View>

        <Image source={{ uri: game.banner }} style={styles.cover} resizeMode='cover' />

        <Shared.Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Shared.DuoCard data={item} onConnect={() => {}} />}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => <Text style={styles.emptyListText}>Não há anúncios publicados ainda.</Text>}
        />
      </SafeAreaView>
    </Layouts.Background>
  )
}
