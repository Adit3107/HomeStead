import React from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
// gsap.registerPlugin(useGSAP);
import { FaHouseChimney } from "react-icons/fa6";
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Hero = () => {
  // useGSAP(()=>{
  //   let tl = gsap.timeline()

  //   tl.from("nav-heading, p, img",{
  //     y: -40,
	// 		duration: 0.3,
	// 		opacity: 0,
	// 		// delay: 1,
	// 		stagger: 0.15,
  //   })
  //   tl.from("li",{
  //       y: -40,
  //       opacity:0,
  //       duration: 0.5,
  //       stagger : 0.15,
  //   })
  //   tl.from("button",{
  //       y:-20,
  //       opacity: 0,
  //       duration: 0.4,
  //       scale : 0.2,
  //       stagger:0.15,
  //   })
  //   tl.from("components card",{
  //     opacity: 0,
	// 		y: 30,
	// 		stagger: 0.15,
  //     delay: 1,
	// 		duration: 0.8,
  //   })
  // })
  

  return (
    <div>
      <main>
        <nav className='nav flex justify-between px-12 py-4 items-center shadow-md w-full'>
          
            <div className='nav-heading font-bold text-3xl text-[var(--color)] flex '>
            <i className='mr-2'><FaHouseChimney /></i>
              HomeStead</div>
            <div className="links lg:block md:hidden hidden">
                <ul className='flex justify-center gap-24 font-medium items-center h-full'>
                    <li className='cursor-pointer hover:scale-110 hover:text-[var(--color)] text-xl inline-block '>Home</li>
                    <li className='cursor-pointer hover:scale-110 hover:text-[var(--color)] text-xl'>Property</li>
                    <li className='cursor-pointer hover:scale-110 hover:text-[var(--color)] text-xl'>Rent</li>
                    <li className='cursor-pointer hover:scale-110 hover:text-[var(--color)] text-xl'>Agents</li>
                </ul>
            </div>
            {/* <button className='px-10 py-2 border-2 rounded-md text-lg lg:block md:hidden hidden'>Get Started</button>
             */}
             <button class="relative px-6 py-2 border border-[var(--color)] group rounded-md text-black hidden lg:block">
             <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color)] group-hover:w-full group-hover:transition-all"></span>Get Started </button>
        </nav>
        <div className="h-[90vh] w-[100vw] lg:w-[100vw] lg:h-[100vh] flex mb-10 p-5 lg:p-[50px] pb-0 bg-[#fff7f0] bg-cover">
				<div className="lg:w-[49%] ">
					
						<h2 className="min-[500px]:text-6xl text-xl font-bold">
            Find a perfect property
            Where you'll love to live						
            </h2>
						<p className="text-md md:text-lg w-fit lg:w-[95%] mt-6 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.
						</p>
            <div className='buttons flex gap-8'>
						<button className="px-4 py-1 text-md lg:text-lg lg:px-5 lg:py-3 rounded-md bg-slate-900 text-white mt-3 hover:shadow-slate-400 shadow-lg">
              BUY
						</button>
						<button className="px-3 py-1 text-md lg:text-lg lg:px-5 lg:py-3 rounded-md bg-slate-900 text-white mt-3 hover:shadow-slate-400 shadow-lg">
              SELL
						</button>
            </div>

            <div class="components mt-44 sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 hidden">
                <div class="card p-4 border rounded-xl bg-[#FBEEE6] shadow-2xl">
                  <img src="homestead\public\us-dollar-symbol-stock-illustration-white-background_685862-71.jpg" className='size-12' alt="" />
                  <div className='font-bold text-3xl'> $15.4M </div>
                  <br />
                  Owned from
                  Properties transactions

                </div>
                <div class="card  p-4 border rounded-xl bg-[#FBEEE6] shadow-2xl">
                <img src="homestead\public\us-dollar-symbol-stock-illustration-white-background_685862-71.jpg" className='size-12' alt="" />

                 <div className='font-bold text-3xl'> 25K+</div>
                  <br />
                  Properties for Buy & sell Successfully
                  </div>
                <div class=" card p-4 border shadow-2xl rounded-xl bg-[#FBEEE6]">
                <img src="homestead\public\us-dollar-symbol-stock-illustration-white-background_685862-71.jpg" className='size-12' alt="" />

                 <div className='font-bold text-3xl'> 25K+</div>
                  <br />
                  Properties for Buy & sell Successfully
                  </div>
                <div class=" card p-4 border shadow-2xl rounded-xl bg-[#FBEEE6]">
                <img src="homestead\public\us-dollar-symbol-stock-illustration-white-background_685862-71.jpg" className='size-12' alt="" />

                 <div className='font-bold text-3xl'> 600+</div>
                  <br />
                  Reagular Clients
                    </div>
            </div>

					
				</div>
				<div className="hidden lg:block h-[75%] w-[55%] relative">
					<img
						src="./House1.png"
						alt=""
						className="h-[100%] absolute right-0"
					/>
				</div>
			</div>
      </main>
    </div>
  )
}

export default Hero
