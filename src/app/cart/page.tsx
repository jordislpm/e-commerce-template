import CartFormShipping from '@/sections/Cart/CartFormShipping'
import CartPrincipal from '@/sections/Cart/CartPrincipal'
import React from 'react'

function Cart() {
  return (
    <div>
      <CartPrincipal/>
      <CartFormShipping/>
    </div>
  )
}

export default Cart