import {useCallback, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {BaseButton} from '../../Buttons';
import {FormControl, SelectField, TextField} from '../../Forms';
import UploadImage from '../../Forms/Upload/UploadImage';

interface CategoryFormProps {
  className?: string;
  category?: any;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (category: any) => void;
  onClose?: () => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({category, onClose, onSubmit}) => {
  console.log('🚀 ~ file: CategoryForm.tsx ~ line 16 ~ category', category);
  const {formState, control, errors, register, setValue, handleSubmit} = useForm({
    // resolver: joiResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      ...category,
      status: {
        label: 'Inactive',
        value: 'INACTIVE',
      },
    },
  });

  const submitCategory = useCallback(
    category => {
      onSubmit(category);
    },
    [onSubmit]
  );

  const statusArray = [
    {label: 'Active', value: 'ACTIVE'},
    {label: 'Inactive', value: 'INACTIVE'},
  ];

  return (
    <form className="flex items-center gap-5" onSubmit={handleSubmit(submitCategory)}>
      <div className="flex items-center flex-grow">
        <Controller
          render={({value, onChange}) => {
            return <UploadImage rootClasses="border-subject" src={value} onChange={urls => onChange(urls[0])} />;
          }}
          name="imgSrc"
          control={control}
        />

        <FormControl>
          <TextField
            // error={!!email?.message}
            type="text"
            name="name"
            placeholder="Category name"
            ref={register}
            className="text-primary bg-secondary w-full"
          />
        </FormControl>
      </div>

      <div className="flex flex-col flex-grow">
        <FormControl>
          <TextField
            // error={!!email?.message}
            type="text"
            name="enDescription"
            placeholder="Category description"
            ref={register}
            className="text-primary bg-secondary"
          />
        </FormControl>

        <FormControl dir="rtl">
          <TextField
            // error={!!email?.message}
            type="text"
            name="arDescription"
            placeholder="وصف الفئة"
            ref={register}
            className="text-primary bg-secondary mt-2"
          />
        </FormControl>
      </div>

      <div className="flex-grow">
        <FormControl>
          <Controller
            render={({value, onChange}) => {
              return (
                <SelectField
                  items={statusArray}
                  value={statusArray.find(item => item.value === value.value)}
                  buttonClasses="text-primary w-full"
                  placeholder="Category status"
                  onChange={selected => {
                    onChange(selected);
                    setValue('status', selected.value);
                  }}
                />
              );
            }}
            name="status"
            control={control}
          />
        </FormControl>
      </div>

      <div className="flex-grow">
        <BaseButton className="bg-green-200 hover:bg-green-400 w-full justify-center" disabled={!formState.isValid}>
          Update category
        </BaseButton>
        <BaseButton className="bg-red-200 hover:bg-red-400 w-full justify-center mt-2" onClick={onClose}>
          Cancel
        </BaseButton>
      </div>
    </form>
  );
};

export default CategoryForm;
