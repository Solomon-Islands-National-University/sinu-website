import fetchFooter from "@/lib/fetch-footer";
import FooterLinkGroup from "./footer-link-group";

async function FooterTopRight() {

    const data = await fetchFooter();

    let content = <div>Link groups here.</div>;

    // Check if data is an empty object or if data.items is not an array
    if (data) {
        content = 
            data.map((item: any) => (
                <FooterLinkGroup group={item} key={item.id}/>
            ))
    }

    return ( 
        <div className="xl:flex  xl:flex-grow xl:justify-center ">

            { content }


        </div>
     );
}

export default FooterTopRight;