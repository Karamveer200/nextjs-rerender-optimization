import { Trade } from '@/components/TradeRow';
import { create } from 'zustand';

interface OptimizedTradesStore {
  tradesById: Record<string, Trade>;
  orderedTradeIds: string[];

  actions: {
    setInitialTrades: (trades: Trade[]) => void;
    updateExistingTrade: (id: string, trade: Partial<Trade>) => void;
  };
}

export const useOptimizedTradesStore = create<OptimizedTradesStore>((set) => ({
  tradesById: {},
  orderedTradeIds: [],

  actions: {
    updateExistingTrade: (id: string, trade: Partial<Trade>) => {
      set((state) => ({
        tradesById: {
          ...state.tradesById,
          [id]: {
            ...state.tradesById[id],
            raw: {
              ...state.tradesById[id].raw,
              ...trade.raw,
            },
          },
        },
      }));
    },

    setInitialTrades: (trades: Trade[]) => {
      set({
        tradesById: trades.reduce(
          (acc: Record<string, Trade>, trade: Trade) => {
            acc[trade.id] = trade;
            return acc;
          },
          {}
        ),

        orderedTradeIds: trades.map((trade) => trade.id),
      });
    },
  },
}));
