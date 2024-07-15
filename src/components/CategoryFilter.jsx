import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categorySlice';

const CategoryFilter = ({setCategory}) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className='w-1/2 cursor-pointer '>
            <div className='font-bold'>Category Filter</div>
            {categories && categories?.map((category, index) => (
                <div key={category} className={`border-b-2 border-gray-500 pt-4 pb-2 ${index === categories.length - 1 ? 'border-b-2' : ''}`}>
                    <button onClick={() => setCategory(category)}>{category}</button>
                </div>
            ))}
        </div>
    );
}

export default CategoryFilter;
