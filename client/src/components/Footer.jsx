import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      
          <img width={150} src={assets.logo} alt="Footer Logo" />
          <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500  max-sm:hidden'>Copyright &copy; 2026 Training.ai | All rights reserved.</p>
          <div className='flex gap-1'>
              <img width={40} src={assets.facebook_icon} alt="Facebook" />
              <img width={40} src={assets.twitter_icon} alt="Twitter" />
              <img width={40} src={assets.google_plus_icon} alt="Google+" />
          </div>
    </div>
  )
}

export default Footer
