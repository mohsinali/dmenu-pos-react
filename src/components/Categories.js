import React from 'react';
import { connect } from 'react-redux';

import CategoryItem from './CategoryItem';

const Categories = (props) => (
  <div>
    <div className="ibox-content">
      <div className="row">
        {
          props.categories.map((cat) => (
            <CategoryItem key={cat.id} {...cat} />
          ))
        }
      </div>
    </div>

    
  </div>
);

const mapStateToProps = (state) => {
  
  return {
    categories: state.categories
  };
}
export default connect(mapStateToProps)(Categories);