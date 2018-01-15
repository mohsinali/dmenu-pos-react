import React from 'react';
import { connect } from 'react-redux';
import { productsByCategory } from '../selectors/Products_Selector';

class MenuItems extends React.Component {
  render() {
    return (
      <div>
        <h1>Menu Items {this.props.selected_category_id}</h1>        
        {          
          productsByCategory(this.props.products, this.props.selected_category_id).map((p) => (
            <div key={p.id}>Category# {p.category_id} - {p.name}</div>
          ))
        }
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