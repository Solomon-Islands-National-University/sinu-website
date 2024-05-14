import Image from "next/image";
import sinuLogo from "@/assets/sinu-logo-revamped.svg";


function FooterLogo() {
    return ( 
        <Image 
            src={sinuLogo} 
            width={205} 
            alt="sinu-logo"
        />
     );
}

export default FooterLogo;