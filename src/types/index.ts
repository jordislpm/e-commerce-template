export interface ButtonPrimaryType{
    title?: string;
    buttonClick?: ()=> void;
}

export interface SubRoutesType{
    name: string;
    route: string; 
}

export interface RoutesListType{
    name: string;
    route: string;
    subRoutes?: SubRoutesType[];
}

