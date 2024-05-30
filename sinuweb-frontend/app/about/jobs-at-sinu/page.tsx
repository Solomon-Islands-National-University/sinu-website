import NewsContent from "@/components/news-page/news-content";
import Container from "@/ui/container";


async function JobsPage({params}: {params: {slug: string}}) {
        
    return ( 
        <>
            <div className="py-8">
                <Container>
                JOBS AT SINU
                </Container>
            </div>
        </>
     );
}

export default JobsPage;