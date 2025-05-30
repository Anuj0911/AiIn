"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
      
    setFeedbackList(result);
  }

  return (
    <div className='p-10'>
      {feedbackList.length === 0 ? (
        <h2 className='font-bold text-xl text-gray-500'>
          No Interview Feedback Record Found
        </h2>
      ) : (
        <>
          <h2 className='text-3xl font-bold text-green-500'>Congratulations!</h2>
          <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
          <h2 className='text-sm text-gray-500 mb-4'>
            Below are the interview questions with correct answers, your responses, and improvement feedback.
          </h2>

          {feedbackList.map((item, index) => (
            <Collapsible key={index} className='mt-5'>
              <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between items-center w-full text-left'>
                {item.question}
                <ChevronsUpDown className='h-5 w-5' />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2 p-2'>
                  <h2 className='text-red-500 border rounded-lg p-2'>
                    <strong>Rating:</strong> {item.rating}
                  </h2>
                  <h2 className='bg-red-50 text-red-900 text-sm border rounded-lg p-2'>
                    <strong>Your Answer:</strong> {item.userAns}
                  </h2>
                  <h2 className='bg-green-50 text-green-900 text-sm border rounded-lg p-2'>
                    <strong>Correct Answer:</strong> {item.correctAns}
                  </h2>
                  <h2 className='bg-blue-50 text-primary text-sm border rounded-lg p-2'>
                    <strong>Feedback:</strong> {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}

          <Button className='mt-6' onClick={() => router.replace('/dashboard')}>
            Go Home
          </Button>
        </>
      )}
    </div>
  )
}

export default Feedback;
