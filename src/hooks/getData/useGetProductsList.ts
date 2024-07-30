import { useEffect, useState } from 'react';
import { Product, Result } from "helebba-sdk";
import useGlobalStores from '../global-state/useGlobalStates';
import { CartProductType } from '@/types';



interface UseProductResult {
  productsList: Result<Product> | null;
  loading: boolean;
  error: string | null;
}

export const useGetProductsList = (): UseProductResult => {
  const [productsList, setProductsList] = useState<Result<Product> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/getProductsList`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Result<Product> = await response.json();

        if (result){
          setProductsList(result);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
      fetchProduct();

  }, []);

  return { productsList, loading, error };
};