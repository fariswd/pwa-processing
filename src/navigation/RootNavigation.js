import React from 'react'
import { Route } from 'react-router-dom'

import SwitchNavigation from '../navigation/SwitchNavigation'
import TheNavBar from '../component/TheNavBar'

export default function RootNavigation () {
  return (
    <div>
      <Route path='/' component={TheNavBar}/>
      <SwitchNavigation />
    </div>
  )
}
