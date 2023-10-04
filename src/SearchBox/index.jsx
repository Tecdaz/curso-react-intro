import React from "react";
import { TodoContext } from "../TodoContext";
import "./searchBox.css";
function SearchBox()  {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return (
        <input
            className="search-box"
            type="text" 
            placeholder="Buscar TODOs"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
        }}/>
    );
}

export { SearchBox };