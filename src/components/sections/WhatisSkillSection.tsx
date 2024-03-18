import React from 'react'
import WhatIsSkillineCard from '../cards/WhatIsSkillineCard';
import Link from 'next/link';
import Image from 'next/image';

const WhatisSkillSection = () => {
  type TImage = "instructions" | "students";
  const data = [
    {
      title: "FOR INSTRUCTORS",
      buttonText: "Start a class today",
      imageType: "instructions" as TImage,
    },
    {
      title: "FOR STUDENTS",
      buttonText: "Enter access code",
      imageType: "students" as TImage,
    },
  ];
  return (
  <section className='mt-8 md:mt-32'>
    <div>
      <p className='text-[#2F327D] font-semibold text-[30px] md:text-[36px] leading-[79.2px] text-center'>What is <span className='text-[#F48C06]'>Skilline</span>?
</p>
<p className='text-[#696984] text-[20px] mb-16 text-center md:mx-16 '>
  Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
  <div className="flex flex-col md:flex-row gap-16">
          {data.map((content, index) => (
            <WhatIsSkillineCard {...content} key={index} />
          ))}
        </div>
    </div>

    <div className=' flex flex-col gap-16 md:flex-row items-center mt-[5rem]'>
<div>
  <div className='font-bold text-[30px] md:text-[30px] text-secondary relative'>
  Everything you can do in a physical classroom, <span className='text-[#F48C06]'>you can do with Skilline</span>
  <div className="absolute  top-[-1.5rem] left-[-2rem] -z-10">
              <img src="/images/ball_primary.png" alt="classroom" />
            </div>
  </div>

  <p className='text-[#696984] text-[20px] my-8 '>
  Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
  </p>
  <Link
            href="/"
            className="text-[#696984] underline underline-offset-2"
          >
            Learn more
          </Link>
</div>
<div>
  <Image src="/images/w_classroom_enhanced.png" height={850} width={850} alt="classroom"/>
</div>
    </div>
  </section>
  )
}

export default WhatisSkillSection