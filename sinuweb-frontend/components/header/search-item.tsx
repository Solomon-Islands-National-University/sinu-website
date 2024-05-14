import { useState } from "react";
import Search from "../search";

function SearchItem() {

    const [displaySearchBar, setDisplaySearchBar] = useState(false);

    const handleOnClick = () => {
        setDisplaySearchBar(true);
    }

    const handleOnClose = () => {
        setDisplaySearchBar(false);
    }

    return ( 
        <>
            <button 
                onClick={handleOnClick}                       
                className={`'border-b border-b-transparent border-b-4  py-8 lg:py-0 lg:pb-6 pl-8 flex flex-col gap-3 text-left flex-grow capitalize 
                            hover:text-slate-300 lg:border-l lg:border-l-slate-400 `}
            >
                <span>
                    Search
                </span>
                <span 
                className="text-sm font-extralight text-slate-300 hidden lg:inline"
                >
                    Browse anything on this website
                </span>
            </button>
            {displaySearchBar && <Search onClose={handleOnClose}/>}
        </>
     );
}

export default SearchItem;