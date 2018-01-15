import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => (  
  <div className="col-lg-3">
    <div className="widget style1 navy-bg">
      <div className="row vertical-align">
        <div className="col-xs-12 text-center">          
          <h2 onClick={() => {
            props.onCategoryClick(props.id);
          }} style={{cursor: 'pointer'}}>{props.name}</h2>
        </div>
      </div>
    </div>
  </div>
);

export default CategoryItem;