import { ParseType } from '@/enums/parse-type.enum';

export interface ParseFieldModel {
  propertyType: ParseType;
  className: string;
  propertyName: string;
}
