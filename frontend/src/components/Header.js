import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { getAdmin } from './UsersCon';

// const navigate = useNavigate();
// navigate('/home');

const Header = () => {
    // const navigate = Navigate();
    const navigate = useNavigate();
    const [menu,setMenu]=useState(false)
    const [login,setLogin]=useState(false)
     const [username, setName] = useState("")
        const [password, setPw] = useState("")
    
        async function handleSubmit(e) {
            try{
                e.preventDefault();
                // document.write("Login SuccessFul")
    
                const login=await getAdmin({username,password})
                console.log(login)
    
                if(login.data)
                {
                    navigate('/admin');
                }

            }catch(err){
               
                alert("Invalid Username Or Password")
                setName("")
                setPw("")
            }
           
          

          
        }

   
  return (
    <header className='flex flex-row justify-between md:px-5 bg-black text-white py-5'>
        <div className='flex flex-row  '>
            <img className='h-[100px] w-[100px]' src={logo}></img>
            <h1 className='text-3xl md:text-4xl font-bold mt-4 md:mt-7  '><span className='text-red-500'>TRK</span> ADVOCATE'S</h1>

        </div>
        <div className=' font-bold text-xl md:ml-[500px] '>
            <button onClick={()=>setLogin(!login)} className='mt-8  bg-red-500 md:h-[45px] md:w-[85px]  rounded-md hover:bg-red-600 hover:scale-110 cursor-pointer hover:duration-500'>ADMIN</button>
        </div>
        <div className='hidden md:block head'>
            <ul className='flex gap-5 mt-8 font-bold text-xl '>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About Us</a></li>
                <li><a href='#service'>Services</a></li>
                <li><a href='#contact'>Contact Us</a></li>
                
            </ul>
         

        </div>
        <button className='block md:hidden  font-bold text-4xl mb-3 text-white' onClick={()=>setMenu(!menu)}><IoMenu/></button>
         {menu && <nav className=' block md:hidden fixed top-[140px] left-0 bg-gray-800 pt-3 w-full head'>
            <ul onClick={()=>setMenu(!menu)} className='flex flex-col gap-2 font-bold menu'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About Us</a></li>
                <li><a href='#service'>Services</a></li>
                <li><a href='#contact'>Contact Us</a></li>
                
                
            </ul>
         

        </nav>
        
}
  {login && <div className='fixed left-[40px] md:left-[600px] top-[300px] md:top-[300px] text-black '>
            <form onSubmit={handleSubmit} className='flex flex-col bg-slate-800 p-10 md:w-[400px] gap-3'>
                <h1 className='text-white text-2xl font-bold'>Admin Login</h1>
                <label  className='text-left text-white'>UserName</label>
                <input type='text' name='username' value={username} onChange={(e) => setName(e.target.value)}></input>
                <label className='text-left text-white'>PassWord</label>
                <input type='password' name='password' value={password} onChange={(e) => setPw(e.target.value)}></input>
                
                <button className='bg-blue-500 w-[100px] ml-[55px] md:ml-[100px] mt-5 rounded-md hover:bg-green-600 hover:scale-110 duration-500' type='submit'>Login</button>

                
               
                <button className='absolute right-0 top-0 text-red-700 text-2xl font-bold ' onClick={()=>setLogin(!login)}><IoCloseSharp/></button>

            </form>

        </div>
        
}

    


    </header>
  )
}

export default Header
