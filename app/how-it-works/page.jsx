import React from 'react'
import Header from '../dashboard/_components/Header'

const page = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-12">How AI Mockster Works</h1>
        
        <div className="space-y-12">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
            <div>
              <h2 className="text-2xl font-semibold  mb-2">Sign Up and Create Your Profile</h2>
              <p className="text-gray-600">Create your account and tell us about your experience level and interview goals.</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
            <div>
              <h2 className="text-2xl font-semibold  mb-2">Choose Your Interview Type</h2>
              <p className="text-gray-600">Select from various interview types including technical coding, system design, or behavioral interviews.</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
            <div>
              <h2 className="text-2xl font-semibold  mb-2">Practice with AI Interviewer</h2>
              <p className="text-gray-600">Engage in realistic interview scenarios with our AI interviewer that adapts to your responses.</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
            <div>
              <h2 className="text-2xl font-semibold  mb-2">Receive Detailed Feedback</h2>
              <p className="text-gray-600">Get comprehensive feedback on your performance, including areas for improvement and personalized recommendations.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-600 transition-colors">
            Start Practicing Now
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
