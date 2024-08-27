import CartFormShipping from '@/sections/Cart/CartPrincipal/CartFormShipping'
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