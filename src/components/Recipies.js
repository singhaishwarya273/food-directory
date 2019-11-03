import React, { useEffect } from "react";

import { connect } from "react-redux";

import RecipeThumb from "./RecipeThumb";
import { GetSearchRecipies, SetSearchRecipies } from "../Actions";

import "./Recipies.css";

const Recipies = props => {
  const content = props.match.params.content;
  const searc = props.match.params.search.replace(/__/g, "_/_");

  console.log(searc);
  useEffect(() => {
    console.log("ready");
    props.GetSearchRecipies(content, searc);
  }, [content, searc]);

  const imagess = props.foods.map(m => <RecipeThumb key={m.idMeal} meal={m} />);

  return (
    <>
      {props.foods ? <div className="imagelist">{imagess}</div> : <div></div>}
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    foods: state.foods
  };
};

export default connect(
  mapStateToProps,
  { GetSearchRecipies, SetSearchRecipies }
)(Recipies);
