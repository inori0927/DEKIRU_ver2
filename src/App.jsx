import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page from './tmp';
import itasaka from './itasaka';
import gakiya from './gakiya';
import takahashi from './takahashi';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={page} />
          <Route exact path="/itasaka.jsx" component={itasaka} />
          <Route exact path="/gakiya.jsx" component={gakiya} />
          <Route exact path="/takahashi.jsx" component={takahashi} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;