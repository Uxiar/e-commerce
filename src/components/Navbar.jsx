import React from 'react'
import logo from "../assets/logo.png"
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Navbar = () => {

  return (
    <header className='mx-auto flex py-5 items-center justify-between mb-10'>

      <div>
        <img src={logo} alt='logo' className='w-1/2 lg:w-full' />
      </div>

      <div className='flex gap-10 '>
        <Link to="/" className='text-red-500'>HOME</Link>
        <Link to="/AllProducts">ALL PRODUCTS</Link>
        <Link to='/CategoriesLists'>ALL CATEGORIES</Link>
        <a href='#'>ABOUT</a>
        <a href='#'>CONTACT</a>
        <a href='#'>ACCOUNT</a>
        <Link to="/shoppingCart" className='flex gap-2 items-center text-red-500'>$0.00<FaShoppingBag /></Link>
      </div>
    </header>
  )
}

export default Navbar
// hrd@mindcraft