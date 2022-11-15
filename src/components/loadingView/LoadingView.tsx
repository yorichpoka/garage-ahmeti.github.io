import { Spinner } from 'react-bootstrap';
import { memo } from 'react';

const LoadingView = () => (
  <div className='app-loadingView my-5 d-flex justify-content-center align-items-center'>
    <Spinner animation='grow' role='status' />
  </div>
);

export default memo(LoadingView);
