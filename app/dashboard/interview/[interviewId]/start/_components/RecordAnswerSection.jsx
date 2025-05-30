"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModal';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const {
    results,
    isRecording,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: false,
    useLegacyResults: false,
  });

  // Append new speech-to-text results to userAnswer
  useEffect(() => {
    results?.forEach((result) => {
      setUserAnswer((prev) => prev + result?.transcript);
    });
  }, [results]);

  // When recording stops and the answer is long enough, submit it
  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      handleAnswerSubmission();
    }
  }, [userAnswer]);

  const toggleRecording = () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  const handleAnswerSubmission = async () => {
    setLoading(true);
    try {
      const question = mockInterviewQuestion?.[activeQuestionIndex]?.question;
      const answer = userAnswer;

      const feedbackPrompt = `Question: ${question}, User Answer: ${answer}. Based on this, provide a JSON response with a 'rating' and 'feedback' (3-5 lines for improvement).`;

      const result = await chatSession.sendMessage(feedbackPrompt);
      const cleanedResponse = (await result.response.text())
        .replace('```json', '')
        .replace('```', '');
      const feedbackJson = JSON.parse(cleanedResponse);

      const response = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: question,
        correctAns: mockInterviewQuestion?.[activeQuestionIndex]?.answer,
        userAns: answer,
        feedback: feedbackJson?.feedback,
        rating: feedbackJson?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy'),
      });

      if (response) {
        toast('User Answer recorded successfully');
        setUserAnswer('');
        setResults([]);
      }
    } catch (error) {
      console.error('Error during answer submission:', error);
      toast('Something went wrong while recording the answer.');
    } finally {
      setResults([]);
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
        <Image
          src='/webcam.png'
          width={200}
          height={200}
          alt='Webcam Overlay'
          className='absolute'
        />
        <Webcam
          mirrored={true}
          style={{
            height: 500,
            width: 500,
            zIndex: 10,
          }}
        />
      </div>

      <Button
        disabled={loading}
        variant='outline'
        className='my-10'
        onClick={toggleRecording}
      >
        {isRecording ? (
          <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
            <StopCircle /> Stop Recording
          </h2>
        ) : (
          <h2 className='text-primary flex gap-2 items-center'>
            <Mic /> Record Answer
          </h2>
        )}
      </Button>
    </div>
  );
}

export default RecordAnswerSection;
