// "use client"
// import { useEffect, useState } from 'react';
// import { fetchProducts } from '@/services/products';
// import { Product } from "helebba-sdk"


// export function useProductData() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productsData = await fetchProducts();
//         setProducts(productsData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { products, loading };
// }