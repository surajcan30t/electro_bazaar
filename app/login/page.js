'use client'
import React ,{useState} from 'react'
import './page.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const page = () => {

const [isLogin, setIsLogin] = useState(false)

const handleLogin = () => {
	setIsLogin(!isLogin)
}

const router = useRouter();
const handleClick = () =>{
	router.push('/student_verify')
}

  return (
    <>
    <div className="relative upload">
		<div className='absolute top-0 left-0 h-[91vh] min-w-[99.5vw] max-w-[99.5vw]'>
		<Image src={'/elearth1.jpg'} fill className='object-cover object-center'/>
		</div>
      {/* <div className="bubble1"></div>
      <div className="bubble2"></div> */}
      <form  type="submit" className="form">
		<div className='flex flex-col justify-center item-center'>
      		<h1 className='text-white z-10'>{isLogin?'Login':'Sign up'}</h1>
			  {!isLogin?(
      	  	<div className="flex flex-col m-2">
          		<label htmlFor="uid">Enter your User Name<span className='text-red-600'>*</span> </label>
          		<input type='text' placeholder='Mr Bean' className='border-2 border-black p-2 rounded-lg text-white bg-slate-800' required></input>
        	</div>
			):null}
      	  	<div className="flex flex-col m-2">
          		<label htmlFor="cont">Enter your Email ID<span className='text-red-600'>*</span> </label>
          		<input type='text' placeholder='bean@ping.com' className='border-2 border-black p-2 rounded-lg text-white bg-slate-800' required></input>
        	</div>
			
        	<div className="flex flex-col m-2">
          		<label htmlFor="cont">password<span className='text-red-600'>*</span></label>
          		<input type='password' placeholder='bean@pwd' className='border-2 border-black p-2 rounded-lg text-white bg-slate-800' required></input>
        	</div>
			<div>
				{!isLogin?(<div onClick={handleLogin} >already have an account? <u className='cursor-pointer'>log in</u></div>):(<div onClick={handleLogin}>don't have an account <u className='cursor-pointer'>sign up</u></div>)}
			</div>
			<div className='flex justify-center item-center'>
				<button onClick={handleClick} className='w-48 bg-green-600 text-white p-2 rounded-lg mt-4'>{isLogin?'Login':'Sign up'}</button>

			</div>
		</div>
        

      </form>
      
    </div>
    </>
  )
}

export default page