import {useCallback, useState} from 'react';
import {Modal} from '../../Modal/Modal';
import ModalContainer from '../../Modal/ModalContainer';
import {HeaderCell, Table, TableHeader} from '../../Table/Table';
import {TableBody} from '../../Table/TableBody';
import CategoryRow from './CategoryRow';
import Typography from '../../Typography/Typography';
import CategoryForm from './CategoryForm';

const CategoryContainer: React.FC = () => {
  const [category, setCategory] = useState(null);
  const [categories] = useState([
    {
      id: 'abc',
      imgSrc: 'media/caqui-rojo-brillante_1611439371850.jpg',
      name: 'Node.js',
      enDescription: 'Server side rendering',
      arDescription: 'استدعاء من جهة السيرفر',
      status: 'ACTIVE',
    },
  ]);
  const [openModal, setOpenModal] = useState(false);

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
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden sm:rounded-lg border border-gray-50">
            <Table>
              <TableHeader className="bg-secondary">
                <HeaderCell
                  className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                  cells={['Category name', 'Description', 'Status', '']}
                />
              </TableHeader>
              <TableBody className="divide-y divide-gray-200 bg-aside">
                {categories.map(category => {
                  return <CategoryRow key={category.name} category={category} onEdit={editCategory} />;
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <Modal className="flex justify-center mx-8 items-center" open={openModal}>
        <ModalContainer className="p-3 w-full">
          {/* <ModalCloseButton onClose={closeModal} className="self-end" /> */}

          <Typography className="text-gray-50 mb-5">
            <span>Update category</span>
          </Typography>

          <CategoryForm category={category} onSubmit={console.log} onClose={closeModal} />
        </ModalContainer>
      </Modal>
    </div>
  );
};

export default CategoryContainer;
