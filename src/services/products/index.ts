import { categories } from './../../contast';
import type { NextApiRequest, NextApiResponse } from 'next';
import { helebba } from '@/apiContast';
import { Result, Product, Category } from "helebba-sdk"
;




interface ProductsResponse {
    items: Product[];
    count: number;
    pageInfo: {
        // Define aquí las propiedades de pageInfo según lo que retorne tu API
    };
}

export async function getProductsListHandler(): Promise<Result<Product>> {
    try {
        const products = await helebba.listProducts();
        const { items, count, pageInfo } = products;
        return { items, count, pageInfo };
    } catch (error) {
        console.error('Error fetching products:', error);
        return { items: [], count: 0, pageInfo: {} as any };
    }
}

/// get one product



export const getProductHandler = async (slug: string): Promise<Product> => {
    try {
      const product = await helebba.getProduct(slug);
      return product;
    } catch (error) {
      throw new Error('Error fetching product data');
    }
  };


  export async function getProductsCategories(): Promise<Result<Category>> {
    try {
        const categories = await helebba.listCategories();
        const { items, count, pageInfo } = categories;
        return { items, count, pageInfo };
    } catch (error) {
        console.error('Error fetching categories:', error);
        return { items: [], count: 0, pageInfo: {} as any };
    }
}