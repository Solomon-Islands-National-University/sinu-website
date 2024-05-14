import fbIcon from "@/assets/icons/facebook-icon.svg";
import twitterIcon from "@/assets/icons/twitter-icon.svg";
import instaIcon from "@/assets/icons/instagram-icon.svg";
import linkedinIcon from "@/assets/icons/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

function FooterSocials() {
    return ( 
        <ul className="flex justify-center">
                <li>
                    <Link href={"#"}>
                        <Image 
                            src={fbIcon} 
                            width={50}
                            alt=""
                        />
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        <Image 
                            src={linkedinIcon} 
                            width={50}
                            alt=""
                        />
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        <Image 
                            src={twitterIcon} 
                            width={50}
                            alt=""
                        />
                    </Link>
                </li>
                <li>
                    <Link href={"#"}>
                        <Image 
                            src={instaIcon} 
                            width={50}
                            alt=""
                        />
                    </Link>
                </li>
            </ul>
     );
}

export default FooterSocials;