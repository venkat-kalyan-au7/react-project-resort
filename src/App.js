import React, { Fragment } from "react"
import {Route,Switch} from "react-router-dom"

import HomePage from "./pages/Home"
import RoomsPage from "./pages/Rooms"
import SingleRoomPage from "./pages/SingleRoom"
import ErrorPage from "./pages/404"
import './App.css'
import Navbar from "./components/Navbar"


class App extends React.Component{
  render(){
    return( <Fragment>
              <Navbar/>
             <Switch>
              <Route exact={true} path="/" component={HomePage}/>
              <Route exact={true} path="/rooms" component={RoomsPage}/>
              <Route exact={true} path="/rooms/:slug" component={SingleRoomPage}/>
              <Route component={ErrorPage}/>
             </Switch>
            </Fragment>)
  }
}

export default App