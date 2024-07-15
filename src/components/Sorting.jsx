const Sorting = ({setSort}) => {
  return (
    <div className='flex justify-end items-center my-10 p-5 bg-gray-100 '>
        <select onChange={e => setSort(e.target.value)}  className='bg-white-300 py-3 px-5 '>
            <option disabled value="">Select</option>
            <option value="inc">Increasing</option>
            <option value="desc">Decreasing</option>
        </select>
    </div>
  )
}

export default Sorting