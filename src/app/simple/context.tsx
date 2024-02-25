'use client';

import { createContext, useState } from 'react';
import { ParseFormModel } from '@/models/parse-form.model';
import { getPostRequest } from './action';
import { htmlScraping } from '@/scraping/html.scraping';




export interface StateContextParams<T> {
  getPage: (parse: ParseFormModel) => void;
  result: T;
}

const defaultState = {
  result: null,
  getPage: () => {
  },
};

export const StateContext = createContext<StateContextParams<undefined | null | ReadableStream<Uint8Array>>>(defaultState);

export default function StateContextComponent({
                                                children,
                                              }: Readonly<{
  children: React.ReactNode;
}>) {
  const [result, setResult] = useState<any>(null);

  const getPage = async (parse: ParseFormModel) => {

    const result = await getPostRequest(parse);
    setResult(await htmlScraping(result, parse));
  };


  return (
    <StateContext.Provider value={{ result, getPage }}>
      {children}
    </StateContext.Provider>
  );
}
