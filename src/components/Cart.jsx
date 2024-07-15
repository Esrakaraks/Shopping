import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state.cart);
  const [quantityMap, setQuantityMap] = useState({});

  useEffect(() => {
    const initialQuantityMap = {};
    cart.forEach(item => {
      initialQuantityMap[item.id] = item.quantity;
    });
    setQuantityMap(initialQuantityMap);
  }, [cart]);

  const decrement = (itemId) => {
    setQuantityMap(prevMap => ({
      ...prevMap,
      [itemId]: Math.max(prevMap[itemId] - 1, 0)
    }));
  };

  const increment = (itemId) => {
    setQuantityMap(prevMap => ({
      ...prevMap,
      [itemId]: prevMap[itemId] + 1
    }));
  };
  return (
    <>
    Cart Page
    {
      cart.map((item,index)=> (
        <div key={index} className="flex ">
          <img src={item.image} className='w-[150px]' onClick={() => navigate(`/products/${item.id}`)}/>
          <div>
            {item.title}
            <div className='flex'>
            <CiSquareMinus
                className='text-2xl cursor-pointer'
                onClick={() => decrement(item.id)}
              />
              <p className="mx-2">{quantityMap[item.id]}</p>
              <CiSquarePlus
                className='text-2xl cursor-pointer'
                onClick={() => increment(item.id)}
              />
              <button type='button'onClick={()=>dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
      </div>
      ))
    }
    </>
  );
}

export default Cart