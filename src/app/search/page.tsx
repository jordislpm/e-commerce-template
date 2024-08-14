"use client"
import Catalog from '@/components/Share/Catalog'
import ProductsSection from '@/components/Share/ProductsSection'
import useSearchStore from '@/hooks/global-state/useSearchGlobal'
import SearchPrincipal from '@/sections/Search/SearchPrincipal'
import React from 'react'

function Search() {



  return (
    <div>
      <SearchPrincipal />
    </div>
  )
}

export default Search