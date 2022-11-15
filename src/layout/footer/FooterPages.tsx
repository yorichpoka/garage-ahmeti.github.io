import { ENVIRONMENT_VARIABLES, ROUTES } from 'constant';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FooterPages = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='col-12 col-md-3 mt-3 mt-md-0'>
      <h6 className='mb-3 text-uppercase'>
        {ENVIRONMENT_VARIABLES.appName}
      </h6>
      <div className='d-flex flex-column'>
        <Link to={ROUTES.path}>
          {t('home.home')}
        </Link>
        <Link to={ROUTES.CONTACT.path}>
          {t('contact.title')}
        </Link>
        <Link to={ROUTES.SERVICES.path}>
          {t('services.title')}
        </Link>
        <Link to={ROUTES.PRIVACY.path}>
          {t('privacy.title')}
        </Link>
      </div>
    </div>
  );

};

export default FooterPages;
