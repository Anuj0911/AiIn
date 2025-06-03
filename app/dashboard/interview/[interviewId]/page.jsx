"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({ params }) {

    const [interviewData, setInterviewData] = useState()
    const [webCamEnabled, setWebCamEnabled] = useState(false)

    useEffect(() => {
        GetInterviewDetails()
    }, [])

    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId))

        setInterviewData(result[0])
    }

    return (
        <div className='my-10 px-4 md:px-10'>
            <h2 className='font-bold text-3xl mb-6'>Let's Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                <div className='flex flex-col gap-6'>
                    <div className='p-6 rounded-xl border shadow-sm hover:shadow-md transition-all'>
                        <h2 className='text-lg'><strong>Job Role:</strong> {interviewData?.jobPosition || "Loading..."}</h2>
                        <h2 className='text-lg'><strong>Tech Stack:</strong> {interviewData?.jobDesc || "Loading..."}</h2>
                        <h2 className='text-lg'><strong>Experience:</strong> {interviewData?.jobExperience || "Loading..."}</h2>
                    </div>
                    <div className='p-6 border rounded-xl border-yellow-300 bg-yellow-100'>
                        <h2 className='flex gap-2 items-center text-yellow-600'>
                            <Lightbulb />
                            <strong>Information</strong>
                        </h2>
                        <p className='mt-3 text-yellow-600 text-sm'>
                            {process.env.NEXT_PUBLIC_INFORMATION || "Useful guidance will appear here."}
                        </p>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    {webCamEnabled ? (
                        <Webcam
                            onUserMedia={() => setWebCamEnabled(true)}
                            onUserMediaError={() => setWebCamEnabled(false)}
                            mirrored={true}
                            style={{
                                height: 300,
                                width: 300,
                                borderRadius: '1rem',
                                border: '2px solid #ccc',
                                objectFit: 'cover'
                            }}
                        />
                    ) : (
                        <>
                            <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-xl border text-gray-400' />
                            <Button
                                variant="outline"
                                className="w-full hover:bg-primary hover:text-white transition"
                                onClick={() => setWebCamEnabled(true)}
                            >
                                Enable Web Cam and Microphone
                            </Button>
                        </>
                    )}
                </div>
            </div>

            <div className='flex justify-end mt-8'>
                <Link href={`/dashboard/interview/${params.interviewId}/start`}>
                    <Button className='px-6 py-2 text-lg hover:scale-105 transition-transform'>
                        Start Interview
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Interview
