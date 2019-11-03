import React from 'react';

import  './RandomRecipe.css';



import { connect } from "react-redux";
import {GetDetail, SetDetail} from '../Actions';


const RandomRecipe= (props) =>
{
	console.log(props.recipes);
	
	const ing = ()=>{
	let indegrients= [];
	for (let i=1;i<21; i++){
		if(props.recipe[`strIngredient${i}`]){
			indegrients.push(`${props.recipe[`strIngredient${i}`]} - ${props.recipe[`strMeasure${i}`]}`);
		}			
		}
		//console.log(indegrients)
		
		return indegrients.map(ingredient => <li>{ingredient}</li>);
	}
	
	return(
	<>
	
	
	<div className="row" >
	{props.recipe ?(<div className = "col-6" >
	
	
			
	
				<img src={props.recipe['strMealThumb']} alt="Meal Image"/>
				
				{props.recipe['strCategory']
						? (<p><strong>Category:</strong> {props.recipe['strCategory']}</p>)
				:( '')}
				
				{props.recipe['strArea'] ? <p><strong>Area:</strong> {props.recipe['strArea']}</p> : ''}
				
				{props.recipe['strTags']
						? <p><strong>Tags:</strong> {props.recipe['strTags'].split(',').join(', ')}</p>
						: ''
				}
				<div className= "ingredient" >
				<h4>Ingredients:</h4>
				
					{ing()}
				
				
			</div>
			
			<div className="Meal">
				<u><b><h4>{props.recipe.strMeal}</h4></b></u>
				<div className="instruction" style= {{textAlign:'Left', marginTop:0, padding:'1px'}}>
				<p>{props.recipe.strInstructions}</p>
				</div>
			</div>
			<hr></hr>
		
	
		{props.recipe.strYoutube? (<div className="videoWrapper" style={{alignItem:"center"}}>
			<h4 style= {{paddingBottom:'10px'}}>Video Recipe</h4>
			
				<iframe width="420" height="315" src={`https://www.youtube.com/embed/${props.recipe.strYoutube.slice(-11)}`}
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
			picture-in-picture" allowfullscreen> </iframe>
			</div>)
		:("")}
		
		</div>): ("")}
	
</div>

	</>)	;
	
	
	
};
const mapStateToProps =(state)=>  {
	 console.log(state);
 return{
	food: state.food
 };
 
 };

 export default connect(mapStateToProps,{GetDetail,SetDetail})(RandomRecipe);





