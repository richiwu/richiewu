import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../features/home/HomePage'
import AboutPage from '../features/about/AboutPage'
import NavBar from '../features/nav/NavBar'
import LifePage from '../features/life/LifePage'
import WorkPage from '../features/work/WorkPage'
import FooterComponent from '../features/footer/FooterComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
          <Route exact path='/' component={HomePage} />
      </Switch>
      <Route
        path="/(.+)"
        render ={() => (
          <div>
            <div className="body_content">
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path='/about' component={AboutPage} />
                  <Route path='/life' component={LifePage} />
                  <Route path='/work' component={WorkPage} />
                </Switch>
              </Container>
            </div>
            <FooterComponent />
          </div>
        )}
      />
      </div>
    );
  }
}

export default App;
