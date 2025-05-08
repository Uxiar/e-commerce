import React from 'react'
import logo from "../assets/logo (2).png"
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Navbar = () => {

  return (
    <header className='flex py-5 items-center justify-between pr-10 '>

      <div>
        <img
          src={logo}
          alt='logo'
          width={140} />
      </div>

      <div className='flex gap-8'>
        <Link to="/" className='text-red-500 '>HOME</Link>
        <Link to="/AllProducts">ALL PRODUCTS</Link>
        <Link to='/CategoriesLists'>ALL CATEGORIES</Link>
        <a href='#'>ABOUT</a>
        <a href='#'>CONTACT</a>
        <select name="Account" id="">
        <option>ORDERS</option>
        <option>LOGOUT</option>
        </select>
        <Link to="/shoppingCart" className='flex gap-2 items-center text-red-500'>$0.00<FaShoppingBag /></Link>
      </div>
    </header>
  )
}

export default Navbar
// hrd@mindcraft