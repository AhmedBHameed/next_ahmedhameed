import {useCallback, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  CategoriesQuery,
  Category,
  CategoryStatus,
  UpdateCategoryInput,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
} from '../../../graphql/queries';
import {BaseButton} from '../../Buttons';
import {FormControl, SelectOption, SelectField, TextField} from '../../Forms';
import UploadImage from '../../Forms/Upload/UploadImage';
import useNotification from '../../Notification/Hooks/NotificationHook';
import {ulid} from 'ulid';
import CATEGORIES_QUERY from './graphql/getCategories.graphql';
import environment from '../../../config/environment';

type CategoryFormData = Omit<UpdateCategoryInput, 'status'> & {status: SelectOption<CategoryStatus>};

interface CategoryFormProps {
  className?: string;
  category?: Category;
  onClose?: () => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({category, onClose}) => {
  const isEditMode = !!category;
  const {status, imgSrc} = category || {};

  const [addCategory, addCategoryResult] = useAddCategoryMutation();
  const [updateCategory, updateCategoryResult] = useUpdateCategoryMutation();
  const {triggerNotification} = useNotification();

  const statusArray = [
    {label: CategoryStatus.Active, value: CategoryStatus.Active},
    {label: CategoryStatus.Inactive, value: CategoryStatus.Inactive},
  ];

  const {formState, control, register, setValue, handleSubmit} = useForm<CategoryFormData>({
    // resolver: joiResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      ...category,
      imgSrc: imgSrc || environment.noImageAvatar,
      status: status === CategoryStatus.Active ? statusArray[0] : statusArray[1],
    },
  });

  const submitCategory = useCallback(
    async (category: CategoryFormData) => {
      const {status, imgSrc, enDescription, arDescription, id, name} = category;

      if (isEditMode) {
        try {
          await updateCategory({
            variables: {
              updateCategoryInput: {
                id,
                arDescription,
                enDescription,
                name,
                imgSrc,
                status: status.value,
              },
            },
          });
          triggerNotification({
            type: 'success',
            message: 'Category has been updated successfully.',
          });
          onClose();
        } catch (error) {
          console.log(error);
          triggerNotification({
            type: 'error',
            message: 'Oops! something went wrong with updating category',
          });
        }
      } else {
        try {
          await addCategory({
            variables: {
              addCategoryInput: {
                id: ulid(),
                arDescription,
                enDescription,
                name,
                imgSrc,
                status: status.value,
              },
            },
            update: (cache, newCategoryResult) => {
              const oldCategories = cache.readQuery<CategoriesQuery>({
                query: CATEGORIES_QUERY,
              });

              if (oldCategories?.categories.length) {
                cache.writeQuery({
                  query: CATEGORIES_QUERY,
                  data: {
                    categories: [...oldCategories.categories, newCategoryResult.data.addCategory],
                  },
                });
              }
            },
          });
          triggerNotification({
            type: 'success',
            message: 'New category has been added successfully.',
          });
          onClose();
        } catch (error) {
          console.log(error);
          triggerNotification({
            type: 'error',
            message: 'Oops! something went wrong with adding category',
          });
        }
      }
    },
    [isEditMode, updateCategory, addCategory, onClose, triggerNotification]
  );

  useEffect(() => {
    register('id');
  }, [register]);

  const loading = addCategoryResult.loading || updateCategoryResult.loading;

  return (
    <form className="flex items-center gap-5" onSubmit={handleSubmit(submitCategory)}>
      <div className="flex items-center flex-grow">
        <Controller
          render={({value, onChange}) => {
            return (
              <UploadImage
                rootClasses="mr-3 border-subject rounded-full"
                src={value}
                onChange={urls => onChange(urls[0])}
                width={50}
                height={50}
              />
            );
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
                    setValue('status', selected);
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
        <BaseButton
          type="submit"
          className="bg-green-200 hover:bg-green-400 w-full justify-center"
          disabled={!formState.isValid || loading}
        >
          {category ? 'Update category' : 'Add category'}
        </BaseButton>
        <BaseButton className="bg-red-200 hover:bg-red-400 w-full justify-center mt-2" onClick={onClose}>
          Cancel
        </BaseButton>
      </div>
    </form>
  );
};

export default CategoryForm;
