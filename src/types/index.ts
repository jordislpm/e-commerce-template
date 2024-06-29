export interface ButtonPrimaryType{
    title?: string;
    buttonClick?: ()=> void;
}

export interface SubRoutesType{
    name: string;
    route: string; 
}

export interface RoutesDataType{
    name: string;
    route: string;
    subroutes?: SubRoutesType[];
}

