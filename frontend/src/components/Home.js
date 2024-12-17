import React from 'react'
import home_bg from '../assets/home_bg.jpg'

const Home = () => {
  return (
    <section id='home' className='flex flex-col justify-start gap-3 items-center h-[55vh] md:h-[50vh]  py-40 pb-5  md:pt-24   p-5  ' style={{backgroundImage:`url(${home_bg})`,opacity:0.8,backgroundSize:'cover',backgroundPosition:'center'}} >
        <h1 className='text-black text-2xl md:text-4xl font-bold'>Your Trusted Legal Partner</h1>
        <p className='text-black md:text-black font-bold'>Providing Expert Legal Services For All Your Needs.</p>
        <a href='#contact' className=' rounded-md bg-green-600 p-2 text-white hover:cursor-pointer hover:bg-green-700 hover:duration-500 hover:scale-110 '>Request Consultation</a>


    </section>
  
  )
}

export default Home
