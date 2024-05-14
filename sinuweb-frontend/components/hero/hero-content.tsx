import fetchHero from "@/lib/fetch-hero";
import HeroLinks from "./hero-links";
import HeroParagraph from "./hero-paragraph";
import HeroText from "./hero-text";

async function HeroContent() {
    
    const hero = await fetchHero();
    let heroText = hero.hero_text;
    const heroParagraph = hero.hero_paragraph;

    return (
        <>
            <HeroText text={heroText} />
            <HeroParagraph paragraph={heroParagraph} />
            <HeroLinks />
        </>
    )
}

export default HeroContent;