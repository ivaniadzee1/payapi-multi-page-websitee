import Link from "next/link";


export default function Footer() {
  return (
    <div className='flex items-center justify-center flex-col relative '>
      <div className='flex items-center justify-center flex-col w-full h-[170px] absolute bottom-[-150px] bg-[#1b262f] text-white md:flex-row md:justify-start'>
        <img className='mt-[10px] md:pl-[20px]' src='/assets/payapi.svg' alt='' />
        <Link href={'./pricing'}>
          <h1 className='text-lg mt-[6px] md:pl-[20px]'>Pricing</h1>
        </Link>
        <Link href={'./about'}>
          <h1 className='text-lg mt-[6px] md:pl-[20px]'>About</h1>
        </Link>
        <Link href={'./contact'}>
          <h1 className='text-lg mt-[6px] md:pl-[20px]'>Contact</h1>
        </Link>
      </div>
    </div>
  );
}