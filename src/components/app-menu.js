import { Component } from 'react';
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import './app-menu.scss';


export default class AppMenu extends Component{

  menuButton(){
    return (
      <MenuButton>
        <div className="menu-kebab">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </MenuButton>
    );

  }

  render(){
    return (
      <div className="app-menu">
        <Menu menuButton={this.menuButton()}>
          <MenuItem href={process.env.PUBLIC_URL}>Home</MenuItem>
          <MenuItem href={`${process.env.PUBLIC_URL}/about`}>Über</MenuItem>
        </Menu>
      </div>
    );
  }
}