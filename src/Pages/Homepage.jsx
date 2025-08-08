import React from 'react'
import HeroImage from '../assets/images/hero.svg';
import AboutImage from '../assets/images/about.svg';
import Project1 from '../assets/images/proyek-1.webp';
import Project2 from '../assets/images/proyek-2.webp';
import Project3 from '../assets/images/proyek-3.webp';
import Project4 from '../assets/images/proyek-4.webp';
import Project5 from '../assets/images/proyek-5.webp';

const Homepage = () => {
  return (
    <div className='homepage pb-10'>
      <div className="container mx-auto">
        <div className="hero pt-32 md:grid-cols-2 grid-cols-1 grid items-center gap-20">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Website Company Profile dengan menggunakan<span className="font-bold text-sky-400 underline"> Tailwindcss</span></h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, asperiores. Asperiores quas labore eligendi aspernatur neque vero a illum, dicta illo. Et molestias deserunt quibusdam adipisci ex temporibus, laborum voluptatem.</p>
            <a href="#about" className="  bg-green-500 hover:bg-green-600 transition-all py-2 px-4 text-white shadow rounded-full">About Us <i className="ri-eye-line"></i>
            </a>          
          </div>
          <div className="box">
            <img src={HeroImage} alt="hero" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
          </div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-25 pt-20" id='about'>
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="about images" className=" lg:w-[500px] w-[400px] md:mx-0 mx-auto " />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">About Us<span className="font-bold text-sky-400 underline"> Tailwindcss</span></h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, asperiores. Asperiores quas labore eligendi aspernatur neque vero a illum, dicta illo. Et molestias deserunt quibusdam adipisci ex temporibus, laborum voluptatem.</p>
          </div>

        </div>

        <div className="services pt-32" id='services'>
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2" >Services</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-green-500 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-5 mb-2">Services Name 1</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, rerum.</p>
            </div>
             <div className="box bg-green-500 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-5 mb-2">Services Name 2</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, rerum.</p>
            </div> <div className="box bg-green-500 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-5 mb-2">Services Name 3</h3>
              <p className="text-white text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, rerum.</p>
            </div>
          </div>
        </div>

        <div className="project pt-20 " id="project">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2" >Project</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div className="project-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow rounded-2xl">
              <img src={Project1} alt="Project Images" className="w-full h-[220px]" />
              <h1 className="text-xl font-bold text-black mt-5 mb-2">Project Name</h1>
              <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam!</p>
            </div>
            <div className="box p-2 bg-white shadow rounded-2xl">
              <img src={Project2} alt="Project Images" className="w-full h-[220px]" />
              <h1 className="text-xl font-bold text-black mt-5 mb-2">Project Name</h1>
              <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam!</p>
            </div>
            <div className="box p-2 bg-white shadow rounded-2xl">
              <img src={Project3} alt="Project Images" className="w-full h-[220px]" />
              <h1 className="text-xl font-bold text-black mt-5 mb-2">Project Name</h1>
              <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam!</p>
            </div>
            <div className="box p-2 bg-white shadow rounded-2xl">
              <img src={Project4} alt="Project Images" className="w-full h-[220px]"/>
              <h1 className="text-xl font-bold text-black mt-5 mb-2">Project Name</h1>
              <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam!</p>
            </div>
            <div className="box p-2 bg-white shadow rounded-2xl">
              <img src={Project5} alt="Project Images" className="w-full h-[220px]" />
              <h1 className="text-xl font-bold text-black mt-5 mb-2">Project Name</h1>
              <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam!</p>
            </div>
          </div>

        </div>

        <div className="contact pt-20 " id="contact">
          <div className="contact-box pt-12">
            <h3 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2 '>Contact</h3>
          <div className="address grid grid-cols-2">
          <div className="address-box w-[500px] h-[500px] border-1 rounded-2xl pt-10 ">
          <p><strong>Alamat:</strong> Jl. Contoh No. 123, Jakarta</p>
          <p><strong>Telepon:</strong> +62 812 3456 7890</p>
          <p><strong>Email:</strong> info@nadisaskincare.com</p>
          </div>

          <div className="map pt-10">
          <iframe
             title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.572137774403!2d106.8226956!3d-6.5698045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e8d2b4e5a6b1%3A0x301e8f1fc28b0f0!2sBogor!5e0!3m2!1sid!2sid!4v1690000000000"
             className="map-box w-[500px] h-[500px] border-1 rounded-2xl pt-10"
              allowFullScreen=""
            loading="lazy"
      ></iframe>
          </div>
        </div>
        </div>
        </div>
      
      </div>
      
    </div>
  )
}

export default Homepage