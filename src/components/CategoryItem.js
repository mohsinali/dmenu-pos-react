import React from 'react';

const CategoryItem = ({id, name}) => (
  <div className="col-lg-3">
    <div className="widget style1 lazur-bg">
        <div className="row vertical-align">
            <div className="col-xs-12 text-center">
                <h2>{name}</h2>
            </div>
        </div>
    </div>
  </div>
);

export default CategoryItem;