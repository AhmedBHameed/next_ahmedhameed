import {useCallback, useEffect, useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  CategoriesQuery,
  Category,
  CategoryStatus,
  UpdateCategoryInput,
  useAddCategoryMutation,
  useCategoriesQuery,
} from '../../../graphql/queries';
import {BaseButton} from '../../Buttons';
import {FieldLabel, FormControl, SelectOption, MultiSelectField, TextField, Textarea} from '../../Forms';
import UploadImage from '../../Forms/Upload/UploadImage';
import useNotification from '../../Notification/Hooks/NotificationHook';
import {ulid} from 'ulid';
import environment from '../../../config/environment';
import {MarkdownEditor} from '../../MarkdownEditor/MarkdownEditor';
import {jsx} from '@emotion/react';
import {Modal, ModalCloseButton, ModalContainer} from '../../Modal/Modal';
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay';

type ArticleFormData = any;

interface ArticleFormProps {
  className?: string;
  category?: Category;
  onClose?: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({category, onClose}) => {
  const isEditMode = !!category;
  const {status, imgSrc} = category || {};

  const [markdown, setMarkdown] = useState(`A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  \`\`\`jsx
  function test() {
    console.log('This is jsx sample');
  }
  \`\`\`
  
  \`\`\`css
  .test {
    color: red;
  }
  \`\`\`
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  `);
  const [openModal, setOpenModal] = useState(false);
  const [addCategory, addCategoryResult] = useAddCategoryMutation();
  const categoriesQuery = useCategoriesQuery();
  const {triggerNotification} = useNotification();

  const categoriesTags = useMemo(() => {
    return categoriesQuery.data?.categories.map(cat => cat.name);
  }, [categoriesQuery.data]);

  const {formState, control, register, setValue, handleSubmit} = useForm<ArticleFormData>({
    // resolver: joiResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      ...category,
      imgSrc: imgSrc || environment.noImageAvatar,
    },
  });

  const submitCategory = useCallback(
    async (category: ArticleFormData) => {
      // console.log('🚀 ~ file: ArticleForm.tsx ~ line 51 ~ category', category);
      // const {status, imgSrc, enDescription, arDescription, id, name} = category;
      // if (isEditMode) {
      //   try {
      //     await updateCategory({
      //       variables: {
      //         updateCategoryInput: {
      //           id,
      //           arDescription,
      //           enDescription,
      //           name,
      //           imgSrc,
      //           status: status.value,
      //         },
      //       },
      //     });
      //     triggerNotification({
      //       type: 'success',
      //       message: 'Category has been updated successfully.',
      //     });
      //     onClose();
      //   } catch (error) {
      //     console.log(error);
      //     triggerNotification({
      //       type: 'error',
      //       message: 'Oops! something went wrong with updating category',
      //     });
      //   }
      // } else {
      //   try {
      //     await addCategory({
      //       variables: {
      //         addCategoryInput: {
      //           id: ulid(),
      //           arDescription,
      //           enDescription,
      //           name,
      //           imgSrc,
      //           status: status.value,
      //         },
      //       },
      //       update: (cache, newCategoryResult) => {
      //         const oldCategories = cache.readQuery<CategoriesQuery>({
      //           query: CATEGORIES_QUERY,
      //         });
      //         if (oldCategories?.categories.length) {
      //           cache.writeQuery({
      //             query: CATEGORIES_QUERY,
      //             data: {
      //               categories: [...oldCategories.categories, newCategoryResult.data.addCategory],
      //             },
      //           });
      //         }
      //       },
      //     });
      //     triggerNotification({
      //       type: 'success',
      //       message: 'New category has been added successfully.',
      //     });
      //     onClose();
      //   } catch (error) {
      //     console.log(error);
      //     triggerNotification({
      //       type: 'error',
      //       message: 'Oops! something went wrong with adding category',
      //     });
      //   }
      // }
    },
    [isEditMode, addCategory, onClose, triggerNotification]
  );

  useEffect(() => {
    register('id');
  }, [register]);

  const loading = addCategoryResult.loading || categoriesQuery.loading;

  if (loading) return <LoadingOverlay />;

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(submitCategory)}>
        <div className="flex items-center h-20 w-32">
          <Controller
            render={({value, onChange}) => (
              <UploadImage
                rootClasses="border-subject flex-shrink-0 rounded-lg p-1 border-2 w-full h-full"
                src={value}
                onChange={urls => onChange(urls[0])}
                width={116}
                height={68}
              />
            )}
            name="imgSrc"
            control={control}
          />
        </div>

        <div className="flex flex-col flex-grow">
          <FormControl>
            <FieldLabel className="text-gray-50 text-lg">Title [Arabic, English]</FieldLabel>
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

        <FormControl>
          {/* <Controller
            render={({value, onChange}) => {
              return (
                <MultiSelectField
                  multiple
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
          /> */}

          <MultiSelectField
            items={categoriesTags}
            // value={statusArray.find(item => item.value === value.value)}
            buttonClasses="text-primary w-full"
            buttonLabel="Select categories"
            onChange={selected => {
              console.log('🚀 ~ file: ArticleForm.tsx ~ line 199 ~ selected', selected);
              // onChange(selected);
              // setValue('status', selected);
            }}
          />
        </FormControl>

        <BaseButton className="my-4 bg-red-200 hover:bg-red-400 w-40 justify-center" onClick={() => setOpenModal(true)}>
          Open modal
        </BaseButton>

        <div className="flex gap-2 justify-end">
          <BaseButton className="my-4 bg-red-200 hover:bg-red-400 w-40 justify-center" onClick={onClose}>
            Cancel
          </BaseButton>

          <BaseButton
            type="submit"
            className="my-4 bg-green-200 hover:bg-green-400 w-40 justify-center"
            disabled={!formState.isValid || loading}
          >
            {category ? 'Update Article' : 'Add Article'}
          </BaseButton>
        </div>
      </form>

      <Modal open={openModal}>
        <ModalContainer className="p-2 h-full">
          <ModalCloseButton className="mb-2 self-end" onClose={() => setOpenModal(false)} />
          <div className="flex h-full">
            <div className="p-1 h-full w-1/2">
              <Textarea
                indentOnTabKey
                className="bg-primary h-full overflow-auto resize-none text-subject"
                value={markdown}
                onChange={event => setMarkdown(event.target.value)}
              />
            </div>
            <div className="p-1 h-full w-1/2">
              <MarkdownEditor markdown={markdown} className=" p-2 h-full border-2 rounded-lg" />
            </div>
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ArticleForm;
