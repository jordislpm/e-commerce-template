"use client"
import { useEffect } from 'react';
import { Product, Result } from "helebba-sdk";
import { CartProductType } from '@/types';
import useGlobalStores from '../global-state/useGlobalStates';
import { useQuery } from '@tanstack/react-query';
import _ from 'lodash';




interface UseProductResult {
  productsListQuery: any;
  loading: boolean;
  error: string | null;
}



const fetchProduct = async (): Promise<Result<Product>> => {
  const response = await fetch(`/api/getProductsList`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result: Result<Product> = await response.json();
  return result;
};

export const useGetProductsListQuery = (): UseProductResult => {

  const { setLocalAllProductsList} = useGlobalStores();
 

  const query = useQuery<Result<Product>, Error>({
    queryKey: ['productsList'],
    queryFn: fetchProduct,

      refetchInterval: 240000,
      refetchOnWindowFocus: true,
      staleTime: 5000,
    
  });

  const { data, error, isLoading: loading, isSuccess } = query;

  const productsListQuery = data ?? null;
  useEffect(()=>{
    if (isSuccess && data){

      setLocalAllProductsList(data.items);
    }
  },[isSuccess, data, setLocalAllProductsList])
  return {
    productsListQuery,
    loading,
    error: error ? error.message : null,
  };

};




