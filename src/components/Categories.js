import React from 'react';
import { connect } from 'react-redux';

// class Categories extends React.Component {
//   render() {
//     return (
//       <div>Show Categories</div>
//     );
//   }
// };

const Categories = (props) => (
  <div>
    <h1>Categories List</h1>
    
  </div>
);

const mapStateToProps = (state) => {
  console.log(state);

  return {
    categories: 'An array'
  }
}
export default connect(mapStateToProps)(Categories);