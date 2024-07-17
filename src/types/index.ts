
import { ReactNode } from "react";
import { Product } from "helebba-sdk";


export interface ButtonPrimaryType{
  title?: string;
    buttonClick?: () => void;
    type?: 'button' | 'link';
    styleType?: 'primary' | 'secondary';
    href?: string;
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

export interface ChildrenType {
    children?: ReactNode;
  }



  export interface CouponType {
    name: string;
    value: number;
  }

  export enum StatusType {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    ARCHIVED = 'archived',
    DELETED = 'deleted',
}

  export interface BaseType {
    _id?: string;
    uuid: string;
    status: StatusType;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface VariantType {
    variantId: string;
    barcode: string;
    sku: string;
    price: number;
    cost: number;
    purchasePrice: number;
    stock: number;
  }
  
  export interface ProductType {
    kind: string;
    name: string;
    desc: string;
    contactName: string;
    price: number;
    inCatalog: boolean;
    tags: string[];
    images: string[];
    status: 'active' | 'inactive';
    account: string;
    variants: VariantType[];
    notes: string[];
    slug: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  }
  
  export interface pageInfoType {
    page: number | null;
    pages: number | null;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    nextPage: number | null;
    previousPage: number | null;
  }
  
  export interface ItemListType {
    items: ProductType[];
    pageInfo: pageInfoType;
  }


export interface categorieType{
  name: string;
  image: string,
  route: string;
}

export interface CartProductType extends Product {
  quantity: number;
}

export interface CartStateType {
  cart: CartProductType[];
  getTotalItems: () => number;
  getTotalValueItems: () => number;
  addProductToCart: (product: CartProductType) => void;
  removeProduct: (id: string) => void;
}

export interface GlobalStateType {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  toggleMenu: () => void;
  toggleCart: () => void;
}