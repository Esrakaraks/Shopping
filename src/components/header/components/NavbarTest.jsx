import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector} from 'react-redux';
import { getCartQuantityTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
const NavbarTest = () => {
  const dispatch = useDispatch()
  const {totalQuantity} = useSelector(state => state.cart);
  const navigate = useNavigate();
  useEffect(() =>{
    dispatch(getCartQuantityTotal())
  },[dispatch])
  return (
     <div className='flex justify-between mt-10'>
        <div className='text-4xl cursor-pointer' onClick={() => navigate('/')}>SHOPING</div>
        <div className='flex justify-between items-center'>
        <div className='flex items-center border p-3 rounded mr-3'>
          <input type="text" placeholder="search"/>
          <CiSearch size={25} className='mr-3'/>
        </div>
        
        <CiHeart size={28} className='mr-3' />
        
        <div className='relative'>
        <SlBasket size={28}/>
        <div className='absolute -top-3 -right-3 flex items-center justify-center  bg-red-500 rounded-full w-5 h-5'>
          {totalQuantity}
        </div>
        </div>
        </div>
      </div>
  )
}

export default NavbarTest