import React from "react";
import PropTypes from "prop-types";
import "./result.css";

const Result = props => {
    return (
    <h2 className="result-data">{props.text}</h2>
    )
}
Result.propTypes = {
    text: PropTypes.string
};

export default Result;
