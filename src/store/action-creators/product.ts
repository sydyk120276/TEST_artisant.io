import { ProductAction, ProductActionTypes } from "../../types/product"
import { Dispatch } from "react"
import axios from "axios"

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS })
      const response = await axios.get('https://artisant.io/api/products')
      setTimeout(() => {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data.data.products,
        totalCount: response.data.data.products.length,
      });
      }, 2000)
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователя'
      })
    }
  }
}

export const sortProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: ProductActionTypes.FETCH_PRODUCTS })
      const response = await axios.get('https://artisant.io/api/products')
      setTimeout(() => {
      dispatch({
        type: ProductActionTypes.SORT_PRODUCT,
        totalCount: response.data.data.products.length,
        fiteredProduct: response.data.data.products.filter(
          (prod: any): any => prod.quantity_available > 0
        ),
      });
      }, 2000)
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователя'
      })
    }
  }
}