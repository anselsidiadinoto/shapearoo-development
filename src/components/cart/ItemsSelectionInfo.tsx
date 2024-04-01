export function ItemsSelectionInfo(){
  return(
    <div className="flex w-full gap-3 text-sm border-b-[1px] border-gray-300 py-3">
      <div className="w-10 flex">9</div>
      <div className="w-60 flex">
        <div className="bg-gray-300 w-20 h-20 rounded-lg"></div>
        <div className="flex flex-col text-xs ml-3">
          <div>Eifell Tower Keychain</div>
          <div>by Hantaro2233</div>
          <div className="text-sm mt-2">30,000</div>
          <div>edit design details</div>
        </div>
      </div>
      <div className="w-20 flex justify-end">100,000</div>
      <div className="w-44 flex flex-col gap-2">
        <div className="flex">
          <div className="text-xs">(3)</div>
          <div className="flex flex-col text-xs ml-1">
            <div>PLA, Blue ($0.15/gr)</div>
            <div>est. weight: 20 gr (ea. $3)</div>
            <div className="mt-1 text-sm">60,000</div>
            <div>edit print details</div>
          </div>
        </div>

        <div className="flex">
          <div className="text-xs">(3)</div>
          <div className="flex flex-col text-xs ml-1">
            <div>PLA, Blue ($0.15/gr)</div>
            <div>est weight: 20 gr (ea. $3)</div>
            <div className="mt-1 text-sm">60,000</div>
            <div>edit print details</div>

          </div>
        </div>

      </div>
      <div className="w-16 flex justify-end">300,000</div>
      <div className="flex-grow flex justify-end">700,000</div>
    </div>
  );
};