import React from 'react';

const ProductItem = (props) => (
  <div className="col-lg-2" key={props.product.id}>
    <div className="widget style1 lazur-bg">
      <div className="row vertical-align">
        <div className="col-xs-12 text-center">
          {props.product.name}
        </div>
      </div>
    </div>
  </div>
);

export default ProductItem;