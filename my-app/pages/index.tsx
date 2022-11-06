import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NavBar from '../components/navbar/Navbar'

const Home: NextPage = () => {
  const router=useRouter()
  return (
    <div>
      <Head>
        <title>Blockchain Voting App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
       <NavBar/>
       <div className='flex justify-around mt-8'>
        <div className="mt-28">
          <h1 className='font-bold text-5xl mb-10'>
            Fast,Secured and <br/> Accesible Voting System</h1>
          <p className='text-lg font-semibold text-gray-600 mb-5'>Let’s make voting and elections  easy for you.<br/> 
            This is designed to ensure a secure voting session.</p>
            <button className='bg-[#93278F] mt-3 px-28 py-5 rounded-full
             text-white font-semibold'
             onClick={()=>router.push('/login')}
            >Register as a Voter</button>
        </div>
        <img className='max-h-[530px] ml-[-20px] mt-[-20px]' src="./landinggirl.png" alt="landinggirl"/>
       </div>
      </div>
     </div>
  )
}

export default Home