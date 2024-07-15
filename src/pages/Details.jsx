import React, { useEffect } from 'react'
import { getProductDetails, decrement,increment } from '../redux/productDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { addToBag } from '../redux/cartSlice';

const Details = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {productsDetails, count } = useSelector(state => state.productDetail);
    useEffect(() =>{
        dispatch(getProductDetails(id))
      },[dispatch,id])
    const handleClick = () => {
      navigate("/Cart");
      dispatch(
        addToBag({
          id: productsDetails?.id,
          quantity: count,
          title: productsDetails?.title,
          image: productsDetails?.image,
          price: productsDetails?.price,
        })
      );
    };
  return (
    <div className="flex mt-20">
      <img
        src={productsDetails.image}
        className="w-full object-cover h-[200px] m-auto cursor-pointer"
        alt=""
      />
      <div>
        <div className="font-bold">{productsDetails.title}</div>
        <div>{productsDetails.description}</div>
        <div>{productsDetails.price}</div>
        <div className="flex">
          <CiSquareMinus
            className="text-2xl"
            onClick={() => dispatch(decrement())}
          />
          {count}
          <CiSquarePlus
            className="text-2xl"
            onClick={() => dispatch(increment())}
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default Details