
import { ReactNode } from "react";
import { Product, ProductVariant } from "helebba-sdk";


export interface ButtonPrimaryType{
  title?: string;
    buttonClick?: () => void;
    type?: 'button' | 'link';
    styleType?: 'primary' | 'secondary';
    href?: string;
    className?: string;
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


  
 
  
  export interface pageInfoType {
    page: number | null;
    pages: number | null;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    nextPage: number | null;
    previousPage: number | null;
  }
  
 


export interface categorieType{
  name: string;
  image: string,
  route: string;
}

export interface CartProductType extends Product {
  quantity: number;
  variantSelected?:ProductVariant|undefined;
}

export interface CartStateType {
  cart: CartProductType[];
  getTotalItems: () => number;
  getTotalValueItems: () => number;
  addProductToCart: (product: CartProductType) => void;
  removeProduct: (product: CartProductType) => void;
  increaseQuantity: (product: CartProductType) => void;
  decreaseQuantity: (product: CartProductType) => void;
}

export interface GlobalStateType {
  isMenuOpen: boolean;
  isCartOpen: boolean;
  showProductDetails: boolean;
  productForShowDetails: CartProductType | null;
  slugForGetProduct: string;
  setSlugForGetProduct: (slug: string)=> void;
  setProductForShowDetails: (product: CartProductType |null ) => void;
  toggleMenu: () => void;
  toggleCart: () => void;
  toggleShowProductDetails: () => void;

}


export interface VariantSelectedType {
  color: string;
  size: string;
  haveSize: boolean,
  haveColor:boolean,
}

export interface VariantSelectedGlobaType {
  theVariantSelected: VariantSelectedType;
  isVariantAvailable: boolean;
  setTheVariantSelected: (variant: Partial<VariantSelectedType>) => void;
  setIsVariantAvailable: (availability: boolean) => void;
}

export interface RouteProps {
  name: string;
  route: string;
  subRoutes: SubRoutesProps[];
}

export interface SubRoutesProps{
  name: string;
  route: string;
  slug: string;
}

export interface RoutesStateProps {
  routes: RouteProps[];
  setRoutes: (routes: RouteProps[]) => void;
}

export interface CategoryProps {
  name: string;
  type: string;
  options: any[];
  image: string;
  status: string;
  account: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}