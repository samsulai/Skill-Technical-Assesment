
import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'

const TestimonialSection = () => {
  return (
    <section className='mt-16'>
  <div  className={`flex items-center flex-col gap-8 md:gap-32 justify-between md:flex-row`}>
<div>
<div className='flex items-center gap-4 mb-4'>
<Separator className='w-[80px] text-[#525596]'/>
<p className='text-[20px] leading-[27.28px] text-[#525596]'>TESTIMONIAL</p>
  </div>

  <p className='text-[40px] leading-[81.84px] text-[#2F327D] font-bold'>What They Say? </p>
  <p className='text-[20px] leading-[41.6px]  text-[#696984] mt-8 mb-3'>Skilline has got more than 100k positive ratings from our users
            around the world.</p>
            <p className='text-[20px] leading-[41.6px]  text-[#696984] mt-8 mb-3'>Some of the students and teachers were greatly helped by the Skilline.</p>
            <p className='text-[20px] leading-[41.6px]  text-[#696984] mt-8 mb-3'>Are you too? Please give your assessment</p>
            
</div>


<div>
          <img src="/images/f_7.png" alt="feature card image" />
        </div>



      </div>

    </section>
  )
}

export default TestimonialSection