'use client'

import { parseCookies, setCookie } from 'nookies'
import { ICartProduct, ProductItemType } from '@/types/cart-product'
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react'

enum ActionType {
  'add',
  'remove',
  'update'
}

interface IAction {
  type: keyof typeof ActionType
  payload: any
}

interface ICartContextData {
  cart: ICartProduct[]
  subTotal: number
  amountProducts: number
}
const CartContext = createContext({} as ICartContextData)
interface ICartDispatchContextData {
  dispatch: Dispatch<IAction>
}
const CartDispatchContext = createContext({} as ICartDispatchContextData)

function reducer(state: { cart: ICartProduct[] }, action: IAction) {
  switch (action.type) {
    case 'add': {
      const payload = action.payload as { product: ProductItemType }

      const product = state.cart.find(
        product => product.id === payload.product.id
      ) as ICartProduct
      if (product) {
        const newCart = state.cart.map(product => {
          if (product.id === payload.product.id) {
            return { ...product, amount: product.amount + 1 }
          }
          return product
        })
        return {
          ...state,
          cart: newCart
        }
      }
      return {
        ...state,
        cart: [...state.cart, { ...payload.product, amount: 1 }]
      }
    }
    case 'remove': {
      const payload = action.payload as { id: string }
      const newCart = state.cart.filter(product => product.id !== payload.id)
      return {
        ...state,
        cart: newCart
      }
    }
    case 'update': {
      const payload = action.payload as { id: string; amount: number }
      const newCart = state.cart.map(product => {
        if (product.id === payload.id) {
          return {
            ...product,
            amount: payload.amount
          }
        } else {
          return product
        }
      })

      return {
        ...state,
        cart: newCart
      }
    }
    default: {
      throw Error('Ação desconhecida: ' + action.type)
    }
  }
}

function createInitialState() {
  const cookies = parseCookies()
  const cart = cookies['@capputeeno-v0.1.0:cart']
  if (cart) {
    const typedCart = JSON.parse(cart) as ICartProduct[]
    return { cart: typedCart }
  } else {
    return { cart: [] }
  }
}

interface ICartContextProvider {
  children: ReactNode
}
export function CartContextProvider({ children }: ICartContextProvider) {
  const [state, dispatch] = useReducer(
    reducer,
    { cart: [] },
    createInitialState
  )

  useEffect(() => {
    setCookie(null, '@capputeeno-v0.1.0:cart', JSON.stringify(state.cart), {
      maxAge: 60 * 60 * 24 * 365,
      path: '/'
    })
  }, [state.cart])

  const subTotal = useMemo(() => {
    return state.cart.reduce((acc, currentProduct) => {
      return acc + currentProduct.amount * currentProduct.price_in_cents
    }, 0)
  }, [state.cart])

  const amountProducts = useMemo(() => {
    return state.cart.reduce((acc, currentProduct) => {
      return acc + currentProduct.amount
    }, 0)
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        subTotal,
        amountProducts
      }}
    >
      <CartDispatchContext.Provider value={{ dispatch }}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

export function useCartDispatch() {
  return useContext(CartDispatchContext)
}
