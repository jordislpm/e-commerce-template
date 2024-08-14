"use client"
import { useEffect, useState } from 'react';
import { Product } from "helebba-sdk";
import useGlobalStores from '../global-state/useGlobalStates';
import { CartProductType } from '@/types';



interface UseProductResult {
  oneProduct: CartProductType | null;
  loading: boolean;
  error: string | null;
}

export const useGetProduct = (): UseProductResult => {
  const [oneProduct, setOneProduct] = useState<CartProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { slugForGetProduct} = useGlobalStores();


  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/getProduct?slug=${slugForGetProduct}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Product = await response.json();

        const newResult: CartProductType = {...result, quantity : 1}
        setOneProduct(newResult);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };


      fetchProduct();

  }, [ slugForGetProduct]);

  return { oneProduct, loading, error };
};