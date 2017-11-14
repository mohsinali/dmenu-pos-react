import React from 'react';

class TableNumber extends React.Component {
  render() {
    return (
      <div className="row  border-bottom white-bg dashboard-header">
        <div className="col-sm-1">

        </div>
        <div className="col-sm-6">

          <div className="jumbotron">
            <form>
              <h1>
                <input type="text" name='txtTableNumber' placeholder='Table Number' />
              </h1>
            </form>
          </div>

        </div>
        <div className="col-sm-1">  </div>
      </div>

    )
  }
}

export default TableNumber;

