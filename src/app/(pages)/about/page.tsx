"use client"
import Footer from '@/app/components/Footer';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
  const [email, setEmail] = useState('');
  const notify = () => toast("Message sent successfully");

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setEmail(e.target.value);
  };

  const handleButtonClick = () => {
      if (email) {
          notify();
      }
  };

  return (
    <div className='flex items-center flex-col text-center min-h-screen bg-white'>
      <div className='flex items-center flex-col text-center bg-white mt-[100px]'>

        <div className='w-[327px] h-[157px] md:w-[740px] md:h-[140px] md:ml-[-70px]'>
          <h1 className='md:w-[740px] md:h-[140px] text-3xl font-bold text-[#36536B]'>We empower innovators by delivering access to the financial system</h1>
        </div>

        <div className='md:flex w-[327px] h-[244px] text-[#36536B] mt-[50px]'>
          <h1 className='text-3xl'>Our Vision</h1>
          <p className='pt-[10px]'>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.</p>
        </div>

        <div className='w-[327px] h-[244px] text-[#36536B] mt-[80px]'>
          <h1 className='text-3xl'>Our Business</h1>
          <p className='pt-[10px]'>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.</p>
        </div>

        <div className='w-auto h-[300px]'>
          <img className='w-full h-full object-cover md:hidden' src="/assets/people2.svg" alt="" />
          <img className='w-full h-full object-cover hidden md:block' src="/assets/people3.svg" alt="" />
        </div>

        <div className='mt-[50px]'>
          <div className='w-[350px] h-[1px] mt-[20px] bg-[#36536B]'></div>

          <h1 className='text-2xl text-[#36536B] mt-[25px]'>Team Members</h1>
          <p className='text-3xl text-[#BA4270] mt-[15px]'>300+</p>
          <h1 className='text-2xl text-[#36536B] mt-[25px]'>Offices in the US</h1>
          <p className='text-3xl text-[#BA4270] mt-[15px]'>3</p>
          <h1 className='text-2xl text-[#36536B] mt-[25px]'>Transactions analyzed</h1>
          <p className='text-3xl text-[#BA4270] mt-[15px]'>10M+</p>

          <div className='w-[350px] h-[1px] mt-[20px] bg-[#36536B]'></div>
        </div>

        <div className='w-[327px] h-[244px] text-[#36536B] mt-[50px]'>
          <h1 className='text-3xl'>The Culture</h1>
          <p className='pt-[10px]'>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
        </div>

        <div className='w-[327px] h-[244px] text-[#36536B] mt-[50px]'>
          <h1 className='text-3xl'>The People</h1>
          <p className='pt-[10px]'>We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
        </div>

        <div className='items-center justify-center flex-col w-[252px] bg-white h-[200px] text-center mt-[100px] lg:ml-[750px]'>
          <h1 className='font-extrabold text-[#36536B] text-3xl'>Ready to start?</h1>
          <input
              className='w-[340px] h-[50px] rounded-2xl ml-[-40px] mt-[20px] pl-[20px]'
              type="text"
              placeholder='Enter email address'
              value={email}
              onChange={handleInputChange}
          />
          <button
              onClick={handleButtonClick}
              className={`w-[340px] h-[50px] rounded-2xl ml-[-40px] mt-[20px] text-white bg-[#BA4270] ${!email ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!email}
          >
              Schedule a Demo
          </button>
          <ToastContainer />
        </div>

      </div>
    </div>
  )
}
