import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { ENVIRONMENT_VARIABLES } from 'constant';
import { useTranslation } from 'react-i18next';

const FooterSocialNetwork = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='col-12 col-md-3 mt-3 mt-md-0'>
      <h6 className='mb-3 text-uppercase'>
        {t('footer.socialNetwork.title')}
      </h6>
      <a 
        className='mr-2'
        href={ENVIRONMENT_VARIABLES.facebookPage} 
        title={ENVIRONMENT_VARIABLES.facebookPage} 
        target={'_blank'}>
        <FaFacebook size={27} />
      </a>
      <a 
        href={ENVIRONMENT_VARIABLES.instagramPage} 
        title={ENVIRONMENT_VARIABLES.instagramPage} 
        target={'_blank'}>
        <FaInstagram size={30} />
      </a>
    </div>
  );

};

export default FooterSocialNetwork;
