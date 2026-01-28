"use client";
import { useEffect, useState } from "react";
import styles from "./TypewriterText.module.css";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterText = ({
  words,
  typingSpeed = 120,
  deletingSpeed = 80,
  pauseTime = 1200,
}: TypewriterTextProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className={styles.typewriter}>
      {text}
      <span className={styles.typewriter__cursor}>|</span>
    </span>
  );
};

export default TypewriterText;
