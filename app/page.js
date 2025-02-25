import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Image src={'/grid.svg'} className="absolute z-[-10] w-full" 
      width={1200} height={300} />
      <Header/>
     <section className=" z-50">
     <div className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white py-16 px-6 text-center">
  <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
  
  <div className="relative max-w-3xl mx-auto">
    <h1 className="text-5xl font-extrabold tracking-wide sm:text-6xl">
      Welcome to <span className="text-yellow-300">AI Mockster</span>!
    </h1>
    <p className="mt-6 text-lg sm:text-xl font-light text-gray-200">
      Your Ultimate AI Mock Interview Coach<br />
      <span className="font-medium text-yellow-300">
        Double your chances of landing that job with our AI-powered interview prep.
      </span> 
      
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
      <a 
        href="/dashboard" 
        className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-lg shadow-md transform transition hover:scale-105 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300"
      >
        Get Started
      </a>

      <a 
        href="/" 
        className="px-6 py-3 text-lg font-semibold border border-white rounded-lg shadow-md transition hover:bg-white hover:text-black"
      >
        <svg className="inline-block w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
        </svg>
        Watch Video
      </a>
    </div>
  </div>
{/* </div> */}

     
    </div>
</section>
<section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
<h2 className="font-bold text-3xl">How it Works?</h2>
<h2 className="text-md text-gray-500">Give mock interview in just 3 simplar easy step</h2>

<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border bg-white
         border-gray-200 p-8 shadow-xl transition
         hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
       <AtomIcon className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Select Your Role</h2>

        <p className="mt-1 text-sm text-gray-600">
          Login and select your role and year of experiences for which you want to give the interview.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <Edit className='h-8 w-8'/>

        <h2 className="mt-4 text-xl font-bold text-black">Give the interview</h2>

        <p className="mt-1 text-sm text-gray-600">
          Answer the AI generated questions displayed on the screen.
        </p>
      </a>

      <a
        className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
      <Share2 className='h-8 w-8' />

        <h2 className="mt-4 text-xl font-bold text-black">Analysis and Feedback</h2>

        <p className="mt-1 text-sm text-gray-600">
          Get the detailed analysis and feedback of your interview.
        </p>
      </a>

    
    </div>

    <div className="mt-12 text-center">
      <a
        href="/sign-in"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div>
    </section>
  </div>
 

  );
}
