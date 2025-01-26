'use client';

import { Button } from '@repo/design-system/components/ui/button';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { checkCounter, sendCounter } from '@/app/(home)/actions';

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

const MotionButton = motion.create(Button);

export const UserHi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [statusText, setStatusText] = useState('Say Hi!');
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    checkCounter().then((val) => val && setCount(val));
  }, []);

  const onClickHi = async () => {
    if (isLoading) return;

    setIsLoading(true);
    sendCounter();

    const isRepeat = cycle > 0;
    const states = isRepeat
      ? ['again?', 'okay..', 'thinking...', 'almost done...', 'Thank you!']
      : ['thinking...', 'almost done...', 'Thank you!'];

    for (let i = 0; i < states.length; i++) {
      setStatusText(states[i]);
      await delay();
    }

    setIsLoading(false);
    setStatusText('Say Hi!');
    setCycle((prev) => prev + 1);
    checkCounter().then((val) => val && setCount(val));
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <MotionButton
        className={`
          ${isLoading ? 'cursor-not-allowed' : ''}
        `}
        onClick={onClickHi}
        disabled={isLoading}
        whileTap={{ scale: 0.95 }}
        animate={
          isLoading && statusText === 'Done!' ? { scale: [1, 1.2, 1] } : {}
        }
        transition={{ duration: 0.3 }}
      >
        {isLoading && statusText !== 'Done!' ? (
          <Loader2 className="animate-spin w-5 h-5 mr-2" />
        ) : null}
        {statusText}
      </MotionButton>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center font-bold mt-5">
          <p className="text-blue-500 mb-2 animate-pulse">
            Total hellos:{' '}
            <span className="text-pink-500" id="counter">
              {count}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
