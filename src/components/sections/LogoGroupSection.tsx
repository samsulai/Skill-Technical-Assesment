 import React from 'react'
 
 const LogoGroupSection = () => {
  
  const data = [
    "/images/google.png",
    "/images/netflix.png",
    "/images/airbnb.png",
    "/images/amazon.png",
    "/images/facebook.png",
    "/images/grab.png",
  ]
   return (
     <section className='mx-4'>
      <div className='flex justify-center flex-col items-center mt-16'>
      <p className='text-[#696984] font-medium text-[28px] mb-8 leading-[44.8px] tracking-wide text-center'>Trusted by 5,000+ Companies Worldwide</p>
      <div className='flex flex-wrap items-center w-full gap-8 justify-center'>
      {data.map((image, i) => (
        <img src={image} key={i} alt="logo" />
      ))}
      </div>
      </div>
     </section>
   )
 }
 
 export default LogoGroupSection