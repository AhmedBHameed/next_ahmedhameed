import {useRef} from 'react';
// import CheckSvg from '../../statics/check.svg';
import {clsx} from '../../util/clsx';
import {useSelect} from 'downshift';
// import SelectArrowsSvg from '../../statics/select-arrows.svg';
import {Popup} from 'reactjs-popup';
import {FIELD_BORDER_CLASSES} from './shared';
import {SelectOption} from './models/SelectOption';

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

const SelectField: React.FC<SelectFieldProps> = ({items, value, rootClasses, buttonClasses, placeholder, onChange}) => {
  const selectButtonRef = useRef<HTMLDivElement | null>(null);
  const {isOpen, selectedItem, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps} = useSelect({
    items,
    onSelectedItemChange: changes => {
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
            'bg-secondary relative w-full rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm',
            buttonClasses,
          ])}
        >
          <span className="block truncate">{selectedItem?.label || placeholder || 'Select item'}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {/* <SelectArrowsSvg className="h-5 w-5 text-subject" /> */}
          </span>
        </button>
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
          width: `${selectButtonRef.current?.clientWidth}px`,
        }}
        arrow={false}
      >
        <ul
          {...getMenuProps({}, {suppressRefError: true})}
          className="w-full mt-0.5 rounded-md text-base overflow-auto sm:text-sm"
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                key={`${item}${index}`}
                {...getItemProps({item, index})}
                className={clsx([
                  highlightedIndex === index ? 'bg-aside' : '',
                  selectedItem?.value === item.value ? 'text-subject' : '',
                  'bg-secondary text-primary cursor-pointer select-none py-2 pl-3 pr-9',
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
