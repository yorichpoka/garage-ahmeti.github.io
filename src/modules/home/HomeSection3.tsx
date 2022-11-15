import imgJpg3 from 'assets/images/jpg/img-3.jpg';
import { memo } from 'react';

const HomeSection3 = () => (
  <div
    className='mb-5'
    style={{
      height: '60vh',
      backgroundImage: `url(${imgJpg3})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }} />
);

export default memo(HomeSection3);
