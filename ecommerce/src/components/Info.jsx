import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Info = () => {
    const info = [
        {
          icon: <FaShippingFast className='text-3xl text-red-500'  />,
          title: 'Free Shipping',
          description: 'Get your orders delivered with no extra cost'
        },
         {
          icon: <FaHeadset className='text-3xl text-red-500'  />,
          title: 'Support 24/7',
          description: 'Get your orders delivered with no extra cost'
        },
         {
          icon: <FaMoneyBillWave className='text-3xl text-red-500'  />,
          title: '100% Money Back',
          description: 'Your payment information is safe with us '
        },
         {
          icon: <FaLock className='text-3xl text-red-500'  />,
          title: 'Discount',
          description: 'Enjoy the best prices on our product'
        },
        {
          icon: <FaHeadset className='text-3xl text-red-500'  />,
          title: 'Support 24/7',
          description: 'Get your orders delivered with no extra cost'
        },
    ]
  return (
    

<div className='bg-white w-full pb-8 px-6 md:px-8  pt-12'>
  <div className='container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
    {info.map((item, index) => (
      <motion.div
        key={index}
        className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md cursor-pointer'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      >
        {item.icon}
        <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
        <p className='mt-2 text-gray-600'>{item.description}</p>
      </motion.div>
    ))}
  </div>
</div>

  )
}

export default Info

/*
<div className='bg-white pb-8 pt-12 '>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {info.map((item,index) => (
          <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'> 
            {item.icon}
            <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
            <p className='mt-2 text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
        
    </div> */