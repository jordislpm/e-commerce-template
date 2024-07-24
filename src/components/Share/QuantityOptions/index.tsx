import React from 'react'
import styles from "./QuantityOptions.module.css"


interface QuantityOptionsProps{
    quantity: number;
    increaseAction: ()=> void;
    decreaseAction: ()=> void;
}

function QuantityOptions({quantity, increaseAction, decreaseAction}: QuantityOptionsProps) {

    const increaseQuantity = ()=>{
        increaseAction()
    }
    const decreaseQuantity = ()=>{
        decreaseAction()
    }
  return (
    <div className={styles.quantity_opcions}>
    <button 
    className={styles.quantity_opcions__button}
    onClick={decreaseQuantity}
    >-</button>
    {quantity}
    <button 
    className={styles.quantity_opcions__button}
    onClick={increaseQuantity}
    >+</button>
    </div>
  )
}

export default QuantityOptions