import { helebbaClient } from 'helebba-sdk';

const { NEXT_PUBLIC_API_KEY } = process.env;
const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

const helebba = helebbaClient(apiKey);


export const products = async () => {
   
    try {
       
        if (!apiKey) {
            throw new Error("API key is missing");
        }
  
        const products = await helebba.listProducts();
        console.log(products);
        return products;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error fetching products:", error.message);
        } else {
            console.error("Unknown error fetching products");
        }
        return null;
    }
};



