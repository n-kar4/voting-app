import { Router, useRouter } from 'next/router'
import React from 'react'
import Card from '../components/Card/Card'
import useAuth from '../hooks/useAuth'

function dashboard() {
  const {logout}=useAuth()
  const router=useRouter()
  return (
    <div className='flex w-screen m-0  h-screen'>
           
        <div className="max-w-[180px] flex flex-col items-center h-screen
        shadow-xl pr-12 pb-7">
            <div className="mt-4">
                <h1>Logo</h1>
            </div>
            <div className=" pl-[3.5rem] mt-24">
                <ul>
                    <li className="sidebar__menu--item">
                        <a href="#">Dashboard</a>
                    </li>
                    <li className="sidebar__menu--item">
                        <a href="#">Voters</a>
                    </li>
                    <li className="sidebar__menu--item">
                        <a href="#">Candidates</a>
                    </li>
                    <li className="sidebar__menu--item">
                       <button className='font-medium flex-1'
                       onClick={()=>router.push("/CreateElection")}>Create Election</button>
                    </li>
                    
                </ul>
              </div>
              <button className='mt-48 font-medium' onClick={logout} >Logout</button>
        </div>
       <div className='flex flex-col w-screen'>
          <div className='px-8 py-4 shadow-lg max-h-[80px] w-full flex space-x-11'>
            <input className='w-[40rem] px-6
            h-10 border-[1.7px] border-gray-400 outline-none rounded-xl'
            type="search" name="search" 
            id="search" placeholder='Search' />

            <div className='flex absolute space-x-4 top-5 right-8'>
                    <h3>avatar</h3>
                    <h3>name</h3>
            </div>
          </div>
          <div className='flex flex-col mt-3 px-4'>
            <h1 className='font-bold text-2xl'>Your Vote is Secure, Your Vote Counts</h1>
            <p className='px-1 text-sm font-normal mt-2 text-gray-500'>znbvjsdbvjkfdkjvbkjfbvkjsdnv kjdvkjnjk</p>
          </div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default dashboard