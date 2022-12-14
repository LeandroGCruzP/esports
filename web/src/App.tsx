import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Shared } from './shared'
import { GameData } from './interfaces/GameData'
import './styles/main.css'
import logoImg from './assets/logo.svg'
import { api } from './services/api'

export function App() {
  const [games, setGames] = React.useState<GameData[]>([])

  React.useEffect(() => {
    api.get('/games')
      .then(response => setGames(response.data))
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt='' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-duo-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games?.map(game => (
          <Shared.GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.banner}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <Shared.CreateAdBanner />
        <Shared.ModalCreateAd />
      </Dialog.Root>
    </div>
  )
}
