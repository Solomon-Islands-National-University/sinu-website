
import FooterBottom from "./footer-bottom";
import FooterTop from "./footer-top";
import fetchFooter from "@/lib/fetch-footer";
import Image from "next/image";
import bg1 from "@/assets/bg/arrows-left-colored.svg";
import bg2 from "@/assets/bg/arrows-left-dull.svg";
import matImg from "@/assets/bg/mat.svg";

function Footer() {
    
    return ( 
        <footer 
            className="lg:relative xl:pt-24 xl:px-24 min-h-[90vh] xl:min-h-[80] pb-0 xl:flex xl:flex-col xl:justify-between 
                    bg-[#0f272f] text-white "
            >
            <FooterTop/>
            <FooterBottom/>
            <div className="hidden xl:block absolute start-0 bottom-10">
                <Image className="" src={bg1} alt="" />
            </div>
            <div className="hidden xl:block absolute top-0 right-0">
                <Image className="" src={bg2} alt="" />
            </div>
        </footer> 
    );
}

export default Footer;