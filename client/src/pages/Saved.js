import React from "react";

import Jumbotron from '../components/Jumbotron/Jumbotron'
import API from "../utils/API"


export default class Saved extends React.Component {
  state = {
     results: [],    
  };

  componentDidMount() {
      console.log("hello from componentDiMount");
      API
      .getArticles()
      .then(res=> {
        this.setState({results:res.data})
        console.log(res.data);
      })
      // .then(console.log(this.state.results))
      .catch(err => console.log(err));
   };


   handleDeleteArticle(article) {
    console.log("Delete article");
    API
    .deleteArticle(article) 
    .then(res=> console.log(res),window.location.reload())
    .catch(err=>console.log(err));


   }


  render() {
    return (
        
    <div>
        <Jumbotron redirection="/" pageName="Home"/>
          
          <ul>
          
          { 
            this.state.results.map((article,i)=> 
              
              <li>
                key={article._id}
                <p><b>Title:</b> {article.title}</p>
                <p><a href={article.web_url}>{article.url}</a></p>
                <p><b>Summary:</b> {article.summary}</p>
                <p><b>Date:</b> {article.date}</p>
               
                <button type="button" className="btn btn-primary" id={article._id} onClick={()=>this.handleDeleteArticle(article._id)}> remove article </button>
                 <hr/>
                 </li>
            
            
            )
          }
          </ul>
          </div>
      
    );
  }
}