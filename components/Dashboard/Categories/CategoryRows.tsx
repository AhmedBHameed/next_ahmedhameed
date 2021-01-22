import {useState} from 'react';
import Image from 'next/image';
import {Cell, Row} from '../../Table/Table';
import SimpleButton from '../../Buttons/SimpleButton';
import {FormControl, SelectField, TextField} from '../../Forms';

interface CategoryRowsProps {
  categories?: any[];
}

const CategoryRows: React.FC<CategoryRowsProps> = ({categories}) => {
  const [editMode, setEditMode] = useState(true);

  return (
    <Row>
      {editMode ? (
        <>
          <Cell className="px-6 py-4 whitespace-nowrap">
            <FormControl>
              <TextField
                // error={!!email?.message}
                type="text"
                name="email"
                placeholder="Category name"
                // ref={register}
                className="text-primary bg-secondary"
              />
            </FormControl>
          </Cell>

          <Cell className="px-6 py-4 whitespace-nowrap">
            <FormControl>
              <TextField
                // error={!!email?.message}
                type="text"
                name="email"
                placeholder="Category description"
                // ref={register}
                className="text-primary bg-secondary"
              />
            </FormControl>

            <FormControl dir="rtl">
              <TextField
                // error={!!email?.message}
                type="text"
                name="email"
                placeholder="وصف الفئة"
                // ref={register}
                className="text-primary bg-secondary mt-2"
              />
            </FormControl>
          </Cell>

          <Cell className="px-6 py-4 whitespace-nowrap">
            <SelectField
              items={[
                {label: 'Active', value: 'ACTIVE'},
                {label: 'Inactive', value: 'INACTIVE'},
              ]}
              buttonClasses="text-primary"
              placeholder="Category status"
            />
          </Cell>

          <Cell className="px-6 py-4 whitespace-nowrap">
            <SimpleButton
              onClick={() => setEditMode(false)}
              className="text-subject hover:text-darkSubjec"
              label="Submit"
            />

            <SimpleButton
              onClick={() => setEditMode(false)}
              className="text-red-700 hover:text-red-900"
              label="Cancel"
            />
          </Cell>
        </>
      ) : (
        <>
          <Cell className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Image src="/images/nodejs.png" alt="Keyboard image" layout="fixed" width="40" height="40" />
              </div>
              <div className="ml-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Node.js
                </span>
              </div>
            </div>
          </Cell>

          <Cell className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">Server side rendering</div>
            <div className="text-sm text-gray-500" dir="rtl">
              استدعاء من جهة السيرفر
            </div>
          </Cell>

          <Cell className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </Cell>

          <Cell className="px-6 py-4 whitespace-nowrap">
            <SimpleButton
              onClick={() => setEditMode(true)}
              className="text-subject hover:text-darkSubjec"
              label="Edit"
            />
          </Cell>
        </>
      )}
    </Row>
  );
};

export default CategoryRows;
