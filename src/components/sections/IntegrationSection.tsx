import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'

const IntegrationSection = () => {
  return (
   <section className='mt-16'>
    <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-32 items-center'>
      
      <div>
          <img src="/images/f_6.png" alt="feature card image" />
        </div>
<div>
  <div className='flex gap-4 items-center mb-4'>
   <Separator className="w-[80px] text-[#525596]"/>
   <p className='text-[20px] leading-[27.28px] text-[#525596]'>INTEGRATIONS</p>
  </div>
<div className='text-[#2F327D] font-bold text-[36px] leading-[57.6px]'>
200+ educational tools and platform <span className='text-primary'>integrations</span>
</div>
<p className='mt-8 mb-12  text-[20px] leading-[43.2px] text-[#696984]'>
Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
</p>

<Link href="#" className='text-[#F48C06] text-[18px] leading-[39.6px] w-[280px] h-[80px] py-4 px-6 border border-[#F48C06] rounded-[80px] bg-white hover:bg-white'>
See All Integrations
</Link>
</div>


      </div>
    
    </section>
  )
}

export default IntegrationSection