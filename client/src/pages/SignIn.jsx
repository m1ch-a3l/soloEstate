import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  // Create state to handle formData and setting it initial data as an empty object
  const [formData, setFormData] = useState({
      email: '',
      password:'',

  });

  // State for error and loading handling
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  // Initialize useNavigate
  const navigate = useNavigate();

  // Adding handleChange function for  onChange event listener in input tags
  const handleChange = (e) =>{
      // keeping form data -- using the spread operator
      setFormData({
        ...formData,
        [e.target.id] : e.target.value, //<-- id represents the id specified in the input tags
      });
  };

// handleSubmit Function
const handleSubmit = async (e) =>{
  // to prevent auto refresh to form submit we add the code below
  e.preventDefault();
try {
  // setting loading true
  setLoading(true);
  setError(null);

  // Using the fetch method to request for our api route
  const res = await fetch('/api/auth/signin', {
    method : 'POST',
    headers : {
      'content-Type' : 'application/json', 
    },
    body : JSON.stringify(formData),
  });
  // Change and convert results to json
  const data = await res.json();

  // checking if data input contains an error.
  if(data.success === false){
    setLoading(false);
    setError(data.message);
    return;
  }
    setLoading(false);
    setError(null);
// Navigating to the home page
navigate('/');

} catch (error) {
  setLoading(false);
  setError(error.message);
}

}

// console.log(formData);

  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='text-3xl text-center my-7 font-semibold'>SignIn</h1>  
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />

      
        <button disabled={loading} className='bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80'>{loading ? "loading..." : "Sign In"}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/sign-up'}><span className='text-blue-700 '>Sign Up</span></Link>
        
      </div>
      {error && <p className='text-red-500 mt-5'> {error}</p>}
    </div>
  );
}
