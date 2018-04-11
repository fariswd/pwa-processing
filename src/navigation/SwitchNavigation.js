import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../container/Home'
import Profile from '../container/Profile'

export default function SwitchNavigation() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/profile' component={Profile}/>
    </Switch>
  )
}
