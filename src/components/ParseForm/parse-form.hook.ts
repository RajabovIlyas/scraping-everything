import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {ParseFormModel} from "@/models/parse-form.model";
import {ParseType} from "@/enums/parse-type.enum";



const schema:yup.ObjectSchema<ParseFormModel> = yup.object().shape({
    url: yup.string()
        .required()
        .min(4)
        .max(50)
        .label('Url'),
    folders: yup.array().of(
        yup.object({
            type: yup.mixed<ParseType>().oneOf(Object.values(ParseType)).required(),
            className: yup.string().required(),
            propertyName: yup.string().required(),
        })
    )
        .default(() => [{ type: ParseType.string, className: '', propertyName: '' }])
});

export const useFormSetting = () => {

    const { control, register, handleSubmit, formState: { errors } } = useForm<ParseFormModel>({
        defaultValues: {},
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit((data: ParseFormModel) => {
        console.log('show data', data)
    });

    return { control, register, handleSubmit, errors, onSubmit };
};
