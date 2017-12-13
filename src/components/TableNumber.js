import React from 'react';
import { connect } from 'react-redux';

class TableNumber extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      t_no: ''
    }
    this.onTableNoChange = this.onTableNoChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTableNoChange(e){
    const t_no = e.target.value;
    this.setState({t_no});
  }
  onSubmit(e){
    e.preventDefault();
    this.props.history.push('/dashboard?t_no=' + t_no);
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
                <input type="text" name='txtTableNumber' placeholder='Table Number' value={this.state.t_no} onChange={this.onTableNoChange} />
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