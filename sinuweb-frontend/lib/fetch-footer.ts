import { cleanData } from '@/utils/utils';

async function fetchFooter(){


    try {

      const response = await fetch(`http://localhost:8000/api/v2/footer/1/?${new URLSearchParams({
        type: "snippets.Footer",
      })}`);

      let data = await response.json();
      data = cleanData(data); 
      return data;
    } catch (error) {
      return null;
    }

  
    
      
}

export default fetchFooter;