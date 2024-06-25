import { gql } from '@apollo/client';
import createApolloClient from '@/lib/apollo/client';
import FooterLinkGroup from './footer-link-group';

const fetchMenus = async() => {

  const GET_LINK_GROUPS = gql`
    query getLinkGroups {
        footer {
            linkGroups {
                links {
                    title
                    url
                    openNewTab
                }
                menuTitle
            }
        }
    }
  `;

  const client = createApolloClient();
  const{ data, loading, networkStatus } = await client.query({
      query: GET_LINK_GROUPS
  });
  const { footer } = data;
  if (footer == null){
    return null;
  }
  else {
      return footer.linkGroups;
  }
}


async function FooterTopRight() {

  const menus = await fetchMenus();
  if (menus == null){
    return <div>NO Footer</div>
  }
  
  return ( 
      <>
      <div className="xl:flex  xl:flex-grow xl:justify-center ">
          {menus.map((menu: any) => (
          <FooterLinkGroup 
            key={menu.title} 
            menu={menu} 
        />
        ))}
      </div>
      </>
  );
}

export default FooterTopRight;