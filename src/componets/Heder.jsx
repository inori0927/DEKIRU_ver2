import React, {useState} from 'react';
import { AppBar, SvgIcon, Toolbar } from "@material-ui/core";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link  as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = (props) => {
  function OnClickButton(){
    props.setValue("Mypage")
  }
  return (
    <AppBar position="static" style={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <img src="https://classmethod.jp/wp-content/themes/classmethod/img/common/logo_classmethod.svg" alt="クラスメソッド株式会社" 
          onClick={() => props.setValue("")}></img>
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <NotificationsIcon />
          <Button onClick={() => OnClickButton()}><PersonIcon /></Button>
          <SettingsIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;