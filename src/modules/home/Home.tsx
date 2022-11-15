import { useTranslation } from 'react-i18next';
import { useSetTitleDocument } from 'hooks';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';
import HomeSection3 from './HomeSection3';
import HomeSection4 from './HomeSection4';
import './Home.scss';

const Home = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();
  /** Update title of document */
  useSetTitleDocument(t(''));

  return (
    <div className='app-home my-5 py-5'>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
    </div>
  );

};

export default Home;
