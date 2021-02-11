import {useTranslation} from './hooks/useTranslate';
import KakieeLogo from './KakieLogo';

interface BrandProps {
  logoClasses?: string;
  textClasses?: string;
}

const Brand: React.FC<BrandProps> = ({logoClasses, textClasses}) => {
  const {t} = useTranslation();

  return (
    <div className="flex flex-col items-center">
      <KakieeLogo className={logoClasses ? logoClasses : 'h-28 lg:h-32'} />
      <h1 className={textClasses ? textClasses : 'text-2xl lg:text-3xl text-primary font-bold'}>{t('brand.name')}</h1>
    </div>
  );
};

export default Brand;
