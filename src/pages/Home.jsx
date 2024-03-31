import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DarkLightMode from "../components/DarkLightMode";
import Header from "../components/Header";
import MainComponent from "../components/MainComponent";
import SearchAndBtn from "../components/SearchAndBtn";

export default function Home() {
    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const fetchUsers = async()=>{
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/github`)
        const data = await response.json()
        setUser(data)
        setLoading(false)
        // console.log(data)
    }
    useEffect(() => {
       fetchUsers()
    }, [])


  return (
   <>
    <div className="min-h-screen w-full flex bg-stone-100 dark:bg-slate-900 p-1.5 sm:p-4 pt-10 sm:pt-8 transition-all">
        <div className="border dark:border-slate-700 max-w-[600px] mx-auto p-2 w-full flex flex-col gap-8">
            <Header/>

            {/* search and main */}
            <section className="flex flex-col gap-6">
                {/* search and btn */}
                <SearchAndBtn/>
                {loading ? (<div className="flex bg-white min-h-52 rounded w-full items-center justify-center">
                    <p className="animate-bounce" >Loading,please wait...</p>
                </div>) : (<MainComponent user = {user}/>)}
            </section>
            <p className="text-center text-sm opacity-80 -mt-4">Built with &#x1F496; by <Link to={'https://www.linkedin.com/in/kudakwashe-mukucha-998b3b178/'} target={'_blank'}>kuda mukucha</Link></p>
        </div>
        
    </div>
   </>
  )
}
