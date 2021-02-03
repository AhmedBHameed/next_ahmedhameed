import KakieeLogo from './KakieLogo';

interface BrandProps {
  logoClasses?: string;
  textClasses?: string;
}

const Brand: React.FC<BrandProps> = ({logoClasses, textClasses}) => {
  return (
    <div className="flex flex-col items-center">
      <KakieeLogo className={logoClasses ? logoClasses : 'h-28 lg:h-32'} />
      <h1 className={textClasses ? textClasses : 'text-4xl lg:text-5xl text-primary font-bold'}>KAKIEE</h1>
    </div>
  );
};

export default Brand;
