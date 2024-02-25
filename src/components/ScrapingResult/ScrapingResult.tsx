'use client'


import JsonIcon from '@/components/icons/JsonIcon';
import TextIcon from '@/components/icons/TextIcon';
import SqlIcon from '@/components/icons/SqlIcon';
import { useContext } from 'react';
import { StateContext } from '@/app/simple/context';



const ScrapingResult = () => {
  const {result} = useContext(StateContext);


  return (
    <div className='flex flex-col min-h-[calc(100vh-32rem)] bg-gray-900 text-gray-200 font-mono mt-5'>

      <div className='flex items-center h-10 px-4 bg-gray-800 gap-4'>
        <button className='rounded bg-red-500 p-0.5'>
          <JsonIcon className="h-5 w-5 stroke-2"/>
        </button>
        <button className='rounded bg-yellow-500 p-0.5'>
          <TextIcon className="h-5 w-5 stroke-2"/>
        </button>
        <button className='rounded bg-green-500 p-0.5'>
          <SqlIcon className="h-5 w-5 stroke-2"/>
        </button>
      </div>
      <div className='flex-1 p-4'>
        <div className='mt-2'>
          <div className='bg-gray-800 p-4 mt-1'>
            <p>{JSON.stringify(result, null, 4)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ScrapingResult;
