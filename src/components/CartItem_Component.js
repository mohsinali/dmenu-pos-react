import React from 'react';

const CartItem = ({name, price, quantity, product_id}) => (
  <div className="ibox-content">
    <div className="row">
      <div className="col-xs-4">
        <h4>{name}</h4>
        <p>
          Without cheese
          With Garlic
        </p>
        <h4>Notes +</h4>
      </div>

      <div className="col-xs-4">
        <p>x{quantity}</p>                  
      </div>
      <div className="col-xs-4">                  
        <p>{price * quantity}</p>
      </div>
    </div>
  </div>
);

export default CartItem;