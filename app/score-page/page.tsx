"use client";

import { useEffect, useState } from "react";
import { Block } from "./Block";

export default function ScorePage() {
  const totalRounds = 3;
  const blocks = Array.from({ length: totalRounds }, (_, i) => i + 1);
  const [round, setRound] = useState(1);

  useEffect(() => {}, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {blocks.map((i, _) => (
        <div key={i}>
          <Block id={i} round={round} totalRounds={totalRounds} />
        </div>
      ))}
    </div>
  );
}
