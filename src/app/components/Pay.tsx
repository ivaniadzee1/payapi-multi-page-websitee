"use client"
import React, { useState } from 'react';
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Pay() {
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
        <div className='bg-white min-h-screen'>
            <div className='flex items-center justify-center flex-col w-auto h-auto '>

                <div className='flex items-center justify-center mt-[120px]'>
                    <img className='w-[340px] h-[240px] md:w-[540px] md:h-[440px] md:mt-[-50px] md:ml-[500px]' src="/assets/phone.svg" alt="" />
                </div>

                <div className='items-center justify-center flex-col w-[252px] h-[100px] text-center mt-[100px] md:mt-[-400px] md:ml-[-450px]'>
                    <h1 className='font-extrabold text-center text-[#36536B] text-3xl'>Start building with our APIs for absolutely free.</h1>
                    <input
                        className='w-[340px] h-[50px] rounded-2xl ml-[-40px] mt-[20px] pl-[20px]'
                        type="text"
                        placeholder='Enter email address'
                        value={email}
                        onChange={handleInputChange}
                    />
                    <button
                        className={`w-[340px] h-[50px] rounded-2xl ml-[-40px] mt-[20px] text-white bg-[#BA4270] ${!email ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleButtonClick}
                        disabled={!email}
                    >
                        Schedule a Demo
                    </button>
                </div>

                <div className='flex items-center justify-center flex-col mt-[70px] ml-[30px] md:mt-[350px]'>
                    <img className='mt-[70px] md:w-[400px] md:h-[400px] md:ml-[-450px]' src="/assets/txt.svg" alt="" />
                    <h1 className='font-extrabold text-[#36536B] text-2xl mt-[-80px] md:text-3xl md:mt-[-280px] md:ml-[400px]'>Easy to Implement</h1>
                    <p className='text-[#36536B] text-sm mt-[20px] text-center max-w-[400px] md:ml-[370px]'>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
                    <img className='md:mt-[80px] md:ml-[400px]' src="/assets/phones.svg" alt="" />
                    <h1 className='font-extrabold text-[#36536B] text-42l mt-[-40px] md:ml-[-500px] md:mt-[-300px]'>Simple UI & UX</h1>
                    <p className='text-[#36536B] text-sm mt-[20px] text-center max-w-[400px] md:ml-[-450px]'>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.</p>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-center mt-[70px] ml-[30px] lg:ml-0 lg:mt-[250px] space-y-[70px] lg:space-y-0 lg:space-x-[30px]'>
                    <div className='flex items-center justify-center flex-col'>
                        <img src="/assets/img1.svg" alt="" />
                        <h1 className='font-extrabold text-[#36536B] text-2xl mt-[20px]'>Personal Finances</h1>
                        <p className='text-[#36536B] text-sm mt-[20px] text-center max-w-[400px]'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.</p>
                    </div>

                    <div className='flex items-center justify-center flex-col'>
                        <img src="/assets/img2.svg" alt="" />
                        <h1 className='font-extrabold text-[#36536B] text-2xl mt-[20px]'>Banking & Coverage</h1>
                        <p className='text-[#36536B] text-sm mt-[20px] text-center max-w-[400px]'>With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.</p>
                    </div>

                    <div className='flex items-center justify-center flex-col'>
                        <img src="/assets/img3.svg" alt="" />
                        <h1 className='font-extrabold text-[#36536B] text-2xl mt-[20px]'>Consumer Payments</h1>
                        <p className='text-[#36536B] text-sm mt-[20px] text-center max-w-[400px]'>It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.</p>
                    </div>
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

            <Footer/>
        </div>
    );
}
