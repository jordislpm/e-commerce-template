import { ReactNode } from "react";

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

export interface ChildrenProps {
    children?: ReactNode;
  }

  export   interface ProductProps {
    id: string;
    slug: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  export interface CouponProps {
    name: string;
    value: number;
  }

