import { Trade } from '@/components/TradeRow';

export const normalizeError = (e: any) => {
  if (e instanceof Error || 'message' in e) {
    return e.message;
  }

  if (typeof e === 'string') {
    return e;
  }

  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
};

export const dummyTrades: Trade[] = [
  {
    id: '1',
    tradeType: 'buy',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'BTC',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '2',
    tradeType: 'sell',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'ETH',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '3',
    tradeType: 'buy',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'SOL',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '4',
    tradeType: 'sell',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'XRP',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '5',
    tradeType: 'buy',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'DOGE',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '6',
    tradeType: 'sell',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'ADA',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '7',
    tradeType: 'buy',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'DOT',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '8',
    tradeType: 'sell',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'LINK',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '9',
    tradeType: 'buy',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'BCH',
      time: '2021-01-01 12:00:00',
    },
  },
  {
    id: '10',
    tradeType: 'sell',
    tradeTime: '2021-01-01 12:00:00',
    raw: {
      symbol: 'LTC',
      time: '2021-01-01 12:00:00',
    },
  },
];
