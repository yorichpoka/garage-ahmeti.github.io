import { useTranslation } from 'react-i18next';

const FooterHours = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='col-12 col-md-3'>
      <h6 className='mb-3 text-uppercase'>
        {t('contact.hours')}
      </h6>
      <div className='mb-2'>
        <div className='font-weight-bolder'>
          {t('contact.from')} :
        </div>
        <div className='font-italic'>
          07:30 - 18:30
        </div>
      </div>
      <div>
        <div className='font-weight-bolder'>
          {t('contact.to')} :
        </div>
        <div className='font-italic'>
          09:00 - 17:00
        </div>
      </div>
    </div>
  );

};

export default FooterHours;
