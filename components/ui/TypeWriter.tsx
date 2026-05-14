'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  speed = 60,
  deleteSpeed = 35,
  pause = 2000,
  className = '',
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
}
