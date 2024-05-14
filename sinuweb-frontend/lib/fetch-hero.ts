async function fetchHero(){
    try {
        const response = await fetch('http://localhost:8000/api/v2/pages/3')
        const hero = await response.json();
        // await new Promise(resolve => setTimeout(resolve, 2000));
        return hero;
    } catch (error) {
        console.error("Error fetching hero:", error);
        return {}; // Return empty object if there's an error
    }
    
}

export default fetchHero;