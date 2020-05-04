import React from "react";
import "./search.css";


const Search = props => {
    return (
         <>
         <h1>Enter a number</h1>
                <input className="inputSearch" onChange={props.handleChange} placeholder="Enter a number" />
         </>
           );
};


export default Search;