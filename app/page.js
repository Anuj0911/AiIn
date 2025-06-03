import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <Image src={"/grid.svg"} className="absolute z-[-10] w-full" width={1200} height={300} alt="Background Grid" />

      <Header />

      {/* Hero Section */}
      <section className="z-50">
        <div className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white py-16 px-6 text-center">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-wide sm:text-6xl">
              Welcome to <span className="text-yellow-300">AI MockMate</span>!
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-light text-gray-200">
              Your Ultimate AI Mock Interview Coach<br />
              <span className="font-medium text-yellow-300">
                Double your chances of landing that job with our AI-powered interview prep.
              </span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/dashboard">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 py-8 px-6">
  <b>Get Started</b>
</Button>
              </Link>
              <a
                href="/"
                className="px-6 py-3 text-lg font-semibold border border-white rounded-lg shadow-md transition hover:bg-white hover:text-black"
              >
                <svg className="inline-block w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center">
        <h2 className="font-bold text-3xl">How it Works?</h2>
        <p className="text-md text-gray-500">Give mock interview in just 3 simple easy steps</p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl hover:shadow-indigo-200 transition">
            <AtomIcon className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-xl font-bold text-black">Select Your Role</h3>
            <p className="mt-2 text-sm text-gray-600">
              Login and select your role and years of experience for which you want to give the interview.
            </p>
          </div>

          <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl hover:shadow-indigo-200 transition">
            <Edit className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-xl font-bold text-black">Give the Interview</h3>
            <p className="mt-2 text-sm text-gray-600">
              Answer the AI-generated questions displayed on the screen.
            </p>
          </div>

          <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl hover:shadow-indigo-200 transition">
            <Share2 className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-xl font-bold text-black">Analysis and Feedback</h3>
            <p className="mt-2 text-sm text-gray-600">
              Get the detailed analysis and feedback of your interview.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/sign-in">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-3 text-sm">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">What People Are Saying</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "John Doe",
                role: "Software Engineer",
                feedback:
                  "AI Mockster helped me practice like a pro. I felt confident and prepared!",
              },
              {
                name: "Priya Sharma",
                role: "Data Analyst",
                feedback:
                  "The real-time feedback and AI questions were incredibly helpful. Highly recommend!",
              },
              {
                name: "Amit Raj",
                role: "Frontend Developer",
                feedback:
                  "This platform is game-changing. It simulates interviews so well. 10/10!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4 text-sm">© {new Date().getFullYear()} AI Mockster. All rights reserved.</p>
          <div className="space-x-6 text-sm">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
