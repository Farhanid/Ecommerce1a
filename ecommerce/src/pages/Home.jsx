import React from 'react'
import { Categories, mockData } from '../assets/MockData'
import shop from '../assets/images/shop.webp'
import Info from '../components/Info'
import Category from '../components/Category'
import {setProducts} from '../Redux/ProductSlice'
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'
import { motion } from 'framer-motion'

const Home = () => {
    const dispatch =useDispatch();
    const products =useSelector(state => state.product)
    useEffect(() => {
       dispatch(setProducts(mockData) )
    },[])
  return (
    <div>
    <div className='bg-white w-full mt-2 px-4 md:px-16 lg:px-24'>
         <div className='container max-w-7xl mx-auto py-4 flex flex-col md:flex-row space-x-4'>
            <div className='w-full   '>
             
                     <div className='bg-red-600  text-white text-xs font-bold px-2 py-2.5'> SHOP BY CATEGORIES</div>
                       <ul className='space-y-4 bg-gray-100 p-3 border'>
                    {Categories.map((category, index) => (
                <li key={index} className='flex items-center text-sm font-medium'>
                    <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                
                    {category}
                </li>
                    ))}
                </ul>
                </div>
               
                 <div className='w-full md:w-12/12 mt-8 relative'>
                    <img src={shop} alt="" className=' w-full max-w-[1000px] h-auto object-cover' />
                    <div className='absolute top-0 md:top-5 left-3 md:left-8'>
                        
                        <h2 className='text-xl  md:text-3xl font-bold text-red-600'>Welcome to E-shop</h2>
                        <p className=' text-lg md:text-xl mt-2.5 md:font-bold text-orange-500 '>MILLIONS+PRODUCTS</p>
                        <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
                    </div>

                </div>
            </div>
            <Info />
            <Category />

            <div className='container max-w-7xl mx-auto px-4 py-12'>
                <h2 className='text-2xl font-bold mb-6 text-center head '>Top Products</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6  cursor-pointer'>
                    {products.products.slice(0,5).map((product,index) => (
                        <motion.div key={index}   whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }} >
                           <ProductCard product={product}  />
                        </motion.div>

                    ))}
                </div>
            </div>
           
         </div>
          <Shop />
          </div>
  
  )
}

export default Home