'use client';

import { useOptimizedTradesStore } from '@/lib/store/optimizedTrades';
import { useEffect, useRef, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

export interface Trade {
  tradeId: string;
}

const OptimizedTradeRow = ({ tradeId }: { tradeId: string }) => {
  const tradeRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const renderCount = useRef(0);

  const trade = useOptimizedTradesStore((state) => state.tradesById[tradeId]);

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

        <div className="flex items-center gap-2 text-white">
          {trade.tradeType}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-base text-white">
          {new Date(trade.raw.time).getTime()}
        </span>
      </div>

      <span className="text-base text-sys-green">
        Render Count: {renderCount.current}
      </span>
    </div>
  );
};

export default OptimizedTradeRow;
