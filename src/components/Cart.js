import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem_Component';
import CartFooter_Component from './CartFooter_Component';
import { addCartItem } from '../actions/Cart_Actions';

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

  handleMinus = () => {
    console.log("Minus");
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
            <CartItem key={item.product_id} {...item} onPlusClick={(product_id) => {
              this.handlePlus(product_id);
            }}></CartItem>
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