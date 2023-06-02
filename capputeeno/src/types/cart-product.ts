import { IProduct } from './product'

export type ProductItemType = Omit<
  IProduct,
  'category' | 'created_at' | 'sales'
>
export interface ICartProduct extends ProductItemType {
  amount: number
}
