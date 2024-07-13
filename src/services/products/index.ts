
import { helebba } from '@/apiContast';
import { Product } from "helebba-sdk"




interface ProductsResponse {
    items: Product[];
    count: number;
    pageInfo: {
        // Define aquí las propiedades de pageInfo según lo que retorne tu API
    };
}

export async function GetProductsServer(): Promise<ProductsResponse> {
    try {
        const products = await helebba.listProducts();
        const { items, count, pageInfo } = products;
        return { items, count, pageInfo };
    } catch (error) {
        console.error('Error fetching products:', error);
        return { items: [], count: 0, pageInfo: {} as any };
    }
}
