import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close aside

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu - Open/Close aside

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail - Show Product in aside

  const [productToShow, setProductToShow] = useState({
    title: '',
    price: '',
    description: '',
    images: []
  })

  // Shopping cart - Add Product to cart
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      openCheckoutSideMenu,
      closeProductDetail,
      closeCheckoutSideMenu,
      isProductDetailOpen,
      isCheckoutSideMenuOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
