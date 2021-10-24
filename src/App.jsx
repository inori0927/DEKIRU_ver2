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

//import Content from './components/Content';
//import { KEYS, setItem, getItem, removeItem } from "./LocalStorage";

export default class App extends React.Component {
  //初期化メソッド
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Grid container direction="column">
        <Header />
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TopBar />
        </Box>
      </Grid>
    );
  }
}
 