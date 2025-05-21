
import { useState, useEffect } from 'react';

interface AnimatedHeadlineProps {
  words: string[];
  preText?: string;
  postText?: string;
}

const AnimatedHeadline = ({ words, preText, postText }: AnimatedHeadlineProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const tick = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setDelta(500);
      }

      timer = setTimeout(tick, delta);
    };

    timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [currentWordIndex, delta, isDeleting, text, words]);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
      {preText && <span>{preText} </span>}
      <span className="text-gold">{text}</span>
      <span className="animate-ping">|</span>
      {postText && <span> {postText}</span>}
    </h1>
  );
};

export default AnimatedHeadline;
