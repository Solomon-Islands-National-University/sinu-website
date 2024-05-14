import Link from "next/link";

type ListMenuSectionProps = {
    listMenuTitle: string;
    menuLinks: {
        key: number, 
        linkTitle: string, 
        linkUrl: string
    }[],
}

const ListMenuSection: React.FC<ListMenuSectionProps> = ({listMenuTitle, menuLinks}) => {
    return ( 
        <div className="flex-1 text-left">
            <h3 className="border-b border-slate-500 py-5">{listMenuTitle}</h3>
            
            <ul className="flex flex-col gap-3 text-[15px] font-light py-5">
                {menuLinks.map((link) => 
                    <li 
                        key={link.key}
                        >
                        <Link className="hover:text-slate-200 hover:underline" href={link.linkUrl}>
                            {link.linkTitle}
                        </Link>
                    </li>
                )}

            </ul>
        </div>
     );
}

type GridMenuSectionProps = {
    gridMenuTitle: string,
    grids: {
        key: number,
        gridTitle: string,
        gridItems: {
            key: number,
            gridItemTitle: string,
            gridItemUrl: string,
        }[],
    }[],
}

const GridMenuSection: React.FC<GridMenuSectionProps> = ({gridMenuTitle, grids}) => {
    return (
        <div className=" text-left flex-grow ">
            <h3 className="border-b border-slate-500 py-5  mb-4">{gridMenuTitle}</h3>
        
            <div className="grid grid-cols-2 gap-5">

                {grids.map((grid) => 
                
                <div className="py-3 " key={grid.key}>

                    <h6 className=" text-slate-500 text-sm font-thin ">
                        {grid.gridTitle} 
                    </h6>
                    <ul className=" flex flex-col text-[17px] font-light py-5 gap-4">

                        {grid.gridItems.map((gridItem) => 
                            <li className="p-3 py-4 rounded bg-sinu-dark-green  text-sm ">
                            <Link className=" hover:text-slate-200  flex justify-between" href={grid.gridTitle}>
                                <span>{gridItem.gridItemTitle}</span>
                                <span>&rarr;</span>
                            </Link>
                            </li>
                        )}
                        
                    </ul>

                </div>

                )}
            </div>
        </div>
    )
}


export {ListMenuSection, GridMenuSection};