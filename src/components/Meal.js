import React,{useState} from 'react';
import './Meal.css';
import RandomRecipe from './RandomRecipe';
import Hero from './Hero';

const Meal =() =>
{
	const[recipe,setrecipe] =useState(null);
	//state= {recipe:null};
	const getMeal= async () =>{
		const response = await fetch(
'https://www.themealdb.com/api/json/v1/1/random.php'
	);
	const data = await response.json();   
	console.log(data.meals);
	//this.setState({recipe:data.meals[0]})
	setrecipe(data.meals[0]);
	};	
return(
<Hero> 
<div className="container">
	<div className="row text-center">
		<h1 style = {{ color:'rgb(128,0,0)', marginTop:"50px"}}>
			Feeling hungry?
		</h1 > 
		<h3 style = {{ color:'rgb(128,0,0)'}}>Get a random meal by clicking below</h3>
		<button className="btn info" style = {{ BackgroundColor:'rgb(128,0,0)'}} onClick= {getMeal}>Get Random Meal  </button>
	</div>
	<RandomRecipe recipe= {recipe} click= {getMeal}/>

	</div>
	</Hero>
);
	
}

export default Meal;