import fetchFooter from "@/lib/fetch-footer";
import FooterLinkGroup from "./footer-link-group";

// TEMP: get this footer data from backend
// const data = [
//     { 
//         id: 1, 
//         header_title: 'Faculties & Centres', 
//         links: [
//             { 
//                 link_id: 1,
//                 link_text: 'Faculty of agriculture, fisheries & forestry', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 2,
//                 link_text: 'Faculty of Business & Tourism Studies', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 3,
//                 link_text: 'Faculty of Education & Humanities', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 4,
//                 link_text: 'Faculty of Nursing, Medicine & Health Sciences', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 5,
//                 link_text: 'Faculty of Science & Technology', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 6,
//                 link_text: 'University Prepatory College', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 7,
//                 link_text: 'Distance & Flexible Learning Centre', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 8,
//                 link_text: 'Centre for Productivity, Professional Development and Life-long Learning', 
//                 link_url: '#' 
//             },
//         ]
//     },
//     { 
//         id: 101, 
//         header_title: 'On our site', 
//         links: [
//             { 
//                 link_id: 102,
//                 link_text: 'latest news', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 103,
//                 link_text: 'Who we are', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 104,
//                 link_text: 'find a course', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 105,
//                 link_text: 'events', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 106,
//                 link_text: 'sitemap', 
//                 link_url: '#' 
//             },

//         ]
//     },
//     { 
//         id: 201, 
//         header_title: 'Popular Links', 
//         links: [
//             { 
//                 link_id: 202,
//                 link_text: 'e-learn', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 203,
//                 link_text: 'staff webmail', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 204,
//                 link_text: 'student webmail', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 205,
//                 link_text: 'jobs @ sinu', 
//                 link_url: '#' 
//             },
//             { 
//                 link_id: 206,
//                 link_text: 'sitemap', 
//                 link_url: '#' 
//             },

//         ]
//     }
// ]


async function FooterTopRight() {

    const data = await fetchFooter();
    // Check if data is an empty object or if data.items is not an array
    if (!data || !Array.isArray(data)) {
        return;
    }

    return ( 
        <div className="xl:flex  xl:flex-grow xl:justify-center ">

            {data.map((item: any) => (
                <FooterLinkGroup group={item} key={item.id}/>
            ))}

        </div>
     );
}

export default FooterTopRight;