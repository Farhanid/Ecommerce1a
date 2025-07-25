import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { motion } from 'framer-motion'

const Shop = () => {
    const products =useSelector(state => state.product)
  return (
    <div className='w-full py-12 px-8 md:px-16 lg:px-24 '>

     <div className='max-w-7xl mx-auto '>
                <h2 className='text-2xl font-bold mb-6 text-center '>Shop</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6  cursor-pointer'
                >
                    {products.products.map((product,index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }} >
                           <ProductCard product={product}  />
                        </motion.div>

                    ))}
                </div>
            </div>
  </div>
  )
}

export default Shop