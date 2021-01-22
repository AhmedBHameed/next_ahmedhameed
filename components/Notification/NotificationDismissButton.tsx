import CrossCircleIcon from '../../statics/cross.svg';
import {BaseButton} from '../Buttons/BaseButton';

const NotificationDismissButton: React.FC = () => {
  return (
    <BaseButton className="self-start">
      <CrossCircleIcon className="h-4 w-4" />
    </BaseButton>
  );
};

export default NotificationDismissButton;
