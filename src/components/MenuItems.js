import React from 'react';
import { connect } from 'react-redux';
import { productsByCategory } from '../selectors/Products_Selector';
import ProductItem from './ProductItem_Component';
import { addCartItem } from '../actions/Cart_Actions';

class MenuItems extends React.Component {  
  render() {    
    return (
      <div>
        <div>
          <div className="ibox-content">
            <div className="row">
              {                
                getFilteredProducts(this.props.products, this.props.selected_category_id).map((product) => (
                  <ProductItem key={product.id} product={product} onProductClick={(product) => {
                    this.props.dispatch(addCartItem(product));
                  }} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const getFilteredProducts = (products, category_id) => {
  return productsByCategory(products, category_id);
}

const mapStateToProps = (state) => {
  return {
    selected_category_id: state.selected_category,
    products: state.products,
    cart: state.cart
  };
}

export default connect(mapStateToProps)(MenuItems);