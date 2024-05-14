import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/sinu-logo-revamped.svg";

function Logo() {
    return ( 
        <Link className="flex lg:block " href="/">
        <Image 
            className="my-auto"
            src={logo} 
            width={235}
            alt="sinu-logo"
        />
        </Link>
     );
}

export default Logo;