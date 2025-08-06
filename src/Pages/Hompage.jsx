import React from 'react'
import HeroImage from '../assets/images/hero.svg';

const Hompage = () => {
  return (
    <div className='homepage pb-10 h-[2000px]'>
      <div className="container mx-auto">
        <div className="hero pt-32 grid-cols-2 grid items-center gap-20">
          <div className="box">
            <h1 className="text-5xl/tight font-medium mb-7"><span> Welcome To Nadisa Skincare</span></h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, asperiores. Asperiores quas labore eligendi aspernatur neque vero a illum, dicta illo. Et molestias deserunt quibusdam adipisci ex temporibus, laborum voluptatem.</p>
            <a href="#" className=" text-base bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full ri-eye-line">About Us</a>          
          </div>
          <div className="box">
            <img src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hompage