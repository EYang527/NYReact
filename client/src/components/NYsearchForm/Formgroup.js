import React from "react";


const Formgroup= props => (
    
  <div className='form-group' {...props}>
    {props.children}
  </div>
)

export default Formgroup;