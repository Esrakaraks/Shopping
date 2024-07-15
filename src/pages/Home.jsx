import React, { useState } from 'react'
import SimpleSlider from '../components/SimpleSlider'
import CategoryFilter from '../components/CategoryFilter'
import Sorting from '../components/Sorting'
import ProductList from '../components/ProductList'
const Home = () => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  return (
    <>
      <SimpleSlider/>
      <Sorting setSort= {setSort} />
      <div className='flex'>
          <CategoryFilter setCategory = {setCategory} />
          <ProductList category = {category} sort= {sort} />
      </div>
    </>
    
  )
}
export default Home