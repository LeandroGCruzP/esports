import React from 'react'
import * as Rn from 'react-native'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'

import { Layouts } from './src/layouts'
import { Shared } from './src/shared'
import { Routes } from './src/routes'

import './src/services/notification'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  const getNotificationListener = React.useRef<Subscription>()
  const responseNotificationListener = React.useRef<Subscription>()

  React.useEffect(() => {
    getPushNotificationToken()
  }, [])

  React.useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('[NOTIFICATION]', notification)
    })

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(notification => {
      console.log('[RESPONSE]', notification)
    })

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  }, [])

  return (
    <Layouts.Background>
      <Rn.StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      { fontsLoaded ? <Routes /> : <Shared.Loading />}
    </Layouts.Background>
  )
}

