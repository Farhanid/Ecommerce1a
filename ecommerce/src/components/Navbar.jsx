import { NavLink, useNavigate } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { useState } from 'react'
import { setSearchTerm } from '../Redux/ProductSlice'
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [search, setSearch] =useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const handleSearch = (e) => {
         e.preventDefault()
         dispatch(setSearchTerm(search))
         navigate('/filter-data')


  }

  const openSignUp = () => {
    setIsLogin(false)
    setIsModelOpen(true)
  }

  const openLogin = () => {
    setIsLogin(true)
    setIsModelOpen(true)
  }

  const products = useSelector(state => state.cart.products)
  return (
   
   

<motion.nav
  className='bg-white shadow-md w-full'
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <div className='container max-w-7xl mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
    <div className='text-lg font-bold'>
      <h1 className="text-3xl font-bold">E-shop</h1>
    </div>

    <div className='relative flex-1 mx-4'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products"
          className='w-full border py-2 px-4'
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className='absolute top-3 right-3 text-red-500' />
      </form>
    </div>

    <div className='flex items-center space-x-4'>
      <NavLink to='/cart' className='relative'>
        <FaShoppingCart className='text-lg' />
        {products.length > 0 && (
          <span className='absolute top-0 w-3 text-xs left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
            {products.length}
          </span>
        )}
      </NavLink>
      <button className='hidden md:block head' onClick={() => setIsModelOpen(true)}>
        Login | Register
      </button>
      <button className='block md:hidden '>
        <FaUser />
      </button>
    </div>
  </div>

  {/* Animate menu links as well */}
  <motion.div
    className='flex items-center justify-center space-x-12 px-4 md:px-0 py-4'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.5 }}
  >
    <NavLink to="/" className='hover:underline head font-bold'>Home</NavLink>
    <NavLink to="/shop" className='hover:underline head font-bold'>Shop</NavLink>
    <NavLink to="/" className='hover:underline head font-bold'>Contact</NavLink>
    <NavLink to="/" className='hover:underline head font-bold'>About</NavLink>
  </motion.div>

  <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
    {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
  </Modal>
</motion.nav>

  )
}

export default Navbar

/* <nav className='bg-white shadow-md' >
    <div className='container mx-auto px-4 md:px-16  lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
            <h1 className="text-3xl font-bold">E-shop</h1>
        </div>
          <div className='relative flex-1  mx-4 '>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search products" className='w-full border py-2 px-4' 
                onChange={(e) => setSearch(e.target.value)} />
                <FaSearch className='absolute top-3 right-3 text-red-500' />
            </form>
          </div>

            <div className='flex items-center space-x-4'>
                <NavLink to='/cart' className='relative'>
                   <FaShoppingCart className='text-lg' />
                   {products.length > 0 && (
                        <span className='absolute top-0 w-3 text-xs left-3 bg-red-600 rounded-full flex justify-between items-center text-white'>
                           {products.length}
                        </span>
                   )}
                </NavLink>
                <button className='hidden md:block'
               onClick={() => setIsModelOpen(true)}   >
                    Login | Register
                </button>
                 <button className='block md:hidden '>
                    <FaUser />
                 </button>
            </div>
    </div>
    <div className='flex items-center justify-center space-x-12 py-4'>
        <NavLink to="/" className='hover:underline  font-bold'>Home</NavLink>
        <NavLink to="/shop" className='hover:underline  font-bold'>Shop</NavLink>
        <NavLink to="/" className='hover:underline  font-bold'>Contact</NavLink>
        <NavLink to="/" className='hover:underline font-bold'>About</NavLink>
    </div>

    <Modal  isModelOpen={isModelOpen}  setIsModelOpen={setIsModelOpen} >
      {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
    </Modal>
    </nav>*/