"use client"
import React from 'react'
import Catalog from '@/components/Share/Catalog'
import { MdOutlineCloud } from "react-icons/md";
import { useProducts } from '@/hooks/useProducts';

function HomeCatalog() {

    const { products } = useProducts();
  return (
    <div>
        <h2>
        <MdOutlineCloud />
            DESCUBRE EL DESCANSO PERFECTO
        <MdOutlineCloud />
        </h2>
       <Catalog>

       </Catalog>
    </div>
  )
}

export default HomeCatalog