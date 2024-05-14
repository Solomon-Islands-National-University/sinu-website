import QuickLinks from "./quick-links";

function HeaderTop() {
    return ( 
        <section className="hidden lg:block">
            <div 
                className=" w-3/5 ml-auto bg-blue-opaque"
            >
                <QuickLinks/>
            </div>
        </section>
     
     );
}

export default HeaderTop;