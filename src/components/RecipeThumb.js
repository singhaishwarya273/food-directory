import React from 'react';

import "./RecipeThumb.css";
import { Link } from "react-router-dom";

const RecipeThumb= ({meal}) =>
{
return(
<div className= 'grid-item'>
<Link to = {{pathname: `/recipe/${meal.strMeal}`}}>

<img src = {meal['strMealThumb']} alt ={meal['strMeal']} />
<p className = "MealName"> {meal['strMeal']}</p>

</Link>
</div>
);

};

export default RecipeThumb;