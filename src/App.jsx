import logo from './logo.svg';

import React from 'react';
import './assets/styles/style.css'
import { categoryList } from './componets';
import { category } from './componets';
import { Grid } from '@material-ui/core';
import Header from './componets/Heder';
import Content from './componets/QUES/Content';
import Box from '@mui/material/Box';
import TopBar from './componets/TopBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import page from './tmp';
import gakiya from './gakiya';
import takahashi from './takahashi';
import Copyright from './componets/Copyright';
import login from './componets/login'
import SignUp from './componets/SignUp';
import Basic from './componets/QUES/Basic';
import BasicDetail from './componets/USERS/BasicDetail';
import Confirm from './componets/QUES/Confirm';
import QuestionList from './componets/QuestionList';
import Mypage from './componets/USERS/Mypage';
import QuestionPage from './componets/QUES/QuestionPage';

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
          <Route exact path="/" component={login} />
          <Route exact path="/componets/SignUp" component={SignUp} />
          <Route exact path="/componets/TopBar" component={TopBar} />
          <Route exact path={"/componets/TopBar/QuettionPage"} component={QuestionPage} />
          <Route exact path={"/componets/TopBar/Question"} component={Basic} />
          <Route exact path={"/componets/TopBar/QuestionList"} component={QuestionList} />
          <Route exact path={"/componets/TopBar/Mypage"} component={Mypage} />
          <Route exact path={"/componets/TopBar/Question/Detail"} component={BasicDetail} />
          <Route exact path={"/componets/TopBar/Question/Detail/Confirm"} component={Confirm} />
        </Switch>
      </BrowserRouter>
      <Copyright sx={{ mt: 5 }} />
      </Grid>
      
    );
  }
}
 