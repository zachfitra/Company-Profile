import React from 'react'
import HeroImage from '../assets/images/hero.svg';
import AboutImage from '../assets/images/about.svg'

const Hompage = () => {
  return (
    <div className='homepage pb-10 h-[2000px]'>
      <div className="container mx-auto">
        <div className="hero pt-32 md:grid-cols-2 grid-cols-1 grid items-center gap-20">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Website Company Profile dengan menggunakan<span className="font-bold text-sky-400 underline"> Tailwindcss</span></h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, asperiores. Asperiores quas labore eligendi aspernatur neque vero a illum, dicta illo. Et molestias deserunt quibusdam adipisci ex temporibus, laborum voluptatem.</p>
            <a href="#" className="  bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">About Us <i className="ri-eye-line"></i>
            </a>          
          </div>
          <div className="box">
            <img src={HeroImage} alt="hero" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
          </div>
        </div>

        <div className="about md:grid grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="about images" />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Halaman About<span className="font-bold text-sky-400 underline"> Tailwindcss</span></h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, asperiores. Asperiores quas labore eligendi aspernatur neque vero a illum, dicta illo. Et molestias deserunt quibusdam adipisci ex temporibus, laborum voluptatem.</p>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Hompage