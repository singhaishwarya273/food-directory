import React ,{useState} from 'react';
import {GetDetail, SetDetail} from '../Actions';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";


const Search = (props)  =>
{ 

const [query, setquery]= useState('');

const updateSearch =(e)=> {
	setquery(e.target.value);
	
}

const submitChange= (e) => {
	if (query){
	//e.preventDefault();
	console.log(e);
	props.history.push(e);
	}
	
	else{
		alert('select an option');
	}
}

	return(
	
<form className="search-container" onSubmit={()=> submitChange(`/recipe/${query}`)}>
    <div className= "Header">
      <input type="text" placeholder="Search.." onChange={updateSearch} value= {query} required/>
      <button type="submit" ><i className="fa fa-search"></i></button>
    </div>
  </form>

 );
};
 

 export default withRouter(Search);
 
 
 
 
 
 