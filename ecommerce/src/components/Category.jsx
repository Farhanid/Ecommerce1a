import React from 'react'
import img1 from '../assets/images/kidimg.png'
import img2 from '../assets/images/menimg.png'
import img3 from '../assets/images/womenimg.png'
  import { motion } from 'framer-motion';
const Category = () => {
    const categories = [
        {
            title: 'men',
            img: img2,
        },
         {
            title: 'women',
            img: img3,
        },
         {
            title: 'kids',
            img: img1,
        },
    ]
  return (
 

<div className='container max-w-7xl px-6 md:px-8 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0 md:gap-4 cursor-pointer'>
  {categories.map((cat, index) => (
    <motion.div
      key={index}
      className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={cat.img}
        alt=""
        className='w-full max-w-[300px] h-[200px] rounded-lg object-cover'
      />
      <div className='absolute top-20 left-12'>
        <p className='text-xl font-bold'>{cat.title}</p>
        <p className='text-gray-500'>View All</p>
      </div>
    </motion.div>
  ))}
</div>

  )
}

export default Category