'use client';

import { createContext, useState } from 'react';
import { ParseFormModel } from '@/models/parse-form.model';
import { postRequest } from '@/request/post.request';




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

    const result = await postRequest(parse);
    setResult(result);
  };


  return (
    <StateContext.Provider value={{ result, getPage }}>
      {children}
    </StateContext.Provider>
  );
}
