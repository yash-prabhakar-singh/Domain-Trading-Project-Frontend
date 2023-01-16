import React from 'react';
//import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import UploadDomains from './Components/UploadDomains';
import reportWebVitals from './reportWebVitals';
import BasicTable from './Components/DomainsList';
import CustomizedTables from './Components/Negotiations';
import MakeOffer from './Components/makeOffer';
import SignUp from './Components/Registration/Registration1';
import SignUp1 from './Components/Registration/Registration1 copy';
import SignInSide from './Components/Registration/SignIn';
import { Provider } from 'react-redux';
import store from './store';

const root= document.getElementById('root');
//const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <Provider store={store}>
    {/*<UploadDomains/>*/}
    {/*<MakeOffer />*/}
    {<App/>}
    {/*<SignUp1/>*/}
    {/*<SignInSide />*/}
    </Provider>
  </React.StrictMode>,root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
