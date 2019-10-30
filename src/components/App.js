import React from 'react';
import "./App.css";
import Search from './Search'; 
import Recipe from './Recipe';

import Recipies from './Recipies';

//import Navbar from './Navbar';

import { Switch, Route, Link } from "react-router-dom";

import {Data} from './SearchCategories';
import Meal from './Meal';



const App =() => {	
	console.log(Data['CATEGORIES']);
	
	//const Rotate= arr => arr.map(a => <Link to ="/food/") 
  return (
  <div>
  <div className="navbar">
  <Link to ="/" className="active">Home</Link>
  <div className="dropdown">
    <button className="dropbtn">Categories 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
	{Data['CATEGORIES'].map(a=> <Link to ={`/recipies/c/${a.value}`}> {a.label}</Link>
	)}
    </div>
  </div>
<div className="dropdown">  
	  <button className="dropbtn">Region
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
 {Data['REGION'].map(r=> <Link to ={`/recipies/a/${r.value}`}> {r.label}</Link>
	)}
    </div>
	</div>

	<Search />
  </div>
 
  <Switch>
  <Route exact path = "/" component ={Meal}/>
   <Route exact path = "/recipe/:name"component = {Recipe}/>
   <Route exact path = "/recipies/:content/:search" component = {Recipies}/>
   
  </Switch>
		</div>
  );
}

export default App;
