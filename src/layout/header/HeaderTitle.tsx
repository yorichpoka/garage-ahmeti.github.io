import img from 'assets/images/jpg/img-1.jpg';
import { CSSProperties } from 'react';
import { useModule } from 'hooks';

const VARIABLES = {
  styles: {
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  } as CSSProperties
};

const HeaderTitle = () => {

  /** Hooks that get current location. */
  const { title, description } = useModule();

  return (
    <div className='app-headerTitle d-flex justify-content-center align-items-center' style={VARIABLES.styles}>
      <div>
        <h1 className='d-flex justify-content-center display-4 font-weight-bolder'>
          <span>
            {title}
          </span>
        </h1>
        <h3 className='d-flex justify-content-center'>
          <span>
            {description}
          </span>
        </h3>
      </div>
    </div>
  );

};

export default HeaderTitle;
