import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*----Left section-- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>This is Doctor appointment system </p>
            </div>

             {/*----center section-- */}
             <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
             </div>

              {/*----right section-- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+772450096</li>
                    <li>bristasolutions@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*----copy right section-- */}
        <div>
             <hr />
             <p className='py-5 text-black text-sm text-center'>Copyright 2024@ Brista Solutions - All Right reserved.</p>
             </div>
    </div>
  )
}

export default Footer