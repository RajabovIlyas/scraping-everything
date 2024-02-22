import { ParseFieldModel } from '@/models/parse-field.model';
import { ParseType } from '@/enums/parse-type.enum';

export const PARSE_FIELD_DEFAULT: ParseFieldModel = {
  propertyType: ParseType.string,
  className: '',
  propertyName: '',
}
