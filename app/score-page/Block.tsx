"use client";
import { useState, useEffect } from "react";

export function Block({ id, round, totalRounds }: BlockProps) {
  const [active, setActive] = useState(false);
  const [scoreA, setScoreA] = useState(10);
  const [scoreB, setScoreB] = useState(10);

  function updateScore(score: number, setScore: (score: number) => void) {
    if (score >= 0 && score <= 10) {
      setScore(score);
    }
  }

  useEffect(() => {
    setActive(round >= id);

    if (round === id + 1 && round + 1 < totalRounds) {
      fetch("/api", {
        method: "POST",
        body: JSON.stringify({
          round: round,
          scoreA: scoreA,
          scoreB: scoreB,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    }
  }, [round]);

  return (
    active && (
      <div>
        <div className={`m-7 ${id == round ? "border-2 border-red-500" : ""}`}>
          <input
            name="scoreA"
            type="number"
            className="w-32 h-32 text-black text-center"
            value={scoreA}
            readOnly={id < round}
            onChange={(e) => updateScore(Number(e.target.value), setScoreA)}
          />
        </div>
        <div className={`m-7 ${id == round ? "border-2 border-red-500" : ""}`}>
          <input
            name="scoreB"
            type="number"
            className="w-32 h-32 text-black text-center"
            value={scoreB}
            readOnly={id < round}
            onChange={(e) => updateScore(Number(e.target.value), setScoreB)}
          />
        </div>
      </div>
    )
  );
}
