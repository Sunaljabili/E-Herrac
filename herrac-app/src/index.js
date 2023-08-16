import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Layout/Header/Navbar';
import AnaSəhifə from "./components/pages/AnaSəhifə/Index";
import Elanlar from "./components/pages/Elanlar/Index";
import Hərrac from "./components/pages/Hərrac/Index";
import Ödəniş from "./components/pages/Ödəniş/Index";
import Qanunvericilik from './components/pages/Qanunvericilik/Index'
import Haqqımızda from "./components/pages/Haqqımızda/Index";
import Əlaqə from "./components/pages/Əlaqə/Index";
import Footer from "./components/Layout/Footer/Footer";
import ErrorPage from "./components/pages/ErrorPage/Index";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route element={<Navbar/>}/>
          <Route path="/" element={<AnaSəhifə/>}/>
          <Route path="/anasəhifə" element={<AnaSəhifə/>}/>
          <Route path ="/elanlar" element={<Elanlar/>} />
          <Route path="/hərrac" element={<Hərrac/>}/>
          <Route path="/qanunvericilik" element={<Qanunvericilik/>}/>
          <Route path="/ödəniş" element={<Ödəniş/>}/>
          <Route path="/haqqımızda" element={<Haqqımızda/>}/>
          <Route path="/əlaqə" element={<Əlaqə/>}/>
          <Route element={<Footer/>}/>
          <Route/>
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>

  </StrictMode>
);


