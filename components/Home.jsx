import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex flex-col m-0 p-0 justify-center items-center min-w-[99.5vw] max-w-[99.5vw]">
        <div className="relative">
          <div className="relative top-0 left-0 w-screen min-h-[91vh] max-h-[91vh]">
            <Image
              src={"/land2.jpg"}
              alt="home"
              fill
              className="absloute object-cover object-center"
            />
          </div>
          <div className="absolute flex flex-col justify-center top-[10vh] left-[26vw] max-h-[62vh] min-h-[62vh] text-center px-10 text-8xl text-zinc-50 font-extrabold capitalize bg-[#00000031] backdrop-blur-md saturate-200 rounded-full">
            empowering <br /> tomorrow's <br />
            <span className="text-5xl text-red-100">technology today</span>
          </div>
          <div className="absolute bottom-10 right-[48vw] rounded-full border-2 border-cyan-200 p-1 text-white text-4xl animate-bounce">
            <Link href={"/home"}>
              <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* <div className='flex flex-row gap-32 mt-14 z-30'>
        <div className='bg-white rounded-xl shadow-slate-700 shadow-md w-60 h-60  flex flex-col justify-center items-center'>
          <div className='relative flex h-28 w-96'>
            <Image src='/nec.jpg' fill className='absolute object-contain object-center' />
          </div>
          <div>
            <Link href={'./newElectronics/'}><h1 className='text-black text-2xl text-center font-bold z-20'>New Electronic Components</h1> </Link>
          </div>
        </div>
        <div className='bg-white rounded-xl shadow-slate-700 shadow-md w-60 h-60  flex flex-col justify-center items-center'>
          <div className='relative flex h-28 w-96'>
            <Image src='/refurbished.jpg' fill className='absolute object-contain object-center'  alt='img'/>
          </div>
          <div>
            <Link href={'./refurbishedProducts'}><h1 className='text-black text-2xl text-center font-bold z-20'>Refurbished Components</h1> </Link>
          </div>
        </div>
        <div className='bg-white rounded-xl shadow-slate-700 shadow-md w-60 h-60  flex flex-col justify-center items-center'>
          <div className='relative flex h-28 w-96'>
            <Image src='/logo.jpg' fill className='absolute object-contain object-center' alt='img'/>
          </div>
          <div>
            <Link href={'./directMarketplace'}><h1 className='text-black text-2xl text-center font-bold z-20'>Direct MarketPlace</h1> </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-32 mt-14'>
        <div className='bg-white rounded-xl shadow-slate-700 shadow-md w-60 h-60  flex flex-col justify-center items-center relative '>
          <div className='relative flex h-28 w-96'>
            <Image src='/pcbd.jpg' fill className='absolute object-contain object-centers' alt='img'/>
          </div>
          <div>
            <Link href={'./pcbDesign'}><h1 className='text-black text-2xl font-bold z-20 relative'>PCB Design</h1> </Link>
          </div>
        </div>
        <div className='bg-white rounded-xl shadow-slate-700 shadow-md w-60 h-60  flex flex-col justify-center items-center relative'>
          <div className='relative flex h-28 w-52'>
            <Image src='/projects.jpg' fill className='absolute object-cover object-centers'  alt='img'/>
          </div>
          <div>
            <Link href={'./customisedProjects'}><h1 className='text-black text-center text-2xl font-bold z-20 relative'>Customised Projects</h1> </Link>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
