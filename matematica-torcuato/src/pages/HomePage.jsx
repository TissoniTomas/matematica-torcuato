import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import Bienvenida from '../components/Bienvenida/Bienvenida'
import PreguntasFrec from '../components/PreguntasFrec/PreguntasFrec'
import Reseñas from '../components/Reseñas/Reseñas'


const HomePage = () => {
  return (
    <div>
      <HomeBanner/>
      <Bienvenida/>
      <PreguntasFrec/>
      <Reseñas/>
        
    </div>
  )
}

export default HomePage

//  className="bg-[url('https://getwallpapers.com/wallpaper/full/8/a/a/6122.jpg')] bg-auto bg-center"