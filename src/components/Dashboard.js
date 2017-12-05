import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';
import Categories from './categories';
import MenuItems from './MenuItems';
import Cart from './Cart';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h2>Table #14</h2>
            </div>
            
            <Categories />
            
          </div>
        </div>

        <div className="col-lg-4">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <span className="label label-warning pull-right">Data has changed</span>
              <h5>User activity</h5>
            </div>
            <div className="ibox-content">
              <div className="row">
                <div className="col-xs-4">
                  <small className="stats-label">Pages / Visit</small>
                  <h4>236 321.80</h4>
                </div>

                <div className="col-xs-4">
                  <small className="stats-label">% New Visits</small>
                  <h4>46.11%</h4>
                </div>
                <div className="col-xs-4">
                  <small className="stats-label">Last week</small>
                  <h4>432.021</h4>
                </div>
              </div>
            </div>
            <div className="ibox-content">
              <div className="row">
                <div className="col-xs-4">
                  <small className="stats-label">Pages / Visit</small>
                  <h4>643 321.10</h4>
                </div>

                <div className="col-xs-4">
                  <small className="stats-label">% New Visits</small>
                  <h4>92.43%</h4>
                </div>
                <div className="col-xs-4">
                  <small className="stats-label">Last week</small>
                  <h4>564.554</h4>
                </div>
              </div>
            </div>
            <div className="ibox-content">
              <div className="row">
                <div className="col-xs-4">
                  <small className="stats-label">Pages / Visit</small>
                  <h4>436 547.20</h4>
                </div>

                <div className="col-xs-4">
                  <small className="stats-label">% New Visits</small>
                  <h4>150.23%</h4>
                </div>
                <div className="col-xs-4">
                  <small className="stats-label">Last week</small>
                  <h4>124.990</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;