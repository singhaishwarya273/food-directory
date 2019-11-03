import React, { useEffect } from "react";

import "./RandomRecipe.css";
import Spinner from "./Spinner";

import { connect } from "react-redux";

import { GetDetail, SetDetail } from "../Actions";

const Recipe = props => {
  const content = props.match.params.name;
  console.log(props.match.params);
  const { GetDetail } = props;
  useEffect(() => {
    GetDetail(content);
  }, [content, GetDetail]);

  const ing = () => {
    let indegrients = [];
    for (let i = 1; i < 21; i++) {
      if (props.food[`strIngredient${i}`]) {
        indegrients.push(
          `${props.food[`strIngredient${i}`]} - ${props.food[`strMeasure${i}`]}`
        );
      }
    }
    //console.log(indegrients)

    return indegrients.map(ingredient => <li>{ingredient}</li>);
  };
  return (
    <>
      {props.food ? (
        <div
          
          style={{
            backgroundImage: `url(${props.food.strMealThumb})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%"
          }}
        >
          <div
            className="row"
            style={{ backgroundColor: "rgba(255,255,255, 0.3)" }}
          >
            <div className="col-6">
              <div className="ingredient">
                <h4>Ingredients:</h4>

                {ing()}
              </div>
              <hr>
                </hr>
              <div className="Meal" >
               <u> <h4>{props.food.strMeal}</h4></u>
                <p style={{ textAlign: "Left", padding: "1px" }}>
                  {props.food.strInstructions}
                </p>
              </div>
          
            {props.food.strYoutube ? (
              <div className= "videoWrapper" style={{alignItem:"center"}}>
                <h4 style={{ paddingBottom: "5px" }}>Video Recipe</h4>
                
                  <iframe
                    title="Recipe Video"
                    width="420"
                    height="315"
                    src={`https://www.youtube.com/embed/${props.food.strYoutube.slice(
                      -11
                    )}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; 
			picture-in-picture"
                    allowfullscreen
                  ></iframe>
                
              </div>
            ) : (
              " "
            )}
          </div></div>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    food: state.food
  };
};

export default connect(
  mapStateToProps,
  { GetDetail, SetDetail }
)(Recipe);
