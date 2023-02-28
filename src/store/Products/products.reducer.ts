import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialStateProductI, ProductsData } from '../../interfaces'


const InitialState: InitialStateProductI = {
  products: localStorage.products ? JSON.parse(localStorage.products) : [],
  products_loved: localStorage.products_loved ? JSON.parse(localStorage.products_loved) : []
}

const Products = createSlice({
  name: 'Products',
  initialState: InitialState,
  reducers: {
    addProducts(state, { payload }: PayloadAction<ProductsData[]>) {
      return { ...state, products: payload }
    }
  }
})

export default Products.reducer

export const { addProducts } = Products.actions

export const selectAllProducts = (state: any) => state.products.products as ProductsData[]