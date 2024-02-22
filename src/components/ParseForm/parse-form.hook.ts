import * as yup from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ParseFormModel } from '@/models/parse-form.model';
import { ParseType } from '@/enums/parse-type.enum';
import { PARSE_FIELD_DEFAULT } from '@/constants/parse-filed.constant';
import { useContext } from 'react';
import { StateContext } from '@/app/parser/context';

const schema: yup.ObjectSchema<ParseFormModel> = yup.object().shape({
  url: yup.string().required().min(4).max(200).url().label('Url'),
  fields: yup
    .array()
    .of(
      yup.object({
        propertyType: yup.mixed<ParseType>().oneOf(Object.values(ParseType)).label('property Type').required(),
        className: yup.string().label('class Name').required(),
        propertyName: yup.string().label('property Name').required(),
      })
    )
    .default(() => [
      PARSE_FIELD_DEFAULT,
    ]),
});

export const useFormSetting = () => {
  const {getPage} = useContext(StateContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ParseFormModel>({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: ParseFormModel) => {
    getPage(data);
  });

  const formFields = useFieldArray({
    control,
    name: "fields",
  });

  return { control, register, handleSubmit, errors, onSubmit, formFields };
};
