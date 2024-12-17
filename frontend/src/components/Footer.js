import React from 'react'
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=' md:flex  p-5 bg-black  py-5  '>
        <div className='md:w-1/3 text-white font-bold '>
            <ul className=' text-center md:text-start'>
            <li>M.Saravanan, M.B.A.,LL.B</li>
                <li>D.MahendraVarman,B.E.,LL.B</li>
                <li>M.Manoj,B.C.A.,LL.B</li>
                <li>B.Sree Preethi, B.Sc., LL.B</li>
                <li>D.K.Bharathkumar , B.Sc.,LL.B</li>
                 <li>V.Vignesh Kumar , B.Sc.,LL.B</li>
                 <li>T.Thasitha, B.Sc.,LL.B</li>
                 <li>K.Gowziya Begam, B.Sc., LL.B</li>
            </ul>

        </div>
        <div className='md:w-1/3 pt-[60px] md:pt-[100px] text-white font-bold med'>
           <h1> &copy; 2024 TRK ADVOCATE'S. ALL RIGHT RESERVED</h1>
           <ul className='flex justify-center gap-2 '>
            <li className='text-rose-600'><a href='https://www.instagram.com/mahi_tvk_prathap_7?igsh=cW00cGMxdTl6ZjM2s'><FaSquareInstagram/></a></li>
            <li className='text-gray-600'><a href=''><FaSquareXTwitter/></a></li>
            <li className='text-blue-500'><a href='https://www.facebook.com/kd.don.568?mibextid=ZbWKwL'><FaSquareFacebook/></a></li>
           
           </ul>

        </div>
        <div className='md:w-1/3 text-white font-bold mt-2 text-center md:pl-48'>
        <h1 className='  font-serif text-red-500 text-xl pb-3'>Address For Service:</h1>
            <p>
              D.MahendraVarman,B.E.,LL.B.,PRESIDENT<br></br>
                1/40,Vettavalam Main Road,<br></br>
                T.Devanur(PT), Kandachipuram(TK), Villupuram(DT)<br></br>
                CELL:8012374744/8012243711, Pincode-605752. 
            </p>

        </div>
    </div>
  )
}

export default Footer
