import React from 'react'

export default function page() {
  return (
    <div className='flex   items-center text-center flex-col bg-white min-h-screen pt-[80px]'>
      <h1 className='text-4xl text-[#36536b] font-bold '>Pricing</h1>
      <div className='flex justify-center text-center items-center flex-col bg-white lg:flex-row'>


        <div className='mt-[60px] items-center text-center '>

          <h1 className='text-[#ba4270] text-2xl '>Free Plan</h1>
          <p className='pt-[10px] lg:w-[250px] lg:ml-[80px]'>Build and test using our core set of products with up to 100 API requests</p>
          <p className='text-4xl pt-[10px] text-[#36536b] font-bold'>0.00$</p>
          <div className='w-full h-[2px] bg-[#36536b] mt-[20px] lg:w-[350px] lg:ml-[50px]'></div>
          <div className='flex-col mt-[10px] text-center items-center'>
            <p className='text-xl text-[#36536b] pt-[10px]'>Transactions</p>
            <p className='text-xl text-[#36536b] pt-[10px]' >Auth</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Identity</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Investments</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Assets</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Liabilities</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Income</p>
            <div className='w-full h-[2px] bg-[#36536b] mt-[20px] lg:w-[350px] lg:ml-[50px]'></div>
          </div>



        </div>



        <div className='mt-[90px] items-center text-center  lg:mt-[60px]'>

          <h1 className='text-[#ba4270] text-2xl '>Basic Plan</h1>
          <p className='pt-[10px] lg:w-[250px] lg:ml-[80px]'>Launch your project with unlimited requests and no contractual minimums</p>
          <p className='text-4xl pt-[10px] text-[#36536b] font-bold'>249.00$</p>
          <div className='w-full h-[2px] bg-[#36536b] mt-[20px] lg:w-[350px] lg:ml-[50px]'></div>
          <div className='flex-col mt-[10px] text-center items-center'>
            <p className='text-xl text-[#36536b] pt-[10px]'>Transactions</p>
            <p className='text-xl text-[#36536b] pt-[10px]' >Auth</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Identity</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Investments</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Assets</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Liabilities</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Income</p>
            <div className='w-full h-[2px] bg-[#36536b] mt-[20px] lg:w-[350px] lg:ml-[50px]'></div>
          </div>

        </div>



        <div className='mt-[90px] items-center text-center lg:mt-[60px]'>

          <h1 className='text-[#ba4270] text-2xl '>Premium Plan</h1>
          <p className='pt-[10px] lg:w-[250px] lg:ml-[80px]'>Get tailored solutions, volume pricing, and dedicated support for your team</p>
          <p className='text-4xl pt-[10px] text-[#36536b] font-bold'>499.00$</p>
          <div className='w-full h-[2px] bg-[#36536b] mt-[20px] lg:w-[350px] lg:ml-[50px]'></div>
          <div className='flex-col mt-[10px] text-center items-center'>
            <p className='text-xl text-[#36536b] pt-[10px]'>Transactions</p>
            <p className='text-xl text-[#36536b] pt-[10px]' >Auth</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Identity</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Investments</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Assets</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Liabilities</p>
            <p className='text-xl text-[#36536b] pt-[10px]'>Income</p>
            <div className='w-full h-[2px] bg-[#36536b] mt-[20px] lg:w-[350px] lg:ml-[50px]'></div>
          </div>
        </div>



       

      </div>
      <div className='items-center justify-center flex-col w-[252px] bg-white h-[200px] text-center mt-[100px] lg:ml-[750px]'>
                    <h1 className='font-extrabold text-[#36536B] text-3xl'>Ready to start?</h1>
                    <input className='w-[340px] h-[50px] rounded-2xl ml-[-40px] mt-[20px] pl-[20px]' type="text" placeholder='Enter email address' />
                    <button className='w-[340px] h-[50px] rounded-2xl ml-[-40px] mt-[20px] text-white bg-[#BA4270]'>Schedule a Demo</button>
                </div>
                
    </div>
  )
}
