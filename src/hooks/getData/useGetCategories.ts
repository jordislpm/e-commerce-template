"use client"
import { categories } from './../../contast';
import { useEffect, useState } from 'react';
import { Result, Category } from "helebba-sdk";
import useGlobalStores from '../global-state/useGlobalStates';
import { CartProductType } from '@/types';



interface UseProductResult {
  categoriesList: Result<Category> | null;
  loading: boolean;
  error: string | null;
}

export const useGetCategoriesList = (): UseProductResult => {
  const [categoriesList, setCategoriesList] = useState<Result<Category> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/getCategoriesList`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: Result<Category> = await response.json();

        if (result){
          setCategoriesList(result);
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
      fetchProduct();

  }, []);

  return { categoriesList, loading, error };
};