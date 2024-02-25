'use server'

import cheerio from "cheerio";
import { ParseFormModel } from '@/models/parse-form.model';

export const htmlScraping = async <T>(body: string, formData: ParseFormModel) => {
  const {fields, searchGroupQuery} = formData;
  const data: T[] = [];

  const $ = cheerio.load(body)

  await Promise.all($(
    searchGroupQuery
  ).map((_, row) =>{
    data.push(fields.reduce((acc, { propertyName, searchQuery, attribute }) => {
      const el = $(row).find(searchQuery);
      return {...acc, [propertyName]: attribute === 'text'?el.text():el.attr(attribute)}
    }, {} as T))
  }))

  return{
    data: data,
  }
}
