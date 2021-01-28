import Image from '../../Image/Image';
import {Cell, Row} from '../../Table/Table';
import SimpleButton from '../../Buttons/SimpleButton';
import {Category, CategoryStatus} from '../../../graphql/queries';
import {clsx} from '../../../util/clsx';

interface CategoryRowProps {
  category?: Category;
  // eslint-disable-next-line no-unused-vars
  onEdit?: (category: Category) => void;
}

const CategoryRow: React.FC<CategoryRowProps> = ({category, onEdit}) => {
  const {imgSrc, name, enDescription, arDescription, status} = category;
  return (
    <Row>
      <Cell className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex items-center flex-shrink-0 h-20 w-20">
            <Image src={imgSrc} className="rounded-full border-2 w-full h-full" />
            {/* <Image src="/images/nodejs.png" alt="Keyboard image" layout="fixed" width="40" height="40" /> */}
          </div>
          <div className="ml-4">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {name}
            </span>
          </div>
        </div>
      </Cell>

      <Cell className="px-6 py-3 whitespace-nowrap">
        <div className="text-sm text-gray-900 text-primary">{enDescription}</div>
        <div className="text-sm text-gray-500 text-primary" dir="rtl">
          {arDescription}
        </div>
      </Cell>

      <Cell className="px-6 py-3 whitespace-nowrap">
        <span
          className={clsx([
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
            status === CategoryStatus.Active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
          ])}
        >
          {status}
        </span>
      </Cell>

      <Cell className="px-6 py-3 whitespace-nowrap text-right">
        <SimpleButton
          onClick={() => onEdit(category)}
          className="text-subject hover:text-darkSubject px-6"
          label="Edit"
        />
      </Cell>
    </Row>
  );
};

export default CategoryRow;
