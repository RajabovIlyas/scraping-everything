import { ParseType } from '@/enums/parse-type.enum';

export interface ParseFieldModel {
  propertyType: ParseType;
  searchQuery: string;
  propertyName: string;
  attribute: string;
}
