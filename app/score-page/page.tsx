"use client";

import { useEffect, useState } from "react";

export default function ScorePage() {
  const numBlocks = 5;
  const blocks = Array.from({ length: numBlocks }, (_, i) => i);
  const [round, setRound] = useState(1);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {blocks.map((_, i) => (
        <div key={i}>
          <Block id={i} round={round} />
          <Block id={i} round={round} />
        </div>
      ))}
    </div>
  );
}

function Block({ id, round }: BlockProps) {
  const [score, setScore] = useState(0);
  const [active, setActive] = useState(false);

  function updateScore(score: number) {
    if (score >= 0 && score <= 10) {
      setScore(score);
    }
  }

  useEffect(() => {
    setScore(10);
  }, []);

  useEffect(() => {
    if (round > id) {
      setActive(true);
    }
  }, [round]);

  return (
    active && (
      <div className="py-5 px-5">
        <input
          type="number"
          className="w-32 h-32 text-black text-center"
          value={score}
          onChange={(e) => updateScore(Number(e.target.value))}
        />
      </div>
    )
  );
}
