import packageJson from '../../package.json';

/** Object that contain all environment variables. */
const ENVIRONMENT_VARIABLES = {
  environmentName: process.env.REACT_APP_ENVIRONMENT_NAME as 'DEV' | 'PROD',
  instagramPage: process.env.REACT_APP_INSTAGRAM_PAGE as string,
  facebookPage: process.env.REACT_APP_FACEBOOK_PAGE as string,
  appName: process.env.REACT_APP_APPLICATION_NAME as string,
  baseUrlServer: process.env.REACT_APP_SERVER as string,
  baseUrl: process.env.REACT_APP_URL as string,
  version: packageJson.version,
  contact: {
    phone: process.env.REACT_APP_CONTACT_PHONE as string,
    mail: process.env.REACT_APP_CONTACT_MAIL as string
  },
  address: {
    postalCodeCity: process.env.REACT_APP_CONTACT_ADDRESS_POSTAL_CODE_CITY as string,
    street: process.env.REACT_APP_CONTACT_ADDRESS_STREET as string
  }
};

export default ENVIRONMENT_VARIABLES;
