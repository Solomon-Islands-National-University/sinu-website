import fetchHero from "@/lib/fetch-hero";
import HeroLinks from "./hero-links";
import HeroParagraph from "./hero-paragraph";
import HeroText from "./hero-text";

async function HeroContent() {
    
    const hero = await fetchHero();
    let heroText = hero.hero_text;
    const heroParagraph = hero.hero_paragraph;

    return (
        
            <div className=" sm:gap-y-12 px-8 h-full w-screen  flex flex-col justify-center sm:justify-center lg:w-3/4 3xl:w-2/3 3xl:px-52 gap-y-16  ">

                <HeroText text={heroText} />
                <HeroParagraph paragraph={heroParagraph} />
                <HeroLinks />

            </div>
    )
}

export default HeroContent;