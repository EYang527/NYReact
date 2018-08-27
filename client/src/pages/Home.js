import React from "react";
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Moment from 'react-moment'; // use moment library to format the date

import NYsearchForm from "../components/NYsearchForm/NYsearchForm";
import Form from "../components/NYsearchForm/Form";
import Formgroup from "../components/NYsearchForm/Formgroup";
import Label from "../components/NYsearchForm/Label";
import Input from "../components/NYsearchForm/Input";
import API from "../utils/API"



export default class Home extends React.Component {
  state = {
    topic: "",   
    sYear:"",
    eYear:"",
   // page:"",
    results: [],    
  };

// handle all the changes for all input texts

  handleInputChange = event => {
    //this.setState({value: event.target.value});  
    const {name,value} = event.target;
    this.setState({
      [name]:value
    });
  }

  handleSelectChange = event => {
    this.setState({
      page: event.target.value,
    })
  }
  // event that defines the clear submit function
  handleClearSubmit = event => {
    event.preventDefault();
    this.setState({
      topic: "",   
      sYear:"",
      eYear:"",
      results:[],
    })
  }

  handleSaveArticle =index =>{
    console.log("click");
    const articleToSaved = {
      title: this.state.results[index].headline.main,
      url: this.state.results[index].web_url,
      published: this.state.results[index].pub_date,
      summary: this.state.results[index].snippet,
    }
    // console log article to saved
    console.log(articleToSaved);

    // remove article from results[] with position in array=index and only one element (index,1)
    //https://stackoverflow.com/questions/10325026/javascript-array-slice-versus-delete
    //http://www.tothenew.com/blog/javascript-splice-vs-slice/

    var newResult= this.state.results;

    newResult.splice(index,1)
    console.log("index is ",index);
    console.log("new results",newResult);
    this.setState({
      results : newResult
    })



    API.saveArticle(articleToSaved)
    .then(res=> console.log(res))
    .catch(err => console.log(err))
    


  }

  // event for submit form and API request
  handleFormSubmit = event =>{
      event.preventDefault();
      
    //url format ==> var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    // url += '?' + $.param({
    //   'api-key': "c41168d7ed2e43e4a92fd149e03e2b69",
    //   'q': "trump",
    //   'begin_date': "20021212",
    //   'end_date': "20131212",
    //   'page': 0

      let apiKeyNYT = 'c41168d7ed2e43e4a92fd149e03e2b69';
      let queryURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key="+apiKeyNYT ;


      if(this.state.topic){
        queryURL+= `&q=${this.state.topic}`    
      }

      if(this.state.sYear){
        queryURL+= `&begin_date=${this.state.sYear}`    
      }

      if(this.state.eYear){
        queryURL+= `&end_date=${this.state.eYear}`    
      }

      queryURL+=`&page=0`;  // by default return 0-9 search pages

    console.log(queryURL);

    // call to the NYT API
    API
    .queryNYT(queryURL)
    .then(res=> {
          console.log(res);

          this.setState ({
            results: [...this.state.results,...res.data.response.docs],
          })
        })
        .catch(err=>console.log(err))
}



  render() {
    return (
      <div>
        <Jumbotron redirection="/Saved" pageName="Saved Articles"/>
    
        <NYsearchForm>
          <Form>
          <Formgroup>
          <div className="form-group ml-2">
            <label htmlFor="search">Search Term:</label>
            <Input 
              onChange={this.handleInputChange}
              type='text'
              name='topic'
              value={this.state.topic}
              placeholder='search query'
              />
          </div>
          </Formgroup>

          <Formgroup> 
            <div className="form-group ml-2">
              <label htmlFor="pwd">Number of Records to Retrieve:</label>
                <select id="article-count" className="custom-select" onClick={this.handleSelectChange} aria-labelledby="dropdownMenuButton">
                    <option  value="1">1</option> 
                    <option value="5" >5</option>
                    <option value="10">10</option>
                </select>
                {this.state.page}
                </div>
          </Formgroup>

            <Formgroup>  
              <div className="form-group ml-2">
              <label htmlFor="sYear"> Enter Start date to search (optional) :</label>
              <Input 
              onChange={this.handleInputChange}
              type='date'
              name='sYear'
              value={this.state.sYear}
              placeholder='start Year'
              />
              </div>
            </Formgroup>
            <Formgroup>  
              <div className="form-group ml-2">
              <Label htmlFor="eYear">Enter a End date to search  (optional) :</Label>
              <Input 
              onChange={this.handleInputChange}
              type='date'
              name='eYear'
              value={this.state.eYear}
              placeholder='end Year'
              />
              </div>
            </Formgroup>
            <button type="submit" onClick={this.handleFormSubmit} className="btn btn-default ml-2 mr-2" id="run-search" >
              <i className="fa fa-search"></i> Search</button>
            <button type="submit" onClick={this.handleClearSubmit} className="btn btn-default" id="clear-all">
              <i className="fa fa-trash"></i> Clear Results</button>
          </Form>
          </NYsearchForm>
          
          
          <ul>
          
          { 
            this.state.results.map((article,i)=> 
              
              <li>
                key={i}
                <p><b>Title:</b> {article.headline.main}</p>
                <p><a href={article.web_url}>{article.web_url}</a></p>
                <p><b>Summary:</b> {article.snippet}</p>
                <p><b>Date:</b>    <Moment format="YYYY/MM/DD">{article.pub_date}</Moment>
               
                </p>             
           
               
                <button type="button" className="btn btn-primary" id={i} onClick={()=>this.handleSaveArticle(i)}> Save article </button>
                 <hr/>
                 </li>
            
            
            )
          }
          </ul>
          </div>
      
    );
  }
}










   
