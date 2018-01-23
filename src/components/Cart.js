import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem_Component';
import CartFooter_Component from './CartFooter_Component';
import { addCartItem, removeCartItem, deleteCartItem } from '../actions/Cart_Actions';

class Cart extends React.Component {
  
  getTotal = (cart) => {
    let total = 0;
    cart.map((item) => {
      total += item.quantity * item.price
    })
    return total;
  }

  handlePlus = (product_id) => {    
    let product = this.props.products.find((p) => {
      if(p.id === product_id){
        return p;
      }
    })
    this.props.dispatch(addCartItem(product));
  }

  handleMinus = (product_id) => {
    this.props.dispatch(removeCartItem(product_id));
  }

  handleDelete = (product_id) => {
    this.props.dispatch(deleteCartItem(product_id));
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
            <CartItem 
              key={item.product_id} 
              onPlusClick={(product_id) => {
                this.handlePlus(product_id);
              }}
              onMinusClick={(product_id) => {
                this.handleMinus(product_id);
              }}
              onDeleteClick={(product_id) => {
                this.handleDelete(product_id);
              }}
              {...item}
              ></CartItem>
          ))
        }
        <CartFooter_Component total={this.getTotal(this.props.cart)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  }
}

export default connect(mapStateToProps)(Cart);