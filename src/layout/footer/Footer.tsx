import FooterSocialNetwork from './FooterSocialNetwork';
import FooterContacts from './FooterContacts';
import FooterHours from './FooterHours';
import FooterPages from './FooterPages';
import './Footer.scss';

const Footer = () => {

  return (
    <div className='app-footer'>
      <div className='container'>
        <div className='row'>
          <FooterHours />
          <FooterContacts />
          <FooterPages />
          <FooterSocialNetwork />
        </div>
      </div>
    </div>
  );

};

export default Footer;
