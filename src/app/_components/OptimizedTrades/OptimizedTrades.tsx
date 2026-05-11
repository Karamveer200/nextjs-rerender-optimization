'use client';

import OptimizedTradeRow from '@/components/OptimizedTradeRow';
import { useOptimizedTradesStore } from '@/lib/store/optimizedTrades';
import { PlusIcon } from 'lucide-react';
import { useEffect } from 'react';
import { dummyTrades } from '@/utils/general';

const OptimizedTrades = () => {
  const actions = useOptimizedTradesStore((state) => state.actions);

  const orderedTradeIds = useOptimizedTradesStore(
    (state) => state.orderedTradeIds
  );

  useEffect(() => {
    actions.setInitialTrades(dummyTrades);
  }, []);

  const handleTradeUpdate = () => {
    const randomTradeId =
      orderedTradeIds[Math.floor(Math.random() * orderedTradeIds.length)];

    actions.updateExistingTrade(randomTradeId, {
      raw: {
        symbol: 'BTC',
        time: new Date().toISOString(),
      },
    });
  };

  return (
    <div className="flex flex-col gap-4 border border-sys-green rounded-sm p-4">
      <h1 className="text-2xl font-bold text-white">
        Optmized Trades (using Zustand)
      </h1>

      <div className="flex items-center gap-2">
        <button
          className="text-sm cursor-pointer text-sys-green flex border border-sys-green rounded-md px-3 py-2 hover:bg-sys-green/10 transition-all duration-300"
          onClick={handleTradeUpdate}
        >
          <PlusIcon className="size-5 mr-2" />
          <span className="text-sm">Update Random Trade Time</span>
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {orderedTradeIds.map((tradeId) => (
          <OptimizedTradeRow key={tradeId} tradeId={tradeId} />
        ))}
      </div>
    </div>
  );
};

export default OptimizedTrades;
