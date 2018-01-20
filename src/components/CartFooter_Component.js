import React from 'react';

const CartFooter = (props) => (
  <div className="ibox-content">
    <div className="row">
      <div className="col-xs-4">
        <h4>Total</h4>
        <p></p>
      </div>

      <div className="col-xs-4">
        <p></p>                  
      </div>
      <div className="col-xs-4">                  
        <h4>{props.total}</h4>
      </div>
    </div>
  </div>
);

export default CartFooter;