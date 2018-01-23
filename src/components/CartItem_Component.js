import React from 'react';

const CartItem = ({onPlusClick, onMinusClick, onDeleteClick, name, price, quantity, product_id}) => (
  <div className="ibox-content">
    <div className="row">
      <div className="col-xs-4">
        <h4>{name}</h4>
        <p>
          Without cheese
          With Garlic
        </p>
        <h4>Notes <i className="fa fa-plus"></i></h4>
        <i className="fa fa-trash" onClick={() => {
          onDeleteClick(product_id)
        }}></i>
      </div>

      <div className="col-xs-4">
        <p>        
        <span className="label label-success" onClick={() => {
          onPlusClick(product_id)
        }}>+</span>&nbsp;
          x{quantity}&nbsp;
          <span className="label label-success" onClick={() => {
            onMinusClick(product_id)
          }}>-</span>
        </p>
      </div>
      <div className="col-xs-4">                  
        <p>{price * quantity}</p>
      </div>
    </div>
  </div>
);

export default CartItem;