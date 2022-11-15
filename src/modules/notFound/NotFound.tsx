import { useTranslation } from 'react-i18next';
import { useSetTitleDocument } from 'hooks';
import './NotFound.scss';

const NotFound = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();
  /** Update title of document */
  useSetTitleDocument(t('notFound.title'));

  return (
    <div className='container my-5'>
      <div className='app-notFound'>
        <h1>
          {t('notFound.title')}
        </h1>
        <p>
          {t('notFound.description')}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
