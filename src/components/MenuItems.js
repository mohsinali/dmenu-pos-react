import React from 'react';
import { connect } from 'react-redux';

class MenuItems extends React.Component {
  render() {
    return (
      <div>
        <h1>Menu Items {this.props.selected_category_id}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selected_category_id: state.selected_category
  };
}

export default connect(mapStateToProps)(MenuItems);