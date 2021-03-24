import {useCallback, useState} from 'react';

import {Post, useCategoriesQuery, usePostsQuery} from '../../../graphql/queries';
import AddSvg from '../../../statics/add.svg';
import CircleButton from '../../Buttons/CircleButton';
import {Modal} from '../../Modal/Modal';
import {ModalContainer} from '../../Modal/ModalContainer';
import {HeaderCells, Table, TableHeader} from '../../Table/Table';
import {TableBody} from '../../Table/TableBody';
import Typography from '../../Typography/Typography';
import ArticleForm from './ArticleForm';
import ArticleRow from './ArticleRow';

const ArticleContainer: React.FC = () => {
  const postQuery = usePostsQuery();
  const categoriesQuery = useCategoriesQuery();

  const [post, setPost] = useState<Post | undefined>();
  const [openModal, setOpenModal] = useState(false);

  const newPost = useCallback(() => {
    setPost(null);
    setOpenModal(true);
  }, [setPost, setOpenModal]);

  const editPost = useCallback(
    postId => {
      setPost(postId);
      setOpenModal(true);
    },
    [setPost, setOpenModal]
  );

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  return (
    <div className="flex flex-col mt-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 min-w-full sm:px-6 lg:px-8">
          <Table>
            <TableHeader className="bg-secondary">
              <HeaderCells
                className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider last:text-right"
                cells={[
                  'Article image',
                  'title',
                  'Category tags',
                  '#Visiters',
                  <div className="flex justify-center px-5">
                    <CircleButton
                      className="text-right text-subject hover:bg-darkSubject hover:text-gray-100"
                      Icon={AddSvg}
                      onClick={newPost}
                    />
                  </div>,
                ]}
              />
              {/* text-white bg-indigo-600 hover:bg-indigo-700 */}
            </TableHeader>
            <TableBody className="divide-y divide-gray-200 bg-aside">
              {postQuery.data?.posts.map(post => {
                return <ArticleRow key={post.id} post={post} onEdit={editPost} />;
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      <Modal className="flex justify-center mx-8 items-center" open={openModal}>
        <ModalContainer className="p-3 w-full">
          {/* <ModalCloseButton onClose={closeModal} className="self-end" /> */}

          <Typography className="text-gray-50 mb-8">
            <span>{post ? 'Update article' : 'Add Article'}</span>
          </Typography>

          <ArticleForm post={post} categories={categoriesQuery.data?.categories} onClose={closeModal} />
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ArticleContainer;
