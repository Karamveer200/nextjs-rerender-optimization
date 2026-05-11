'use client';

import TradeRow, { Trade } from '@/components/TradeRow';
import { dummyTrades } from '@/utils/general';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

const BadTrades = () => {
  const [trades, setTrades] = useState(dummyTrades);

  const handleTradeUpdate = () => {
    const randomTrade = trades[Math.floor(Math.random() * trades.length)];

    setTrades((prevTrades) =>
      prevTrades.map((trade) =>
        trade.id === randomTrade.id
          ? {
              ...trade,
              raw: {
                ...trade.raw,
                symbol: 'BTC',
                time: new Date().toISOString(),
              },
            }
          : trade
      )
    );
  };

  return (
    <div className="flex flex-col gap-4 border border-red-500/70 rounded-sm p-4">
      <h1 className="text-2xl font-bold text-white">
        Bad Trades (using useState)
      </h1>

      <div className="flex items-center gap-2">
        <button
          className="text-sm cursor-pointer text-red-400 flex border border-red-500/70 rounded-md px-3 py-2 hover:bg-red-500/10 transition-all duration-300"
          onClick={handleTradeUpdate}
        >
          <PlusIcon className="size-5 mr-2" />
          <span className="text-sm">Update Random Trade Time</span>
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {trades.map((trade) => (
          <TradeRow key={trade.id} trade={trade} />
        ))}
      </div>
    </div>
  );
};

export default BadTrades;
