import {ListMenuSection, GridMenuSection} from "@/ui/menu-section";


// type MegaMenuProps = {
//     menuSections?: {
//         listMenus: {
//             key: number, 
//             listMenuTitle: string, 
//             menuLinks: {
//                 key: number, 
//                 linkTitle: string, 
//                 linkUrl: string}[]
//             }[],
//         gridMenus?: {
//             key: number,
//             gridMenuTitle: string,
//             grids: {
//                 key: number,
//                 gridTitle: string,
//                 gridItems: {
//                     key: number,
//                     gridItemTitle: string,
//                     gridItemUrl: string,
//                 }[]
//             }[]
//         }[],
//     },
// }

function MegaMenu({menus}: {menus: any}){

    return ( 

        
            <div 
                className={` lg:absolute lg:mt-[88px] start-0 end-0 lg:mx-28 z-40 border-b border-b-slate-400 flex text-white bg-[hsl(194,23%,19%)] 
                            px-6  lg:px-12 lg:py-6 flex-col lg:flex-row xl:gap-16 text-[16px]`}
            >
    

                {menus?.map((menu: any) => 

                    <ListMenuSection 
                        key={menu.menuTitle}
                        menuTitle={menu.menuTitle}
                        links={menu.links}
                    /> 
                
                )}

                {/* {menuSections?.gridMenus?.map((gridMenu) => 
                    <GridMenuSection
                        key={gridMenu.key}
                        gridMenuTitle={gridMenu.gridMenuTitle}
                        grids={gridMenu.grids}
                    />
                )} */}

            </div>
    

    );
}

export default MegaMenu;