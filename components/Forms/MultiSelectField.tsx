import {useRef, useState} from 'react';
// import CheckSvg from '../../statics/check.svg';
import {clsx} from '../../util/clsx';
import {useCombobox, useMultipleSelection} from 'downshift';
// import SelectArrowsSvg from '../../statics/select-arrows.svg';
import {Popup} from 'reactjs-popup';
import {FIELD_BORDER_CLASSES} from './shared';

interface MultiSelectFieldProps {
  rootClasses?: string;
  buttonClasses?: string;
  selectClasses?: string;
  items: string[];
  value?: string[];
  buttonLabel?: string;
  inputClasses?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (selectedOptions: string[]) => void;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
  items,
  value,
  rootClasses,
  buttonClasses,
  buttonLabel,
  inputClasses,
  onChange,
}) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({initialSelectedItems: [] as string[]});

  const getFilteredItems = (items: string[]) =>
    items.filter(
      item => selectedItems.indexOf(item) < 0 && `${item}`.toLowerCase().startsWith(inputValue.toLowerCase())
    );

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    openMenu,
  } = useCombobox({
    inputValue,
    items: getFilteredItems(items),
    onStateChange: ({inputValue, type, selectedItem}) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('');
            addSelectedItem(selectedItem);
            selectItem(null);
            openMenu();
            return;
          }

          break;
        default:
          break;
      }
    },
  });

  return (
    <div>
      <div ref={inputRef}>
        <div {...getComboboxProps()} className="relative">
          <div className="flex items-center rounded-md shadow-sm">
            <div>
              {selectedItems.map((selectedItem, index) => (
                <span
                  key={`selected-item-${index}`}
                  {...getSelectedItemProps({selectedItem, index})}
                  className="bg-red-300 text-bg-red-300 px-2 py-1 rounded-2xl mr-1"
                >
                  {selectedItem}
                  <span onClick={() => removeSelectedItem(selectedItem)} className="ml-1">
                    &#10005;
                  </span>
                </span>
              ))}
            </div>

            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <input
                {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
                className={clsx([
                  FIELD_BORDER_CLASSES,
                  'block w-full rounded-none rounded-l-md p-1 sm:text-sm bg-secondary text-subject',
                  // error ? 'focus:outline-none border-red-600' : '',
                  inputClasses,
                ])}
              />
            </div>
            <button
              {...getToggleButtonProps()}
              aria-label={'toggle menu'}
              className="bg-aside text-subject -ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
              </svg>
              <span>Sort</span>
            </button>
          </div>

          {/* <button  className="relative">
            &#8595;
          </button> */}
        </div>
      </div>

      <Popup
        trigger={<div className="w-full list-portal"></div>}
        open={isOpen}
        position="bottom right"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        className="border"
        offsetX={12}
        contentStyle={{
          padding: '0px',
          border: 'none',
          width: `${inputRef.current?.clientWidth}px`,
        }}
        arrow={false}
      >
        <ul {...getMenuProps({}, {suppressRefError: true})}>
          {getFilteredItems(items).map((item, index) => (
            <li
              style={highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}}
              key={`${item}${index}`}
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
        </ul>
      </Popup>
    </div>
  );
};

export default MultiSelectField;
