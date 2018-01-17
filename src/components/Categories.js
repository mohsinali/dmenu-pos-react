import React from 'react';
import { connect } from 'react-redux';

import { setSelectedCategory } from '../actions/Category_Actions';
import CategoryItem from './CategoryItem';

const Categories = (props) => (
  <div>
    <div className="ibox-content">
      <div className="row">
        {          
          props.categories.map((cat) => (
            <CategoryItem onCategoryClick={(category_id) => {              
              props.dispatch(setSelectedCategory(category_id));
            }} key={cat.id} {...cat} />
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