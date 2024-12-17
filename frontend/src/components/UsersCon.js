import axios from 'axios'

const url="http://localhost:5000/api"


const createUser=(data)=>{
    return(
      axios.post(url+"/post",data)
    )

}
const getUserData=()=>{
  return(
    axios.get(url+"/get")
  )
}
const getPdf=()=>{
  return(
    axios.get(url+"/pdf",{responseType:'blob'})
  )
}
const getAdmin=(data)=>{
  return(
    axios.post(url+"/get/login",data)
  )
}
const deleteusers=(id)=>{
  return(
    axios.delete(url+"/delete/"+id)
  )
}


export {createUser,getUserData,getPdf,getAdmin,deleteusers}