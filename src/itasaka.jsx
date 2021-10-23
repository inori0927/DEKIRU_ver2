
import logo from './logo.svg';

import React from 'react';
import './assets/styles/style.css'
//import { categoryList } from './componets';
//import { category } from './componets';
import { Grid } from '@material-ui/core';
import  Header  from './componets/Heder';
//import Content from './componets/Content';
// import Content from './components/Content';
//import { KEYS, setItem, getItem, removeItem } from "./LocalStorage";
//import { Link } from 'react-router-dom';

export default class itasaka extends React.Component {
  //初期化メソッド
  constructor(props) {
    super(props);
    state: {
      myData: {} 
    }
  }
  render() {
    return (
      <div>
        <Grid container direction="column">
          <Header />
          <div style={{ padding: 30 }}>
            <Content />
          </div>
        </Grid>
      </div>
    );
  }
}
