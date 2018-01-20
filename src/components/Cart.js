import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem_Component';

class Cart extends React.Component {
  render() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <span className="label label-warning pull-right">Data has changed</span>
          <h5>Your Cart</h5>
        </div>
        {
          this.props.cart.map((item) => (
            <CartItem key={item.product_id} {...item}></CartItem>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart);