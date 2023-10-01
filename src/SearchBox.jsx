import React, { useState } from "react";
function SearchBox({ searchValue, setSearchValue})  {
    return (
        <div className="flex justify-center">
            <input className="shadow-[0_5px_50px_0_rgba(32,35,41,0.25)] bg-zinc-100 rounded-md border-2 border-neutral-950 border-solid w-9/12 text-center font-normal h-16 text-2xl focus:border-sky-400"
                type="text" 
                placeholder="Hacer la comida"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}/>
        </div>
    );
}

export { SearchBox };