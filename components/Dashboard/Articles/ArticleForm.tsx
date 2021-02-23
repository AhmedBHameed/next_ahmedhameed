import {useCallback, useEffect, useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ulid} from 'ulid';

import environment from '../../../config/environment';
import {
  Post,
  PostStatus,
  PostInput,
  useCreatePostMutation,
  useUpdatePostMutation,
  Category,
  PostsQuery,
} from '../../../graphql/queries';
import {joiResolver} from '../../../util/joiResolver';
import {BaseButton} from '../../Buttons';
import {FieldLabel, FormControl, MultiSelectField, SelectField, SelectOption, Textarea, TextField} from '../../Forms';
import UploadImage from '../../Forms/Upload/UploadImage';
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay';
import MDPreviewClient from '../../MDPreview/MDPreviewClient';
import {Modal, ModalCloseButton, ModalContainer} from '../../Modal/Modal';
import useNotification from '../../Notification/Hooks/NotificationHook';
import POST_QUERY from '../../shared/graphql/posts.graphql';
import {useValidations} from '../../shared/hooks/useValidationsHook';

const articleStatus: SelectOption[] = [
  {label: PostStatus.Draft, value: PostStatus.Draft},
  {label: PostStatus.Published, value: PostStatus.Published},
  {label: PostStatus.Course, value: PostStatus.Course},
];

type PostFormData = Omit<PostInput, 'postCategoryIds' | 'status'> & {postCategoryNames: string[]; status: SelectOption};

interface ArticleFormProps {
  className?: string;
  post?: Post;
  categories?: Category[];
  onClose?: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({post, categories, onClose}) => {
  const isEditMode = !!post;

  const [isArabicPost, setIsArabicPost] = useState(true);

  const [createPost, createPostQuery] = useCreatePostMutation({
    update: (cache, newCategoryResult) => {
      const allPosts = cache.readQuery<PostsQuery>({
        query: POST_QUERY,
      });

      if (allPosts.posts.length) {
        cache.writeQuery<PostsQuery>({
          query: POST_QUERY,
          data: {
            posts: [...allPosts.posts, newCategoryResult.data.createPost],
          },
        });
      }
    },
  });
  const [updatePost, updatePostQuery] = useUpdatePostMutation();

  const categoriesTags = useMemo(() => {
    if (!categories) return [];
    return categories.map(category => category.name);
  }, [categories]);

  const [previewMode, setPreviewMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {triggerNotification} = useNotification();
  const {Joi, requiredString, optionalString, requiredArrayOfStrings} = useValidations();

  const postSchema = useMemo(
    () =>
      Joi.object({
        id: optionalString,
        arTitle: requiredString,
        arBody: requiredString,
        enTitle: requiredString,
        enBody: requiredString,
        banner: requiredString,
        status: Joi.object({
          label: requiredString,
          value: requiredString,
        }),
        postCategoryNames: requiredArrayOfStrings,
      }),
    []
  );

  const {formState, control, errors, register, setValue, getValues, handleSubmit} = useForm<PostFormData>({
    resolver: joiResolver(postSchema),
    mode: 'onChange',
    shouldUnregister: false,
    defaultValues: {
      id: post?.id || '',
      arTitle: post?.arTitle || '',
      arBody:
        post?.arBody ||
        `
      # شلونة الحجي
      A paragraph with *emphasis* and **strong importance**.
      
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
  
  <Audio src="http://localhost:5000/nodeys/media/shlon_alhaji.mp3" />
  
  ![image](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3)
  `,
      enTitle: post?.enTitle || '',
      enBody: post?.enBody || '',
      banner: post?.banner || '',
      status: {
        label: post?.status || PostStatus.Draft,
        value: post?.status || PostStatus.Draft,
      },
      postCategoryNames:
        categories
          .filter(category => (post?.postCategoryIds.includes(category.id) ? category : null))
          .map(cat => cat.name) || [],
    },
  });

  const submit = useCallback(
    async (postData: PostFormData) => {
      const data = {
        id: postData.id,
        arTitle: postData.arTitle,
        arBody: postData.arBody,
        enTitle: postData.enTitle,
        enBody: postData.enBody,
        banner: postData.banner,
        postCategoryIds: categories
          .filter(category => (postData.postCategoryNames.includes(category.name) ? category : null))
          .map(cat => cat.id),
        status: postData.status?.value as PostStatus,
      };

      if (isEditMode) {
        try {
          updatePost({
            variables: {
              post: {
                ...data,
              },
            },
          });
          triggerNotification({
            type: 'success',
            message: 'Your post has been updated.',
          });
        } catch (error) {
          console.log(error);
          triggerNotification({
            type: 'error',
            message: 'Oops! something went wrong with adding category',
          });
        }
      } else {
        try {
          createPost({
            variables: {
              post: {
                ...data,
                id: ulid(),
              },
            },
          });
          triggerNotification({
            type: 'success',
            message: 'Your post has been created.',
          });
        } catch (error) {
          console.log(error);
          triggerNotification({
            type: 'error',
            message: 'Oops! something went wrong with adding category',
          });
        }
      }
    },
    [isEditMode, categories, onClose, triggerNotification]
  );

  useEffect(() => {
    register('id');
  }, [register]);

  const loading = createPostQuery.loading || updatePostQuery.loading;

  return (
    <>
      {loading && <LoadingOverlay />}
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-1 items-center h-20 w-32">
          <FormControl error={errors.banner?.message}>
            <Controller
              render={({value, onChange}) => (
                <UploadImage
                  rootClasses="border-subject flex-shrink-0 rounded-lg p-1 border-2 w-full h-full"
                  src={value || environment.noImageAvatar}
                  onChange={urls => onChange(urls[0])}
                  width={116}
                  height={68}
                />
              )}
              name="banner"
              control={control}
            />
          </FormControl>
        </div>

        <div className="flex flex-col flex-grow">
          <FormControl>
            <FieldLabel className="text-primary text-lg">Title [Arabic, English]</FieldLabel>
            <TextField
              // error={!!email?.message}
              type="text"
              name="enTitle"
              placeholder="Category description"
              ref={register}
              className="text-primary bg-secondary"
            />
          </FormControl>

          <FormControl dir="rtl">
            <TextField
              // error={!!email?.message}
              type="text"
              name="arTitle"
              placeholder="وصف الفئة"
              ref={register}
              className="text-primary bg-secondary mt-2"
            />
          </FormControl>
        </div>

        <FormControl>
          <FieldLabel className="text-primary text-lg">Categories</FieldLabel>
          <Controller
            render={({value, onChange}) => {
              return (
                <MultiSelectField
                  items={categoriesTags}
                  value={value}
                  placeholder="Category tags"
                  buttonClasses="text-primary w-full"
                  buttonLabel="Select categories"
                  onChange={onChange}
                />
              );
            }}
            name="postCategoryNames"
            control={control}
          />
        </FormControl>

        <div className="flex gap-4">
          <BaseButton
            className="my-4 bg-subject w-full hover:bg-darkSubject justify-center"
            onClick={() => {
              setIsArabicPost(false);
              setOpenModal(true);
            }}
          >
            Edit English article
          </BaseButton>

          <BaseButton
            className="my-4 bg-subject w-full hover:bg-darkSubject justify-center"
            onClick={() => {
              setIsArabicPost(true);
              setOpenModal(true);
            }}
          >
            Edit Arabic article
          </BaseButton>
        </div>

        <div className="flex">
          <FormControl className="w-1/2">
            <FieldLabel className="text-primary text-lg">Status</FieldLabel>
            <Controller
              render={({value, onChange}) => {
                return (
                  <SelectField
                    items={articleStatus}
                    value={value}
                    buttonClasses="text-primary w-full"
                    placeholder="Article status"
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

        <div className="flex gap-2 justify-end">
          <BaseButton className="my-4 bg-red-200 hover:bg-red-400 w-40 justify-center" onClick={onClose}>
            Cancel
          </BaseButton>

          <BaseButton
            type="submit"
            className="my-4 bg-green-200 hover:bg-green-400 w-40 justify-center"
            disabled={!formState.isValid || loading}
          >
            {isEditMode ? 'Update Article' : 'Add Article'}
          </BaseButton>
        </div>
      </form>

      <Modal open={openModal}>
        <ModalContainer className="p-2 h-full">
          <ModalCloseButton className="mb-2 self-end" onClose={() => setOpenModal(false)} />

          <BaseButton
            className="mx-1 flex-shrink text-reverse border border-subject bg-subject"
            onClick={() => setPreviewMode(s => !s)}
          >
            {previewMode ? 'Compose mode' : 'Preview mode'}
          </BaseButton>
          <div className="flex flex-grow overflow-auto">
            {previewMode ? (
              <div className="p-1 h-full w-full">
                <div className="p-2 h-full border-2 overflow-auto rounded-lg font-kufiRegular">
                  <MDPreviewClient markdown={isArabicPost ? getValues('arBody') : getValues('enBody')} />
                </div>
              </div>
            ) : (
              <div className="p-1 h-full w-full">
                {isArabicPost ? (
                  <Textarea
                    indentOnTabKey
                    className="bg-primary h-full resize-none text-subject"
                    ref={register}
                    name="arBody"
                  />
                ) : (
                  <Textarea
                    indentOnTabKey
                    className="bg-primary h-full resize-none text-subject"
                    ref={register}
                    name="enBody"
                  />
                )}
              </div>
            )}
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ArticleForm;
