import React, { useEffect } from "react";

import styles from "./Recipe.module.css";
import Spinner from "./Spinner";

import { connect } from "react-redux";

import { GetDetail, SetDetail } from "../Actions";

const Recipe = props => {
  const content = props.match.params.name;
  console.log(props.match.params);
  useEffect(() => {
    props.GetDetail(content);
  }, [content]);

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
          className={styles.recipe}
          style={{
            backgroundImage: `url(${props.food.strMealThumb})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%"
          }}
        >
          <div
            className={styles.recipes}
            style={{ backgroundColor: "rgba(255,255,255, 0.3)" }}
          >
            <div className={styles.row}>
              <div className="ingredient">
                <h4>Ingredients:</h4>

                {ing()}
              </div>

              <div className={styles.Meal}>
                <h4>{props.food.strMeal}</h4>
                <p style={{ textAlign: "Left", padding: "10px" }}>
                  {props.food.strInstructions}
                </p>
              </div>
            </div>
            {props.food.strYoutube ? (
              <div className={styles.row}>
                <h4 style={{ paddingBottom: "5px" }}>Video Recipe</h4>
                <div className={styles.videoWrapper}>
                  <iframe
                    width="560"
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
              </div>
            ) : (
              ""
            )}
          </div>{" "}
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
