import React from "react";


const FormContainer= props => (
    <form role="form">      
 {props.children}
    <button type="submit" className="btn btn-default" id="run-search">
      <i className="fa fa-search"></i> Search</button>
    <button className="btn btn-default" id="clear-all">
      <i className="fa fa-trash"></i> Clear Results</button>
     

  </form>


)


export default FormContainer;