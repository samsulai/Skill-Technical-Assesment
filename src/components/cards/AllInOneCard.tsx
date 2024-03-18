import React from 'react'
interface IAllInOneCard {
    icon: string;
    title: string;
    description: string;
  }
  
const AllInOneCard = ({ icon, title, description }: IAllInOneCard)  => {
  return (
   <div className='shadow-md flex justify-center items-center flex-col px-8 rounded-[20px]'>
    <div className='-mt-16'>
    <img src={icon} alt="card icon" />
    </div>
    <p className=' font-medium text-secondary  leading-[45px] text-center text-[25px] mt-16'>{title}</p>
    <p className=' font-normal text-[16px] leading-[36px] text-center text-[#696984] py-8'>{description}</p>
   </div>
  )
}

export default AllInOneCard