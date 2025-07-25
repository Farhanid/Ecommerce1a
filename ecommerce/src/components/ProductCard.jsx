import React from 'react'
import { FaStar } from 'react-icons/fa'
import  {addToCart} from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = (e, product) => {
        e.stopPropagation()
        e.preventDefault()
        dispatch(addToCart(product))
        alert("product Added Sucessfully!")
    }
  return (

<div className=''>

<Link to={`/product/${product.id}`}>
  <div
    className="bg-white p-4 md:p-4  shadow-lg rounded-lg relative border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
   
  >
    <img
      src={product.image}
      alt=""
      className="w-full h-48 object-contain mb-4 transition duration-300 hover:scale-105"
    />
    <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
    <p className="text-red-600 font-semibold mt-1">${product.price}</p>

    <div className="flex items-center mt-2 space-x-1">
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
    </div>

    <div
      className="absolute bottom-4 right-2 flex hover:items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 overflow-hidden transition-all duration-300 cursor-pointer shadow-md hover:bg-red-700"
      onClick={(e) => handleAddToCart(e, product)}
    >
      <span className="group-hover:hidden font-bold text-lg">+</span>
      <span className="hidden group-hover:block whitespace-nowrap pl-3 text-sm font-medium tracking-wide">Add to Cart</span>
    </div>
  </div>
</Link>

</div>

  )
}

export default ProductCard

/* <Link to={`/product/${product.id}`}>
  <div className="bg-white p-4 shadow-lg rounded-lg relative border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <img
      src={product.image}
      alt=""
      className="w-full h-48 object-contain mb-4 transition duration-300 hover:scale-105"
    />
    <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
    <p className="text-red-600 font-semibold mt-1">${product.price}</p>

    <div className="flex items-center mt-2 space-x-1">
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
      <FaStar className="text-yellow-400" />
    </div>

    <div
  className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 overflow-hidden transition-all duration-300 cursor-pointer shadow-md hover:bg-red-700"
  onClick={(e) => handleAddToCart(e, product)}
>
  <span className="group-hover:hidden font-bold text-lg">+</span>
  <span className="hidden group-hover:block whitespace-nowrap pl-3 text-sm font-medium tracking-wide">Add to Cart</span>
</div>

  </div>
</Link> */