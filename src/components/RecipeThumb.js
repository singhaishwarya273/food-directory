import React from 'react';

import "./RecipeThumb.css";
import { Link } from "react-router-dom";

const RecipeThumb= ({meal}) =>
{
return(
<Link to = {{pathname: `/recipe/${meal.strMeal}`}}>
<div className= 'thumb'>
<img src = {meal['strMealThumb']} alt ={meal['strMeal']} />
<p className = "MealName"> {meal['strMeal']}</p>
</div>
</Link>
);

};

export default RecipeThumb;