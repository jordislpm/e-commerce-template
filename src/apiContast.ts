import { helebbaClient, Product } from "helebba-sdk";

export const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";
export const helebba = helebbaClient(apiKey);