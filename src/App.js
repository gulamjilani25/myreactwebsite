// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Myfolder/Home';
import About from './Myfolder/About';
import ContactUs from './Myfolder/ContactUs';
import News from './Myfolder/News';
import LandingPage from './Myfolder/LandingPage';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Test from './Myfolder/Test';
import AdditionalContentExample from './Myfolder/Test';
import Myaxiosdatalist from './Myfolder/Data';
import MapDemo from './Myfolder/Mapdemo';
import Mycharts from './Myfolder/Mychart';
import Counter from './Myfolder/Details';
import FormValidation from './Myfolder/Myform';
import Myparents from './Myfolder/Myparents';
import Myauthloginpage from './Myfolder/Myauthlogin';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (

    <Auth0Provider
      domain="dev-51yzf0n1h3srgftd.us.auth0.com"
      clientId="kb7emlbJdpxd08Hf7aGISqC2UyTGHPBv"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>

      <Router>
        <div className="App">
          <Routes>
            <Route path='/myauth' element={< Myauthloginpage />} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/aboutUS' element={<About />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/news' element={<News />} />
            <Route path='/test' element={<AdditionalContentExample />} />
            <Route path='/data' element={< Myaxiosdatalist />} />
            <Route path='/mapdemo' element={< MapDemo />} />
            <Route path='/graph' element={< Mycharts />} />
            <Route path='/details' element={< Counter />} />
            <Route path='/myform' element={<  FormValidation />} />
            <Route path='/myparent' element={<  Myparents />} />

          </Routes>
        </div>
      </Router>
    </Auth0Provider>

  );
}

export default App;
