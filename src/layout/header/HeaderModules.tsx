import { ENVIRONMENT_VARIABLES, ROUTES } from 'constant';
import { Link, useLocation } from 'react-router-dom';
import img from 'assets/images/png/img-1.png';
import { Nav, Navbar } from 'react-bootstrap';

const VARIABLES = {
  navbarElementsId: 'navbarElementsId'
};

const HeaderModules = () => {

  /** Hooks that get current location. */
  const { pathname } = useLocation();

  return (
    <div className='app-headerModules py-4'>
      <div className='container'>
        <Navbar className='p-0' expand='md' variant='dark'>
          <Navbar.Brand title={ENVIRONMENT_VARIABLES.appName} as={Link} to={ROUTES.path()} className='mb-3 mb-md-0'>
            <img src={img} alt={ENVIRONMENT_VARIABLES.appName} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={VARIABLES.navbarElementsId} />
          <Navbar.Collapse id={VARIABLES.navbarElementsId}>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to={ROUTES.path()} className={`rounded px-4 mr-1 ${pathname === ROUTES.path() && 'active'} `}>
                Acceuil
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.SERVICES.path()} className={`rounded px-4 mr-1 ${pathname === ROUTES.SERVICES.path() && 'active'} `}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to={ROUTES.CONTACT.path()} className={`rounded px-4 ${pathname === ROUTES.CONTACT.path() && 'active'} `}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );

};

export default HeaderModules;
