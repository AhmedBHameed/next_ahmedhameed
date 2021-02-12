import {useCallback, useState} from 'react';

import {useCategoriesQuery} from '../../../graphql/queries';
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
  const {data, loading, error} = useCategoriesQuery();

  const [category, setCategory] = useState(null);
  const [openModal, setOpenModal] = useState(true);

  const newCategory = useCallback(() => {
    setCategory(null);
    setOpenModal(true);
  }, [setCategory, setOpenModal]);

  const editCategory = useCallback(
    category => {
      setCategory(category);
      setOpenModal(true);
    },
    [setCategory, setOpenModal]
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
                      onClick={newCategory}
                    />
                  </div>,
                ]}
              />
              {/* text-white bg-indigo-600 hover:bg-indigo-700 */}
            </TableHeader>
            <TableBody className="divide-y divide-gray-200 bg-aside">
              {data?.categories.map(category => {
                return <ArticleRow key={category.name} category={category} onEdit={editCategory} />;
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      <Modal className="flex justify-center mx-8 items-center" open={openModal}>
        <ModalContainer className="p-3 w-full">
          {/* <ModalCloseButton onClose={closeModal} className="self-end" /> */}

          <Typography className="text-gray-50 mb-8">
            <span>{category ? 'Update article' : 'Add Article'}</span>
          </Typography>

          <ArticleForm category={category} onClose={closeModal} />
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default ArticleContainer;
