import React from 'react';
import { connect } from 'react-redux';
import { productsByCategory } from '../selectors/Products_Selector';
import ProductItem from './ProductItem_Component';

class MenuItems extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="ibox-content">
            <div className="row">
              {          
                productsByCategory(this.props.products, this.props.selected_category_id).map((p) => (
                  <ProductItem product={p} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected_category_id: state.selected_category,
    products: state.products
  };
}

export default connect(mapStateToProps)(MenuItems);