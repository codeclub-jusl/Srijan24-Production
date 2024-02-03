'use client'
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

const Countdown = () => {
  const targetDate = new Date('2024-03-21T10:00:00');
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:gap-8">
      <div className="flex flex-col items-center justify-center rounded-lg bg-#6100FF p-4 lg:p-8">
        <div className="text-xl font-bold text-gray-100 sm:text-2xl md:text-3xl">{days}</div>
        <div className="text-sm font-semibold sm:text-base">Days</div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg bg-#6100FF p-4 md:p-8">
        <div className="text-xl font-bold text-gray-100 sm:text-2xl md:text-3xl">{hours}</div>
        <div className="text-sm font-semibold sm:text-base">Hours</div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg bg-#6100FF p-4 md:p-8">
        <div className="text-xl font-bold text-gray-100 sm:text-2xl md:text-3xl">{minutes}</div>
        <div className="text-sm font-semibold sm:text-base">Minutes</div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg bg-#6100FF p-4 md:p-8">
        <div className="text-xl font-bold text-gray-100 sm:text-2xl md:text-3xl">{seconds}</div>
        <div className="text-sm font-semibold sm:text-base">Seconds</div>
      </div>
    </div>
   </div>
  </div>
  )
}

export default Countdown;
