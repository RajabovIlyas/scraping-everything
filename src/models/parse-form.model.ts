import { ParseFieldModel } from '@/models/parse-field.model';

export interface ParseFormModel {
  url: string;
  fields: ParseFieldModel[];
}
