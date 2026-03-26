import React from 'react'
import Headers from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testiomnials from '../components/Testiomnials'
import Upload from '../components/Upload'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Headers />
      <Steps />
      <BgSlider />
      <Testiomnials />
      <Upload />
    </div>
  )
}

export default Home
