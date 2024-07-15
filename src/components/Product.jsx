import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
    const navigate = useNavigate();
  return (
    <div className='cursor-pointer' onClick={() => navigate(`products/${product?.id}`)}>
        <img src={product.image} className="w-[200px] object-cover h-[200px]  m-auto" alt="" />
        <div className='font-bold'>{product.title}</div>
        <div className='font-bold'>{product.price}</div>
    </div>
  )
}

export default Product