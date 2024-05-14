interface LinkGroup {
    id?: number;
    groupTitle?: string;
    links?: Array<Link>;
}

interface Link {
    id?: number;
    linkTitle?: string;
    externalUrl?: string; 
    pageApiEndpoint?: string; 
}

export type { Link, LinkGroup };