import {useSelect} from 'downshift';
import {useRef} from 'react';
import {Popup} from 'reactjs-popup';
import {clsx} from '../../util/clsx';
import {SelectOption} from './models/SelectOption';
import {FIELD_BORDER_CLASSES} from './shared';

interface SelectFieldProps {
  rootClasses?: string;
  buttonClasses?: string;
  selectClasses?: string;
  items: SelectOption[];
  value: SelectOption;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (selectedOption: SelectOption) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  items,
  value,
  rootClasses,
  buttonClasses,
  placeholder,
  onChange,
}) => {
  const selectButtonRef = useRef<HTMLDivElement | null>(null);
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange: (changes) => {
      onChange(changes.selectedItem);
    },
    selectedItem: value,
  });

  return (
    <>
      <div className={rootClasses} ref={selectButtonRef}>
        <button
          type="button"
          {...getToggleButtonProps()}
          className={clsx([
            FIELD_BORDER_CLASSES,
            'bg-secondary cursor-pointer relative rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 sm:text-sm',
            buttonClasses,
          ])}
        >
          <span className="block truncate">
            {selectedItem?.label || placeholder || 'Select item'}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {isOpen ? (
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  fillRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  fillRule="evenodd"
                />
              </svg>
            )}
          </span>
        </button>
      </div>

      <Popup
        arrow={false}
        className="border"
        closeOnDocumentClick
        contentStyle={{
          padding: '0px',
          border: 'none',
          width: `${selectButtonRef.current?.clientWidth}px`,
        }}
        mouseEnterDelay={0}
        mouseLeaveDelay={300}
        offsetX={8}
        on="hover"
        open={isOpen}
        position="bottom right"
        trigger={<div className="list-portal" />}
      >
        <ul
          {...getMenuProps({}, {suppressRefError: true})}
          className="bg-aside text-subject border-2 mt-0.5 border-gray-300 rounded-md overflow-hidden text-base sm:text-sm"
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                key={item}
                {...getItemProps({item, index})}
                className={clsx([
                  'p-2 text-subject font-bold bg-secondary cursor-pointer',
                  highlightedIndex === index ? 'bg-aside' : '',
                  selectedItem?.value === item.value ? 'text-darkSubject' : '',
                ])}
              >
                {item.label}
              </li>
            ))}

          {/* <li
            id="listbox-option-0"
            role="option"
          >
            <span className="font-normal block truncate">Wade Cooper</span>

            <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
              <CheckSvg className="h-5 w-5" />
            </span>
          </li> */}
        </ul>
      </Popup>
    </>
  );
};

export default SelectField;
