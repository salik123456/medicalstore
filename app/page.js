import React from 'react'
import '@/app/styles/home.scss'
import IconSec from './components/Home/IconSec'
import HeroSec from './components/Home/HeroSec'
import CommonSec from './components/Home/SpecialOffers'

const HomeWrapper = () => {
  return (
    <div className='home-wrapper '>
<IconSec/>
<HeroSec/>
<CommonSec/>
    </div>
  )
}

export default HomeWrapper