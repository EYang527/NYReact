import React from "react";

import Jumbotron from '../components/Jumbotron/Jumbotron'

import NYsearchForm from "../components/NYsearchForm/NYsearchForm";
import Form from "../components/NYsearchForm/Form";
import Formgroup from "../components/NYsearchForm/Formgroup";






export default class About extends React.Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };


  

  render() {
    return (
      <div>
   
        <Jumbotron/>
        <NYsearchForm>
          <Form>
            <Formgroup><label for="search">Search Term:</label>
              <input type="text" className="form-control" id="search-term"/>
              </Formgroup>
              <Formgroup> <div className="form-group">
              <label for="pwd">Number of Records to Retrieve:</label>
              <select id="article-count" className="custom-select" aria-labelledby="dropdownMenuButton">
                <option selected value="1">1</option>
               
                <option value="5" selected>5</option>
                <option value="10">10</option>
              </select>
            </div>
                </Formgroup>
                <Formgroup>  <div className="form-group">
              <label for="start-year">Start Year (Optional):</label>
              <input type="text" className="form-control" id="start-year"/>
            </div>

                  </Formgroup>
                  <Formgroup>  <div className="form-group">
              <label for="End-year">End Year (Optional):</label>
              <input type="text" className="form-control" id="start-year"/>
            </div>

                  </Formgroup>

            </Form>
          </NYsearchForm>
         
      </div>
    );
  }
}


