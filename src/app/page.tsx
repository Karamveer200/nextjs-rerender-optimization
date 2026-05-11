import BadTrades from './_components/BadTrades/BadTrades';
import OptimizedTrades from './_components/OptimizedTrades/OptimizedTrades';

export default function RootPage() {
  return (
    <div className="relative h-screen w-full bg-black">
      <div className="grid grid-cols-2 gap-10 pt-10 px-10">
        <BadTrades />

        <OptimizedTrades />
      </div>
    </div>
  );
}
