import { ENVIRONMENT_VARIABLES } from 'constant';
import { MdPhone } from 'react-icons/md';

const HeaderPhone = () => (
  <div className='app-headerPhone'>
    <div className='container py-2 d-flex'>
      <a className='ml-auto' role={'button'} href={`tel:${ENVIRONMENT_VARIABLES.contact.phone}`}>
        <small>
          <MdPhone className='mr-1' /> {ENVIRONMENT_VARIABLES.contact.phone}
        </small>
      </a>
    </div>
  </div>
);

export default HeaderPhone;
