import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/scss/index.scss';
import 'constant';
import 'config';
import App from 'app';

ReactDOM
  .createRoot(document.getElementById('app') as any)
  .render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
