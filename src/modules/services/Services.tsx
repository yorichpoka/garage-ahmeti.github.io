import { useTranslation } from 'react-i18next';
import { useSetTitleDocument } from 'hooks';
import { memo } from 'react';
import './Services.scss';

const Services = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();
  /** Update title of document */
  useSetTitleDocument(t('services.title'));

  return (
    <div className='container my-5'>
      <div className='app-services'>
        {t('services.title')}
      </div>
    </div>
  );

};

export default memo(Services);
