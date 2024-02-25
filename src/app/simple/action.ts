'use server'


import { ParseFormModel } from '@/models/parse-form.model';
import axios from 'axios';

export async function getPostRequest(parse: ParseFormModel) {
  try {
    const { data } = await axios.get(parse.url)
    return data;
  }catch (e){
    if(e instanceof Error){
      console.warn(e.message);
    }
    return null;
  }
}
