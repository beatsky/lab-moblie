import React from 'react';
import { MenuBar } from '../components/MenuBar/index';
import NavBar from '../components/NavBar/index'
import './index.scss';

export default (props: any) => {
  return (
    <div className="app">
      <NavBar/>
      { props.children }
      <footer className="footer">
        <MenuBar/>
      </footer>
    </div>
  );
}
