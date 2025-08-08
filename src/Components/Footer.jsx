import React from 'react'

const Footer = () => {
  return (
    <div className="Footer bg-white shadow mt-20 py-4" id='social'>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p>&copy; Copyright by <span className="font-bold">Ahmad Zacky Fitra</span></p>
        <div className="social-footer flex items-center sm:gap-7 gap-2 ">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-linkedin-box-fill text-2xl"></i>

        </div>
      </div>
    </div>
  )
}

export default Footer