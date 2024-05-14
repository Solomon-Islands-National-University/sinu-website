import FooterLogo from "./footer-logo";
import FooterSocials from "./footer-socials";


function FooterTopLeft() {
    return ( 
        <div 
            className="flex flex-col items-center gap-y-8 justify-center py-12  xl:flex-1 xl:justify-start"
            >
            <FooterLogo/>
            {/* <span className="font-light mt-5 ">
                Solomon Islands National University, Honiara
            </span> */}
            <FooterSocials/>
        </div>
     );
}

export default FooterTopLeft;