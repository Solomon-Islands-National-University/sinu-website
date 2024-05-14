import Link from "next/link";

function FooterBottom() {
    return (
        <div className="mt-4 xl:mt-0 px-2 xl:px-28 text-sm ">
                <ul className=" text-slate-200 px-4  border-slate-700 py-8 pt-0  xl:pt-8 flex gap-5 flex-wrap lg:justify-center">
                    <li className="text-white">&copy; Solomon Islands National University </li>
                    <li><Link className="cursor-pointer  text-xs opacity-55  hover:text-slate-500" href={"#"}>Disclaimer</Link></li>
                    <li><Link className="cursor-pointer text-xs opacity-55 hover:text-slate-500" href={"#"}>Contact us</Link></li>
                    <li><Link className="cursor-pointer text-xs opacity-55 hover:text-slate-500" href={"#"}>Privacy</Link></li>
                    <li><Link className="cursor-pointer text-xs opacity-55 hover:text-slate-500" href={"#"}>Cookies</Link></li>
                </ul>
        </div>
    )
}

export default FooterBottom;