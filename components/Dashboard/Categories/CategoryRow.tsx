import Image from '../../Image/Image';
import {Cell, Row} from '../../Table/Table';
import SimpleButton from '../../Buttons/SimpleButton';

interface CategoryRowProps {
  category?: any;
  onEdit?: (category) => void;
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
        <div className="text-sm text-gray-900">{enDescription}</div>
        <div className="text-sm text-gray-500" dir="rtl">
          {arDescription}
        </div>
      </Cell>

      <Cell className="px-6 py-3 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {status}
        </span>
      </Cell>

      <Cell className="px-6 py-3 whitespace-nowrap">
        <SimpleButton onClick={() => onEdit(category)} className="text-subject hover:text-darkSubjec" label="Edit" />
      </Cell>
    </Row>
  );
};

export default CategoryRow;
