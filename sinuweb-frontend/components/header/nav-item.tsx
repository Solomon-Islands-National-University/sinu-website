interface NavItemProps {
    item: {
        key: number,
        navTitle: string, 
        navBrief: string, 
        isActive: boolean
    };
    onNavItemClick: (e: number) => void,
}

const NavItem:React.FC<NavItemProps> = ({item, onNavItemClick}) => {

    const handleOnClick = (id: number) => {
        onNavItemClick(id);
    }

    return ( 
        <button 
        onClick={() => handleOnClick(item.key)}                       
        className={`${item.isActive ? 'border-b-yellow-500 ': 'border-b-transparent'} border-b-4  py-8 lg:py-0 lg:pb-6 pl-8 flex flex-col gap-3 text-left flex-grow capitalize 
          hover:text-slate-300 lg:border-l lg:border-l-slate-400 `}
        >
            <span>
                {item.navTitle}
            </span>
            <span 
            className="text-sm font-extralight text-slate-300 hidden lg:inline"
            >
                {item.navBrief}
            </span>
        </button>
        
     );
}

export default NavItem;