import React,{useEffect} from 'react';

import { connect } from "react-redux";






import RecipeThumb from './RecipeThumb';
import {GetSearchRecipies, SetSearchRecipies} from '../Actions';




const Recipies=(props)=>

{
	const content= props.match.params.content;
  const searc = props.match.params.search.replace(/__/g, "_/_");

	console.log(searc);
	useEffect(()=> {
		console.log('ready');
		props.GetSearchRecipies(content,searc);
	},[content,searc]);
return( 
<div>
{props.foods? (<>
{props.foods.map(m=> <RecipeThumb key ={m.idMeal} meal={m}/>)}
</>):""}
 </div>
);
}

const mapStateToProps =(state)=>  {
	 console.log(state);
 return{
	foods: state.foods
 };
 
 };



export default connect(mapStateToProps,{GetSearchRecipies,SetSearchRecipies})(Recipies);
