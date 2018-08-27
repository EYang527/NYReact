import React from "react";

const style1 = {
    'backgroundColor': '#20315A' ,
     'color': 'white',
  
  }

  const Jumbotron = props => (

  <div className="jumbotron" style={style1}><h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
  <a href={props.redirection}> {props.pageName} </a></div>
  )

  export default Jumbotron;