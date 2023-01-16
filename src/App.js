//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Paper } from "@mui/material";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Registration from "./Components/Registration/Registration";
import SignUp from "./Components/Registration/Registration1";
import SignInSide from "./Components/Registration/SignIn";
import SignUp1 from './Components/Registration/Registration1 copy';
import MakeOffer from './Components/makeOffer';
import UploadDomains from './Components/UploadDomains';
import DomainsList from './Components/DomainsList';
import Negotiations from './Components/Negotiations';
import MadeOffer from './Components/madeOffer';
import Calculator from './Components/Calculator';
import Profile from './Components/Profile';
import Bidterms from './Components/Bidpurchaseterms';

function App() {
  return (

<>
  {/*<Paper sx={{minHeight: '100vh', backgroundImage: `url(https://www.ipfinternational.com/wp-content/uploads/2016/02/bg_about.jpg)`}}>*/}
    <div className="App">

      <Router>
     <>
     <Header/>
     <Routes>
     <Route path="/" exact element={<Home/>}/>
     <Route path="/home" exact element={<Home/>}/>
     <Route path="/login" exact element={<SignInSide/>}/>
     <Route path="/signup" exact element={<SignUp1/>}/>
     {<Route path="/makeOffer/:sdomain" element={<MakeOffer/>}/>}
     <Route path="/madeOffer/:nid" exact element={<MadeOffer/>}/>
     <Route path="/calculator" exact element={<Calculator/>}/>
     <Route path="/profile" exact element={<Profile/>}/>
     <Route path="/bid-purchase-terms/:sdomain/:price" exact element={<Bidterms/>}/>

     <Route path="/uploadDomains" exact element={<UploadDomains/>}/>
     <Route path="/domainsList" exact element={<DomainsList/>}/>
     <Route path="/negotiations" exact element={<Negotiations/>}/>
     </Routes>
     </>
      </Router>
    </div>
    {/*</Paper>*/}
    </>
  );
}

export default App;
