import {BaseButton} from '../Buttons/BaseButton';
import {CrossSvg} from "../SVGs";

const NotificationDismissButton: React.FC = () => (
    <BaseButton className="self-start">
      <CrossSvg className="h-4 w-4" />
    </BaseButton>
  );

export default NotificationDismissButton;
