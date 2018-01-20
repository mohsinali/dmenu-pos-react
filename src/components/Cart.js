import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem_Component';
import CartFooter_Component from './CartFooter_Component';

class Cart extends React.Component {
  getTotal = (cart) => {
    let total = 0;
    cart.map((item) => {
      total += item.quantity * item.price
    })
    return total;
  }
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
        <CartFooter_Component total={this.getTotal(this.props.cart)} />
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