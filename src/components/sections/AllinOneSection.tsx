import React from 'react'
import AllInOneCard from '../cards/AllInOneCard';

const AllinOneSection = () => {
  const data = [
    {
      icon: "/images/f1.png",
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
    },
    {
      icon: "/images/f2.png",
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      icon: "/images/f3.png",
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization ",
    },
  ];
  return (
    
    <section>
      <p className='font-bold text-[36px] leading-[64.8px] text-[#F48C06] text-center'>< span className='text-secondary'>All-In-One</span> Cloud Software.</p>
      <p className='font-normal text-[20px] leading-[43.2px] text-center text-[#696984] mb-8'>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
</p>


<div className='grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-8 lg:grid-cols-3 justify-between mt-32'>
{data.map((feature, i) => (
  <AllInOneCard {...feature} key={i} />
))}
</div>
    </section>
  )
}

export default AllinOneSection