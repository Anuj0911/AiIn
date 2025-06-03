import React from 'react'
import Header from '../dashboard/_components/Header'

const page = () => {
  return (
    <>
        <Header />
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          <div className="bg-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold  mb-2">What is AI Mockster?</h2>
            <p className="text-gray-600">AI Mockster is an innovative platform that uses artificial intelligence to help you prepare for technical interviews through realistic mock interview simulations.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold  mb-2">How does it work?</h2>
            <p className="text-gray-600">Simply sign up, choose your interview focus area, and start practicing with our AI interviewer. You'll receive real-time feedback and detailed performance analysis.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold  mb-2">What types of interviews can I practice?</h2>
            <p className="text-gray-600">We offer practice sessions for various technical roles including software development, data science, and system design interviews.</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold  mb-2">Is it free to use?</h2>
            <p className="text-gray-600">We offer both free and premium plans. The free plan includes basic features, while premium users get access to advanced feedback, unlimited sessions, and specialized interview tracks.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page
