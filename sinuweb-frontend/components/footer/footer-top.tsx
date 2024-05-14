import Link from "next/link";
import FooterTopLeft from "./footer-top-left";
import FooterTopRight from "./footer-top-right";

function FooterTop() {
    return ( 
        <div className="flex xl:flex-grow flex-col xl:flex-row justify-between xl:justify-start  ">

            <FooterTopLeft/>
            <FooterTopRight/>

         </div>
     );
}

export default FooterTop;