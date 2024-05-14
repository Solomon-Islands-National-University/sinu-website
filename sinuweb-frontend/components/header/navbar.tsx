import NavbarMenu from "./navbar-menu";
import items from "@/lib/fetch-nav-items";
import QuickLinks from "./quick-links";



function Navbar({expanded}: any) {

    const navItems = items;
    console.log(navItems);

    return ( 
        <nav 
            className={`${expanded ? 'block': 'hidden'} 
                        w-full lg:flex-1 lg:flex lg:w-auto
                        bg-sinu-dark-green lg:bg-transparent text-white`}
            >

            <NavbarMenu navItems={navItems}/>

            <div className="block lg:hidden">
                <QuickLinks/>
            </div>
            
        </nav>
     );
}

export default Navbar;