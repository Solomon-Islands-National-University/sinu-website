import { useState } from "react";
import MegaMenu from "./mega-menu";
import NavItem from "./nav-item";
import SearchItem from "./search-item";


function NavbarMenu(props: any) {

    const [navItems, setNavItems] = useState(props.navItems);
    
    const handleNavItemClick = (navId: number) => {
        setNavItems(navItems.map((item: any) => ({
            ...item,
            isActive: item.key === navId ? !item.isActive : false,
        })))
    }

    return ( 
        <ul  
            className="flex flex-col lg:flex-row flex-1  text-xl capitalize font-semibold  justify-between"
        >

            { navItems.map((item: any) => {
                return (
                    <li 
                        key={item.key}
                        className="flex-grow flex text-center lg:px-0 flex-col"
                    >
                        <NavItem item={item} onNavItemClick={handleNavItemClick} />
                        {item.isActive && <MegaMenu menuSections={item.menuSections} />}
                    </li>
                )}
            )} 


            <li 
                className="flex-grow flex text-center lg:px-0 flex-col"
            >
                <SearchItem />
            </li>
    
        </ul>
    );

}

export default NavbarMenu;