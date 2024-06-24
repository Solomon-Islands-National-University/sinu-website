import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";
import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo/client';


const fetchNavItems = async() => {

    const GET_NAV_ITEMS = gql`
        query Header {
            header {
                navItems {
                    title
                    subtitle
                    menus {
                        menuTitle
                        links {
                            title
                            url
                            openNewTab
                        }
                    }
                }
            }
        }
    
    `;
  
    const client = createApolloClient();
    const res = await client.query({
        query: GET_NAV_ITEMS
    });
    return res.data.header.navItems;
  }
  

async function Header() {

    const navItems = await fetchNavItems();
    let items: any = [];
    let x: number = 1;
    navItems.forEach((item:any) => {
        let newItem = { ...item, id: x, isActive: false};
        items.push(newItem);
        x++;
    });

    return ( 
        <header
            className="flex flex-col gap-y-8 
                    bg-sinu-light-dark-green lg:bg-blue-gradient shadow-lg shadow-cyan-500/50"
        >
            <HeaderTop/>
            <HeaderBottom navItems={items}/>
        </header>
     );
}

export default Header;