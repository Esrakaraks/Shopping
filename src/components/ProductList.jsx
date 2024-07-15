import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/productsSlice';
import { fetchCategoriesFilter } from '../redux/productsSlice';
import { productSorting } from '../redux/productsSlice';
import Loading from './Loading';
import Product from './Product';

const ProductList = ({category, sort}) => {
  const dispatch = useDispatch();
  const {products, productStatus} = useSelector(state => state.products);
  useEffect(() =>{
    if (category) {
      dispatch(fetchCategoriesFilter(category))
    } else if (sort) {
      dispatch(productSorting(sort))
    }  else {
      dispatch(fetchProducts())
    } 
  },[dispatch,category, sort])
  return (
    <div className='flex-auto ml-10'>
      {
        productStatus === 'LOADING' ? <Loading/> : 
        <div className='grid grid-cols-3'>
           {
        products.map((product, index) => (
          <Product key={index} product={product}/>
        ))
      }
        </div>
      }
    </div>
  )
}

export default ProductList