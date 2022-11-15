import { useTranslation } from 'react-i18next';
import { useSetTitleDocument } from 'hooks';
import './Privacy.scss';

const Privacy = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();
  /** Update title of document */
  useSetTitleDocument(t('privacy.title'));

  return (
    <div className='container my-5'>
      <div className='app-privacy'>
        {t('privacy.title')}
      </div>
    </div>
  );

};

export default Privacy;
