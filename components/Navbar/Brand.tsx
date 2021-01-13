import KakieeLogo from '../shared/KakieLogo';

const Brand: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <KakieeLogo className="h-28 lg:h-32" />
      <h1 className="text-4xl lg:text-5xl text-primary font-bold">KAKIEE</h1>
    </div>
  );
};

export default Brand;
