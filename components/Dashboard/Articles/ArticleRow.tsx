import Image from '../../Image/Image';
import {Cell, Row} from '../../Table/Table';
import SimpleButton from '../../Buttons/SimpleButton';
import {Category} from '../../../graphql/queries';

interface ArticleRowProps {
  category?: Category;
  // eslint-disable-next-line no-unused-vars
  onEdit?: (category: Category) => void;
  // eslint-disable-next-line no-unused-vars
  onDelete?: (id: string) => void;
  onShare?: () => void;
}

const ArticleRow: React.FC<ArticleRowProps> = ({category, onEdit, onShare, onDelete}) => {
  const {imgSrc, name, enDescription, arDescription, status} = category;
  return (
    <Row>
      <Cell className="px-6 py-3 whitespace-nowrap">
        <div className="flex items-center flex-shrink-0 h-20 w-32">
          <Image src={imgSrc} className="rounded-lg p-1 border-2" width={128} height={80} />
          {/* <Image src="/images/nodejs.png" alt="Keyboard image" layout="fixed" width="40" height="40" /> */}
        </div>
      </Cell>

      <Cell className="px-6 py-3 whitespace-nowrap">
        <div className="text-sm text-gray-900 text-primary">{enDescription}</div>
        <div className="text-sm text-gray-500 text-primary" dir="rtl">
          {arDescription}
        </div>
      </Cell>

      <Cell className="px-6 py-3 whitespace-nowrap">
        <span className="m-0.5 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
          {status}
        </span>
      </Cell>

      <Cell className="px-6 py-3 whitespace-nowrap">
        <span className="m-0.5 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-300 text-indigo-500">
          123
        </span>
      </Cell>

      <Cell className="px-6 py-3">
        <div className="flex flex-col justify-center items-center h-full">
          <SimpleButton
            onClick={() => onEdit(category)}
            className="text-subject hover:text-darkSubject px-6 my-1"
            label="Edit"
          />

          <SimpleButton
            onClick={() => onDelete('category')}
            className="text-red-400 hover:text-red-600 px-6 my-1"
            label="Delete"
          />

          <SimpleButton onClick={onShare} className="text-green-600 hover:text-green-800 px-6 my-1" label="Share" />
        </div>
      </Cell>
    </Row>
  );
};

export default ArticleRow;
