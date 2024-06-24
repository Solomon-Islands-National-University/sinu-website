'use client';
import NavToggle from "@/components/header/nav-toggle";
import Navbar from "@/components/header/navbar";
import Logo from "@/components/header/logo";
import { useState } from "react";


function HeaderBottom({navItems}: {navItems: any}) {

    const [isExpanded, setIsExpanded] = useState(true);

    const handleToggle = () => {
        setIsExpanded(prevState => !prevState);
    }

    return ( 
        <div 
        className="flex flex-wrap  z-10 justify-between lg:justify-center 
                  2lg:justify-between lg:gap-12 lg:px-18 xl:px-28 "
      >

          <Logo/>
          <NavToggle onToggle={handleToggle}/>
          <Navbar expanded={isExpanded} navItems={navItems}/>
          

      </div>
    );
}

export default HeaderBottom;