import React, { Component } from "react";
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.css';
import "./City"
class City extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            zipcode: [],
            cityName: null
         };
        this.handleChange = this.handleChange.bind(this);
    }
 
    componentDidUpdate() {
        axios 
        .get("http://ctp-zip-api.herokuapp.com/city/" + this.state.cityName.toUpperCase())
        .then((response) => {
            const data = response.data;
            const newZipObj = {
                listZips: data
            };
            this.setState({zipcode: newZipObj});
        })
        .catch((err) => console.log(err));
    }
 
 
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
 
 
    render() {
        let display;
        if(!this.state.zipcode.listZips) {
            display = <p>Loading...</p>;
        } else {
            display = (
                <>
                <div class ="container float-none">
                    <div class ="row">
                        <div class="col-sm-3">
                            <ul>
                                {this.state.zipcode.listZips.map((zipcode) => <li key= { zipcode }> {zipcode} </li>)}
                
                            </ul>
                        </div>
                    </div>
                </div>
                
                
                </>
            );
        }
        //display
        return(
        <div>
            <div class="form-group mx-sm-3 mb-2 pt-5">
            <h4> Enter a city to retrieve zipcodes: </h4>
            <input
                type= "text"
                name = "cityName"
                defaultValue = {this.state.cityName}
                onChange={(e) => this.handleChange(e)} >
            </input>
            <div class="container float-none">
                <div class="row">
                    <div class="col-sm-3">
                    <div class ="city">{display}</div>
                    </div>
                </div>
                
            </div>
 
            </div>
            
            
        </div> 
        )     
    }
}
export default City;
