import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Categories from './categories';
import MenuItems from './MenuItems';
import Cart from './Cart';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div id="left-pane">
          <Link to='/'>Home</Link>
          <p>Left Pane</p>
          <Header />
          <Categories />
          <MenuItems />
        </div>

        <div id='right-pane'>
          <p>Right Pane</p>
          <Cart />

        </div>
      </div>
    );
  }
}

export default Dashboard;