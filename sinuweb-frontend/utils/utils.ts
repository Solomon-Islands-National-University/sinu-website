

function getFirst20Words(str: string) {
    // Match the first 20 words using a regular expression
    const match = str.match(/^(\S+\s*){1,20}/);
    // Return the matched words or an empty string if there's no match
    return match ? match[0] : '';
}

// Function to format the date
function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function cleanData(data: any){
    const linkGroups: any[] = [];
    
    data.link_groups.forEach((linkGroup: any, index: number) => {

        let newLinks: any[] = []

        let newLinkGroup = {id: 0, groupTitle: '', links: newLinks };
        newLinkGroup['id'] = index;
        newLinkGroup['groupTitle'] = linkGroup.title;

        

        linkGroup.footer_links.forEach((link: any, index: number) => {            
            let newLink = {id: 0, linkTitle: '', pageApiEndpoint: '', externalUrl: ''};
            newLink['id'] = index;
            newLink['linkTitle'] = link.link_title;
            newLink['pageApiEndpoint'] = link.page_link.meta.detail_url;
            newLink['externalUrl'] = link.external_url;
            newLinks.push(newLink);
        });

        newLinkGroup['links'] = newLinks;

        linkGroups.push(newLinkGroup);

    });

    return linkGroups;
}

function removeDataBlockKeyAttributes(htmlContent: any) {
    // Regular expression to match data-block-key attributes and their values
    const regex = /data-block-key="[^"]*"/g;
    
    // Remove data-block-key attributes from the HTML content
    const cleanedContent = htmlContent.replace(regex, '');
    return cleanedContent;
}

function insertLineBreaks(htmlContent: any) {
     // Replace closing tags followed by opening tags with the closing tag followed by a line break and opening tag
  const updatedContent = htmlContent.replace(/><(?=[^/])/g, '><br/><');
  
  return updatedContent;
}

export { formatDate, getFirst20Words, cleanData, insertLineBreaks, removeDataBlockKeyAttributes };