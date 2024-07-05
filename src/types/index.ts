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

  export enum StatusType {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    ARCHIVED = 'archived',
    DELETED = 'deleted',
}

  export interface Base {
    _id?: string;
    uuid: string;
    status: StatusType;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface ProductCategory extends Base{
    name: string;
    image: string;
}
  export interface Product extends Base {
    name: string;
    brand: string;
    category: string | ProductCategory;
    price: number;
    wattage: number;
    description: string;
    images: string[];
    slug: string;
    color: string;
    sold: number;
    ratings: number;
    model: string;
    ranking: number;
    screen: Screen;
    benchmark: number;
    speed: string;
    cores: number;
    thread: number;
    cache: number;
    memory: string;
    type: string;
    form_factor: string;
    socket: string;
    max_memory: string;
    chipset: string;
    weight: number;
    track_stock: boolean;
    stock: number;
   }



