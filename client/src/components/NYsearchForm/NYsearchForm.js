import React from "react";


const NYsearchForm= props => (


<div className="row">
    <div className="col-sm-12">

      <div className="card">
        <div className="card-header">
          <strong>
            <i className="fa fa-list-alt"></i> Search Parameters</strong>
        </div>
        {props.children}
        <div className="card-body">
        </div>
      </div>
    </div>
  </div>




);


export default NYsearchForm;