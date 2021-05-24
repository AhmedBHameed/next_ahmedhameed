import {clsx} from '../../util/clsx';
import {KakieeLogoSvg} from "../SVGs";

interface KakieeLogoProps {
  className?: string;
}

const KakieeLogo: React.FC<KakieeLogoProps> = ({className}) => <KakieeLogoSvg className={clsx(['w-auto', className])} />;

export default KakieeLogo;
