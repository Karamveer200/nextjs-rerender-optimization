'use client';

import { useEffect, useRef, useState } from 'react';

export interface Trade {
  id: string;
  tradeType: 'buy' | 'sell';
  tradeTime: string;

  raw: {
    symbol: string;
    time: string;
  };
}

const TradeRow = ({ trade }: { trade: Trade }) => {
  const tradeRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  const renderCount = useRef(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    if (tradeRef.current) {
      tradeRef.current.classList.add('highlight-pulse');

      setTimeout(() => {
        tradeRef.current?.classList.remove('highlight-pulse');
      }, 1000);
    }

    renderCount.current++;
  }

  return (
    <div className="grid grid-cols-3 items-center justify-between">
      <div
        ref={tradeRef}
        className="relative grid grid-cols-2 items-center gap-10 w-full"
      >
        <div className="flex items-center gap-2">
          <span className="text-base text-white">{trade.raw.symbol}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base text-white capitalize">
            {trade.tradeType}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-base text-white">
          {new Date(trade.raw.time).getTime()}
        </span>
      </div>

      <span className="text-base text-red-400">
        Render Count: {renderCount.current}
      </span>
    </div>
  );
};

export default TradeRow;
