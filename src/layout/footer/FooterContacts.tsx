import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { ENVIRONMENT_VARIABLES } from 'constant';

const FooterContacts = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='col-12 col-md-3 mt-3 mt-md-0'>
      <h6 className='mb-3 text-uppercase'>
        {t('common.contact')}
      </h6>
      <div className='d-flex mb-2'>
        <MdLocationOn className='mt-1' size={20} />
        <div className='ml-3'>
          {ENVIRONMENT_VARIABLES.appName}
          <br />
          {ENVIRONMENT_VARIABLES.address.street}
          <br />
          {ENVIRONMENT_VARIABLES.address.postalCodeCity}
        </div>
      </div>
      <a className='d-flex mb-2' role={'button'} href={`tel:${ENVIRONMENT_VARIABLES.contact.phone}`}>
        <MdPhone className='mt-1' />
        <div className='ml-3'>
          {ENVIRONMENT_VARIABLES.contact.phone}
        </div>
      </a>
      <a className='d-flex mb-2' role={'button'} href={`mailto:${ENVIRONMENT_VARIABLES.contact.mail}`}>
        <MdMail className='mt-1' />
        <div className='ml-3'>
          {ENVIRONMENT_VARIABLES.contact.mail}
        </div>
      </a>
    </div>
  );

};

export default FooterContacts;
