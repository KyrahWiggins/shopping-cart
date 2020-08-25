import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Cart from './components/Cart'
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navigation/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
