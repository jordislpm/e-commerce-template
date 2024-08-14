"use client"
import React, { useEffect, useState } from 'react'
import styles from "./OverlayComponent.module.css"

interface OverlayComponentProps {
    isOpen: boolean;
    onClickOverlay: ()=> void;
}

function OverlayComponent({isOpen, onClickOverlay}:OverlayComponentProps) {

const [overlayOpen, setOverlayOpen]= useState<boolean>(false)

    const toggleOverlay = ()=>{
setOverlayOpen(false)
onClickOverlay();
    }

    useEffect(()=>{
        setOverlayOpen(isOpen)
    },[isOpen])


  return (
    <div
    className={`${styles.overlay} ${overlayOpen? styles.overlayActive : ''}`}
    onClick={toggleOverlay}>
</div>
  )
}

export default OverlayComponent