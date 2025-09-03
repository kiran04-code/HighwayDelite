import { useEffect } from "react"
import { useAuth } from "../../context/contextAuth"
import { useNavigate } from "react-router-dom"


const BigLoder = () => {
   const navigate = useNavigate()
    const {User} = useAuth()
   console.log(User)
    useEffect(()=>{
        const data = !!User
        console.log(data)
        if(data){
             navigate("/")
        }
    },[navigate,User])
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-15 h-15 animate-spin border-t-2 border-black rounded-full'>
      </div>
    </div>
  )
}

export default BigLoder
