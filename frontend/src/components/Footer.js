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
                <li>D.K.Bharathkumar , B.Sc.,LL.B</li>
                <li>B.Sree Preethi, B.Sc., LL.B</li>
                <li>M.Manoj,B.C.A.,LL.B</li>
                <li>T.Thasitha, B.Sc.,LL.B</li>
                <li>D.K.Bharathkumar , B.Sc.,LL.B</li>
                <li>R.Ranjitha,B.A.,LL.B</li>
                <li>K.Gowziya Begam, B.Sc., LL.B</li>
                <li>D.MahendraVarman,B.E.,LL.B</li>
            </ul>

        </div>
        <div className='md:w-1/3 pt-[60px] md:pt-[100px] text-white font-bold med'>
           <h1 > &copy; 2024 TRK ADVOCATE'S. ALL RIGHT RESERVED</h1>
           <ul className='flex justify-center gap-2 '>
            <li><a href='https://www.instagram.com/mahi_tvk_prathap_7?igsh=cW00cGMxdTl6ZjM2s'><FaSquareInstagram/></a></li>
            <li><a href=''><FaSquareXTwitter/></a></li>
            <li><a href='https://www.facebook.com/kd.don.568?mibextid=ZbWKwL'><FaSquareFacebook/></a></li>
           
           </ul>

        </div>
        <div className='md:w-1/3 text-white font-bold mt-10 text-center md:pl-52'>
            <p>
                D.MahendraVarman,B.E.,LL.B,<br></br>
                Vettavalam Main Road,<br></br>
                T.Devanur, Villupuram(DT)<br></br>
                pincode-605752
            </p>

        </div>
    </div>
  )
}

export default Footer