import { useEffect, useState } from 'react';
import { Product } from "helebba-sdk";
import useGlobalStores from '../global-state/useGlobalStates';
import { CartProductType } from '@/types';



interface UseProductResult {
  product: CartProductType | null;
  loading: boolean;
  error: string | null;
}

export const useGetProduct = (slug: string): UseProductResult => {
  const [product, setProduct] = useState<CartProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const {setProductForShowDetails, productForShowDetails} = useGlobalStores();


  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/getProduct?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Product = await response.json();

        const newResult: CartProductType = {...result, quantity : 1}
        setProduct(newResult);
        setProductForShowDetails(newResult)
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug, setProductForShowDetails]);

  return { product, loading, error };
};