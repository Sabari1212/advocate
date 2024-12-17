import React, { useEffect, useState } from 'react'
import { deleteusers, getPdf, getUserData } from '../UsersCon'
import { replace, useNavigate } from 'react-router-dom';


const Table = () => {
    const [data,setData]=useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        loadData()
        

    },[]);
    async function loadData(){
        const response= await getUserData()
        setData(response.data)
        
        
        

    }
    async function DownloadPdf(){

      const response= await getPdf()
      const url=window.URL.createObjectURL(new Blob([response.data]))
      const link=document.createElement('a');
      link.href=url;
      link.setAttribute('download','tables.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    

    }
    async function handleDelete(id){
    
      const response= await deleteusers(id)
      alert(response.data)
      loadData()
      

    }
    function handleClick(){
      navigate('/',{replace:true})
    }
   
      
  return (
    <>
    <div className='flex  p-10 bg-black justify-between'>
    <h1 className='text-white text-xl md:text-4xl font-bold  '><span className='text-red-500'>CLIENT</span> DETAILS</h1>
    <button onClick={handleClick} className=' rounded-md bg-red-500 p-1 md:p-3 text-white font-bold hover:scale-110 duration-500'>LogOut</button>

    </div>
    
    <div className='overflow-x-auto  p-5'>
      
        <table className='min-w-full border-collapse overflow-x-auto border-gray-300 mt-10 mb-20'>
            <tr className='bg-gray-200'>
                <th className='border-gray-300 px-4 py-2 text-left'>S.no</th>
                <th className='border-gray-300 px-4 py-2 text-left'>Name</th>
                <th className='border-gray-300 px-4 py-2 text-left'>Email</th>
                <th className='border-gray-300 px-4 py-2 text-left'>Mobile No</th>
                <th className='border-gray-300 px-4 py-2 text-left'>Message</th>
                <th className='border-gray-300 px-4 py-2 text-left'></th>
            </tr>

           {data.map((dat,index)=>(
             <tr className='hover:bg-gray-100'>
             <td className='border-gray-300 px-4 py-2 text-left'>{index+1}</td>
             <td className='border-gray-300 px-4 py-2 text-left'>{dat.Name}</td>
             <td className='border-gray-300 px-4 py-2 text-left'>{dat.Email}</td>
             <td className='border-gray-300 px-4 py-2 text-left'>{dat.Mobile_No}</td>
             <td className='border-gray-300 px-4 py-2 text-left'>{dat.Message}</td>
             <td className='border-gray-300 px-4 py-2 text-left'>
              
              <button onClick={()=>handleDelete(dat._id)} className='bg-green-500 p-2 hover:bg-red-500 hover:scale-110 hover:duration-500'>Delete</button>
              </td>
             </tr>

          )) 
        }  
        </table>

        <button onClick={DownloadPdf} className='bg-red-500 mt-3 p-3 tex-white font-bold  mr-[60%] md:mr-[90%] hover:scale-110 duration-500 hover:bg-green-500'>Download Pdf</button>



    </div>
    </>
  )
}


export default Table
