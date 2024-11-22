"use client"

import { useState } from "react"
import { StoreContext } from "../context"

export default function StoreProvider({children}){
  const [cartData, setCartData] = useState([])
  const [wishlistData, setWishlistData] = useState([])

  return(
    <StoreContext.Provider value={{cartData, setCartData, wishlistData, setWishlistData}}>
           {children}
    </StoreContext.Provider>
  )
}