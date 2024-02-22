'use client';

import { useFormSetting } from '@/components/ParseForm/parse-form.hook';
import FormFields from '@/components/ParseForm/FormFields';
import { PARSE_FIELD_DEFAULT } from '@/constants/parse-filed.constant';
import ScrapingResult from '@/components/ScrapingResult';

const ParseForm = () => {
  const { control, formFields, register, handleSubmit, errors, onSubmit } =
    useFormSetting();


  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label htmlFor='url'
                   className='form-label'>
              Url
            </label>
            <input {...register('url')} className='form-input' type='url' />
            <p className='form-wrong'>{errors?.url?.message}</p>
          </div>
        </div>
        <FormFields formFields={formFields} register={register} errors={errors} />
        <p className='form-wrong'>{errors?.fields?.message}</p>

        <div className='flex gap-3 pt-3'>
          <button type='submit'
                  className='bg-zinc-400 border-2 border-zinc-500 rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition'>Submit
          </button>
          <button type='button' onClick={() => formFields.append(PARSE_FIELD_DEFAULT)}
                  className='bg-zinc-800 border-2 border-zinc-700 rounded-lg text-white px-6 py-3 text-base hover:border-zinc-50 cursor-pointer transition'>Add
            Folder
          </button>
        </div>


      </form>
      <ScrapingResult result={{}} />
    </>
  );
};

export default ParseForm;
