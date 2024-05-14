import Image from "next/image";
import menuCaret from "@/assets/icons/menu-caret.svg";


interface NavToggleProps {
    onToggle: () => void;
}

const NavToggle: React.FC<NavToggleProps> = ({onToggle}) => {

    return ( 
        <button 
            onClick={onToggle}
            className="flex items-center gap-x-2 mr-3 border-l border-gray-400  pl-4 m-4 py-5 lg:hidden"
            >
            <strong className="">
                <span className=" font-bold tracking-wider text-white">Menu</span>
            </strong>
            <Image 
                src={menuCaret}
                height={16}
                width={16}
                alt=""
            />
        </button>
     );
}

export default NavToggle;