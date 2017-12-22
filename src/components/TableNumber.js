import React from 'react';
import { connect } from 'react-redux';

class TableNumber extends React.Component {
  
  state = {
    table_number: ''
  }

  onTableNoChange = (e) => {
    const table_number = e.target.value;
    this.setState({table_number});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({type: 'SET_TABLE_NUMBER', table_number: this.state.table_number});
    this.props.history.push('/dashboard');
  }

  render(props) {
    return (
      <div className="row  border-bottom white-bg dashboard-header">
        <div className="col-sm-1">

        </div>
        <div className="col-sm-6">
          <div className="jumbotron">          
            <form onSubmit={this.onSubmit}>
              <h1>
                <input type="text" name='txtTableNumber' placeholder='Table Number' value={this.state.table_number} onChange={this.onTableNoChange} />
              </h1>
            </form>
          </div>

        </div>
        <div className="col-sm-1">  </div>
      </div>

    )
  }  
}

export default connect()(TableNumber);