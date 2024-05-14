import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";

function Header() {
    return ( 
        <header
            className="flex flex-col gap-y-8 
                    bg-sinu-light-dark-green lg:bg-blue-gradient shadow-lg shadow-cyan-500/50"
        >
            <HeaderTop/>
            <HeaderBottom/>
        </header>
     );
}

export default Header;