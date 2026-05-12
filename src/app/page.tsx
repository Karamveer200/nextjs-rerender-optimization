import BadTrades from './_components/BadTrades/BadTrades';
import OptimizedTrades from './_components/OptimizedTrades/OptimizedTrades';
import DragDropBox from './_components/DragDropBox/DragDropBox';
import { Form } from './_components/Form/Form';

export default function RootPage() {
  return (
    <div className="relative w-full bg-black flex flex-col gap-20 p-6">
      <div className="grid grid-cols-2 gap-10 p-10 min-h-screen border border-white rounded-sm">
        <BadTrades />
        <OptimizedTrades />
      </div>

      <div className="flex items-center w-full justify-center p-10 border border-white rounded-sm">
        <DragDropBox />
      </div>

      <div className="flex items-center w-full justify-center p-10 border border-white rounded-sm min-h-screen">
        <Form />
      </div>
    </div>
  );
}
