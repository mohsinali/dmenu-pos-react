import React from 'react';
import { connect } from 'react-redux';

const Categories = (props) => (
  <div>
    <h1>Categories List</h1>
    {props.categories.length}
    
  </div>
);

const mapStateToProps = (state) => {
  
  return {
    categories: state.categories
  };
}
export default connect(mapStateToProps)(Categories);