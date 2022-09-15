import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Shared } from '../../shared'
import { Layouts } from '../../layouts'
import { GameData } from '../../interfaces/GameData'
import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'

export function Home() {
  const [games, setGames] = React.useState<GameData[]>([])

  const navigation = useNavigation()

  React.useEffect(() => {
    fetch('http://172.31.175.225:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  function handleOpenGame(props: GameData) {
    const { id, title, banner } = props

    navigation.navigate('game', { id, title, banner })
  }

  return (
    <Layouts.Background>
      <SafeAreaView style={styles.container} >
        <Image source={logoImg} style={styles.logo} />

        <Shared.Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...' />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Shared.GameCard data={item} onPress={() => handleOpenGame(item)} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Layouts.Background>
  )
}
