import React from 'react';

import style from './RandomRecipe.module.css';



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
	<div className= {style.recipies} >
	{props.recipe ?(<div className = "recipe" style= {{backgroundColor:"white"}}>
	<div className="row " >
	
			<div className="col-3"></div>
			<div className=" col-3">
				<img src={props.recipe['strMealThumb']} alt="Meal Image"/>
				
				{props.recipe['strCategory']
						? (<p><strong>Category:</strong> {props.recipe['strCategory']}</p>)
				:( '')}
				
				{props.recipe['strArea'] ? <p><strong>Area:</strong> {props.recipe['strArea']}</p> : ''}
				
				{props.recipe['strTags']
						? <p><strong>Tags:</strong> {props.recipe['strTags'].split(',').join(', ')}</p>
						: ''
				}
				<h5>Ingredients:</h5>
				<ul>
					{ing()}
				</ul>
			</div>
			
			<div className={style.col-3}>
				<h4>{props.recipe.strMeal}</h4>
				<p>{props.recipe.strInstructions}</p>
			</div>ma
			
			<div className= {style.col-3}></div>
		</div>
		{props.recipe.strYoutube? (<div className="row">
			<h5>Video Recipe</h5>
			<div className="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/{props.recipe.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>):("")}
		
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





