"use client";

import { useEffect, useState } from "react";
import { Block } from "./Block";
import { FighterBanner } from "./FighterBanner";

export default function ScorePage() {
  const totalRounds = 5;
  const blocks = Array.from({ length: totalRounds }, (_, i) => i + 1);
  const [round, setRound] = useState(1);

  useEffect(() => {
    if (round == totalRounds + 1) return;

    const interval = setInterval(() => {
      setRound((round) => round + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [round]);

  return (
    <div>
      <FighterBanner name={"Izzy"} image={"/images/izzy.jpg"} shift={5} />
      <div className="flex items-center justify-center h-[75vh]">
        {blocks.map((i, _) => (
          <Block key={i} id={i} round={round} totalRounds={totalRounds} />
        ))}
      </div>
      <FighterBanner name={"Dricus"} image={"/images/dricus.webp"} shift={2} />
    </div>
  );
}
