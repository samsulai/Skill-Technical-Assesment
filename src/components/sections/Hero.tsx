import React from 'react'
import Button from '../shared/Button'
import Image from 'next/image'

const Hero = () => {
  return (
   <section className='flex justify-between items-center flex-col md:flex-row md:mx-[5rem]  pt-32 lg:pt-4 xl:pt-0'>
    <div>
<p className='font-bold  text-[35px] md:text-[54px] leading-[81px] text-secondary'><span className='text-primary'>Studying</span> Online is now much easier</p>
<p className='text-[#464646] font-400 text-[20px] leading-[38.4px] my-5 mb-8'>Skilline is an interesting platform that will teach you in more an interactive way</p>
<div className='flex items-center gap-4'>
<Button title="Join for free" className="bg-primary text-[#FFFFFF] w-[150px] h-[50px] shadow-xl hover:opacity-90 "/>
<div className='flex items-center gap-3'>
<Image src="/images/play.png" alt="play icon"  height={40} width={50}/>
<p>Watch how it works</p>
</div>
</div>
    </div>
    <div>
<Image src="/images/header-pic.png" alt="play icon"  height={600} width={911}/>
    </div>
   </section>
  )
}

export default Hero