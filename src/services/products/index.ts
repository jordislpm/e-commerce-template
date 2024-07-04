import { helebbaClient} from 'helebba-sdk';
import { ProductProps } from '@/types';

const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_API_URL } = process.env;


export const products = async () => {
    try {
        const apiKey = process.env.API_KEY || "";
        // if (!apiKey) {
        //     throw new Error("API key is missing");
        // }

        const helebba = helebbaClient(apiKey);
        const products = await helebba.listProducts();
        
      console.log(products)
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching products:", error.message);
        } else {
            console.error("Unknown error fetching products");
        }
        return null;
    }
};



