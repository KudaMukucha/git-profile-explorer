import { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function SearchAndBtn() {
    const [username,setUsername] = useState('')
    const [errorMessage,setErrorMessage] = useState()
    const navigate = useNavigate()
  

const handleSubmit=(e)=>{
    e.preventDefault()
    if (username.trim() === '') {
        setErrorMessage('Please enter a username!')
      } else {
        navigate('/results/' + username)
      }
    // console.log('fuck poverty');
}

const handleChange = (e) => {
    setUsername(e.target.value)
    setErrorMessage('') // Clear the error message when the input field is changed
  }

  return (
   <>
    <form onSubmit={handleSubmit} className='flex items-center gap-2 w-full shadow-lg border dark:border-slate-700 focus-within:ring-2 focus-within:ring-slate-600 dark:focus-within:ring-gray-200 p-2 rounded'>
        <section className='flex items-center gap-2 w-full'>
            <IoSearch size={21} className={'text-blue-700'}/>
            <input onChange={handleChange}  value={username} className='w-full outline-none rounded h-10 bg-inherit px-1 text-sm' type="text" placeholder='Search github username...'/>
        </section>
        <button className='bg-blue-500 px-4 py-2 rounded-lg text-white hover:opacity-80 transition-all duration-300'>Search</button>
    </form>
    {errorMessage && <p className="text-red-600 -mt-3">{errorMessage}</p>}
   </>
  )
}
