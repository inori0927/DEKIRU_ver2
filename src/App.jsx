import logo from './logo.svg';

import React from 'react';
import './assets/styles/style.css'
import { categoryList } from './componets';
import { category } from './componets';
import { Grid } from '@material-ui/core';
import Header from './componets/Heder';
import Content from './componets/Content';
import Box from '@mui/material/Box';
import TopBar from './componets/TopBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page from './tmp';
import gakiya from './gakiya';
import takahashi from './takahashi';

export default class App extends React.Component {
  //初期化メソッド
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Grid container direction="column">
        <Header />
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={page} />
          <Route exact path="/componets/TopBar.jsx" component={TopBar} />
          <Route exact path="/gakiya.jsx" component={gakiya} />
          <Route exact path="/takahashi.jsx" component={takahashi} />
        </Switch>
      </BrowserRouter>
        
      </Grid>
      
    );
  }
}
 