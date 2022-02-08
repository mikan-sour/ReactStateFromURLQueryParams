export interface Params {
    text?:string
    dateFrom?:string,
    dateTo?:string,
    countries?:string[],
    areas?:string[],
    isLimited?:boolean,
    categories?:string[]
}

export type ParamKey = 'text'|'dateFrom'|'dateTo'|'countries'|'areas'|'isLimited'|'categories'

export interface Rating {
    rate: number;
    count: number;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export type TUrlParams = {
    id: string;
};