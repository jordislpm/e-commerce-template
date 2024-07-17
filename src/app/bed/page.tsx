import ProductsSection from '@/components/Share/ProductsSection';
import BedPrincipal from '@/sections/Bed/BedPrincipal';
import React from 'react';


function Bed() {
  return (
    <>
    <ProductsSection title="cama" filter='bed' cloud={true}/>
    </>
  )
}

export default Bed