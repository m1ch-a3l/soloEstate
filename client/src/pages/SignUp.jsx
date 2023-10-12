import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='text-3xl text-center my-7 font-semibold'>SignUp</h1>  
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-slate-800 p-3 rounded-lg text-white uppercase hover:opacity-90 disabled:opacity-80'>sign up</button>
      </form>
      <div className='flex gap-2 mt-2'>
        <p>Have an account already?</p>
        <Link to={'/sign-in'}><span className='text-blue-700 '>Sign in</span></Link>
      </div>
    </div>
  )
}
