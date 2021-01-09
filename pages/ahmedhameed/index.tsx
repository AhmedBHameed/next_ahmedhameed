import {NextPage} from 'next';
import {useRouter} from 'next/router';
import en from '../../locales/en.json';
import Navbar from '../../components/Navbar/Navbar';

const AhmedHameed: NextPage = () => {
  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? en : en;

  return (
    <>
      <Navbar />
    </>
  );
};

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

export default AhmedHameed;
