import { useState } from "react";
import MegaMenu from "./mega-menu";
import NavItem from "./nav-item";
import SearchItem from "./search-item";


function NavbarMenu({items}: {items: any}) {

    const [navItems, setNavItems] = useState(items);
    console.log(navItems[0]);
    
    const handleNavItemClick = (id: number) => {
        setNavItems(navItems.map((item: any) => ({
            ...item,
            isActive: item.id === id ? !item.isActive : false,
        })))
    }

    return ( 
        <ul  
            className="flex flex-col lg:flex-row flex-1  text-xl capitalize font-semibold  justify-between"
        >

            { navItems.map((item: any) => {
                return (
                    <li 
                        key={item.title}
                        className="flex-grow flex text-center lg:px-0 flex-col"
                    >
                        <NavItem item={item} onClick={handleNavItemClick} />
                        {item.isActive && <MegaMenu menus={item.menus} />}
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