'use-client'
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
    <div className="my-2 py-1 grid grid-flow-col gap-1 md:gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 md:p-4 bg-#6100FF rounded-box text-neutral-content">
        <span className="countdown text-4xl md:text-5xl">{days}</span>
        Days
      </div>
      <div className="flex flex-col p-2 md:p-4 bg-#6100FF rounded-box text-neutral-content">
        <span className="countdown text-4xl md:text-5xl">{hours}</span>
        Hours
      </div>
      <div className="flex flex-col p-2 md:p-4 bg-#6100FF rounded-box text-neutral-content">
        <span className="countdown text-4xl md:text-5xl">{minutes}</span>
        Min
      </div>
      <div className="flex flex-col p-2 md:p-4 bg-#6100FF rounded-box text-neutral-content">
        <span className="countdown text-4xl md:text-5xl">{seconds}</span>
        Seconds
      </div>
    </div>
  );
};

export default Countdown;
