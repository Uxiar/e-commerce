import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';



const Footer = () => {
    return (
        <div>
            <div className='bg-neutral-500 flex justify-between items-center py-14 px-[200px]'>
                <div className='flex flex-row gap-20 text-neutral-50'>
                    <div className='flex flex-col'> 
                        <a href='#'>Home</a>
                        <a href='#'>About HDX</a>
                        <a href='#'>My Account</a>
                    </div>

                    <div className='flex flex-col'>
                        <a href='#'>Tshirts</a>
                        <a href='#'>Jeans</a>
                        <a href='#'>contact</a>
                    </div>
                </div>

                <div className='flex gap-2 text-neutral-500'>
                    <a href='#' className='p-2 bg-neutral-50'>
                        < FaFacebook className='text-2xl' />
                    </a>
                    <div className='p-2 bg-neutral-50'>
                        < FaTwitter className='text-2xl' />
                    </div>
                    <div className='p-2 bg-neutral-50'>
                        < FaInstagram className='text-2xl' />
                    </div>
                    <div className='p-2 bg-neutral-50'>
                        < FaMapMarkerAlt className='text-2xl' />
                    </div>
                    <div className='p-2 bg-neutral-50'>
                        < FaYoutube className='text-2xl' />
                    </div>
                </div>

            </div>
            <div className='bg-neutral-100 flex justify-between py-14 px-20'>
                <p>Copyright © 2024 Next. Buy </p>

                <p>Powered by Next. Buy</p>

            </div>
        </div>
    )
}

export default Footer;