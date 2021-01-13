import KakieeIcon from '../../statics/kakiee-logo.svg';
import {clsx} from '../../util/clsx';

interface KakieeLogoProps {
  className?: string;
}

const KakieeLogo: React.FC<KakieeLogoProps> = ({className}) => {
  return <KakieeIcon className={clsx(['w-auto', className])} />;
};

export default KakieeLogo;
