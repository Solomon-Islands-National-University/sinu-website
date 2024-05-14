import Link from "next/link";

function FooterLinkGroup({group}: any) {
    
    const {id, groupTitle, links } = group;

    return ( 
        <div className="border-t xl:border-t-0 p-5 border-slate-500  xl:flex xl:flex-col xl:flex-grow xl:w-64 xl:pt-10">
                
                <h3 className=" text-lg font-semibold opacity-80 ">
                    {groupTitle}
                </h3>
                
                <ul className="py-4  flex-col gap-2 hidden lg:flex capitalize">
                    {links.map((link: any) => (
                       <li key={link.id}>
                        <Link 
                            className="font-light text-sm opacity-55 hover:opacity-85 " 
                            href={''}
                            >
                            {link.linkTitle}
                        </Link>
                        </li>
                    ))}
                </ul>

        </div>
     );
}

export default FooterLinkGroup;