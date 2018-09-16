import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SampleFormPage from './pages/SampleFormPage';
import MapToolPage from './pages/MapToolPage';
import ApiTestPage from './pages/ApiTestPage';
import SurveyListPage from './pages/SurveyListPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/sample_form" component={SampleFormPage}/>
          <Route path="/map_tool" component={MapToolPage}/>
          <Route path="/api_test" component={ApiTestPage}/>
          <Route path="/surveys" component={SurveyListPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
