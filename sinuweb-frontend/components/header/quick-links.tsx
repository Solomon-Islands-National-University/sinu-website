import QuickLink from "@/ui/quick-link";

const links = [
    {
        id: 1,
        text: "News",
        url: "/news",
    },
    {
        id: 2,
        text: "Events",
        url: "#",
    },
    {
        id: 3,
        text: "Moodle",
        url: "#",
    },
    {
        id: 4,
        text: "Library",
        url: "#",
    },
]

function QuickLinks() {
    return ( 

            <ul 
            className=" gap-x-8 p-4 flex"
            >
                { 
                links.map((link: any) => {
                    return (
                        <QuickLink 
                            key={link.id} 
                            text={link.text} 
                            link={link.url} 
                        />
                    )
                })
                }
            </ul>

        
     );
}

export default QuickLinks;