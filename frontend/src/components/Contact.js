import React, { useState } from 'react'
import { createUser } from './UsersCon'

const Contact = () => {
  const [data,setData]=useState({
    Name:"",
    Email:"",
    Mobile_No:"",
    Message:""
  })

  function handleInput(e){

    setData({...data,[e.target.name]:e.target.value})
    console.log(data)

  }
  async function handleSubmit(e){
    try{
    e.preventDefault()
    const response=await createUser(data)
    alert(response.data.message)
    setData({
      Name:"",
      Email:"",
      Mobile_No:"",
      Message:""
      
    })
  }
  catch(error){
    console.error('Error',console.error)
    

  }
}





    
    
  return (
    <section id='contact' className='flex flex-col h-[80vh] p-5 md:p-0 bg-gray-300  gap-3 justify-center  '>

        <div >
            <h1 className='text-2xl md:text-4xl font-bold text-black md:p-5 text-start md:pl-52 pt-10'>Contact Us</h1>

        </div>
        <div  className='md:pl-[600px] pb-5'>
            <form onSubmit={handleSubmit} className='flex flex-col md:w-[400px] gap-2'>
                <lablel className='text-start  text-xl'>Name:</lablel>
                <input type='text' name='Name' value={data.Name} onChange={(e)=>handleInput(e)}></input>
                <label className='text-start  text-xl'>Email:</label>
                <input type='email' name='Email' value={data.Email} onChange={(e)=>handleInput(e)}></input>
                <label className='text-start  text-xl'>Mobile No:</label>
                <input type='number' name='Mobile_No'  value={data.Mobile_No} onChange={(e)=>handleInput(e)}></input>
                <label className='text-start  text-xl'>Message:</label>
                <textarea rows={4} cols={50} name='Message' value={data.Message} onChange={(e)=>handleInput(e)}></textarea>
                <button type='submit' className=' rounded-md bg-blue-600 ml-32 md:ml-36 text-center text-white px-2 w-[100px] py-1 mt-2 md:mt-0 hover:cursor-pointer hover:bg-green-600 hover:duration-500 hover:scale-110 ' >Submit</button>
                
            </form>
        </div>
    </section>
  )
}

export default Contact