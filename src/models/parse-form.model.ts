import { ParseFieldModel } from '@/models/parse-field.model';

export interface ParseFormModel {
  url: string;
  searchGroupQuery: string;
  fields: ParseFieldModel[];
}
