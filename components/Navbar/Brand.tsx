import {ReactComponent as KakieeIcon} from '../../statics/kakiee-logo.svg';

const Brand: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <KakieeIcon className="h-28 lg:h-32 w-auto" />
      <h1 className="text-4xl lg:text-5xl text-primary font-bold">KAKIEE</h1>
    </div>
  );
};

export default Brand;
