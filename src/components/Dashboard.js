import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './header';
import Categories from './categories';
import MenuItems from './MenuItems';
import Cart from './Cart';

class Dashboard extends React.Component {

  render(props) {
    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h2>Table #{this.props.table_number}</h2>
            </div>
            
            <Categories />
            <MenuItems />
            
          </div>
        </div>

        <div className="col-lg-4">
          <Cart />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    table_number: state.table_number
  };
};

export default connect(mapStateToProps)(Dashboard);