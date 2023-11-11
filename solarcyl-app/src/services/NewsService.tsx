export interface NewsObj {
    _type:                 string;
    readLink:              string;
    queryContext:          QueryContext;
    totalEstimatedMatches: number;
    sort:                  Sort[];
    value:                 Value[];
}

export interface QueryContext {
    originalQuery: string;
    adultIntent:   boolean;
}

export interface Sort {
    name:       string;
    id:         string;
    isSelected: boolean;
    url:        string;
}

export interface Value {
    name:          string;
    url:           string;
    image?:        ValueImage;
    description:   string;
    about?:        About[];
    provider:      Provider[];
    datePublished: Date;
    category?:     string;
    mentions?:     Mention[];
}

export interface About {
    readLink: string;
    name:     string;
}

export interface ValueImage {
    thumbnail: PurpleThumbnail;
}

export interface PurpleThumbnail {
    contentUrl: string;
    width:      number;
    height:     number;
}

export interface Mention {
    name: string;
}

export interface Provider {
    _type:  string;
    name:   string;
    image?: ProviderImage;
}

export interface ProviderImage {
    thumbnail: FluffyThumbnail;
}

export interface FluffyThumbnail {
    contentUrl: string;
}