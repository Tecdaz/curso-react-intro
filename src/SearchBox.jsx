import React from "react";
import "./styles/searchBox.css";
function SearchBox({ searchValue, setSearchValue})  {
    return (
        <input
            className="search-box"
            type="text" 
            placeholder="Hacer la comida"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
        }}/>
    );
}

export { SearchBox };