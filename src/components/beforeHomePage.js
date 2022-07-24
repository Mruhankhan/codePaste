import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavigationBar from './navigationBar'
//import HomePageSignUp from './HomePageSignUp/HomePageSignUp.js'
export default function App() {
  return (
      <Router>
        <div>
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path='/HomePageSignUp'>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}
