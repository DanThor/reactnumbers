import React from "react";
import "./search.css";


const Search = props => {
    return (
         <>
                <input className="inputSearch"  onChange={props.handleChange} placeholder="Enter a number" />
         </>
           );
};


export default Search;