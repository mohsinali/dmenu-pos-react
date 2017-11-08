import React from 'react';
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