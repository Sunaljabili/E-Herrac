import "./App.css";
import Header from "./components/Layout/Header/Header";
import {Outlet} from 'react-router-dom';
import Footer from "./components/Layout/Footer/Footer"

function App() {
  return (
   <>
   <Header/>
   <Outlet />
   <Footer/>
   </>
  );
}

export default App;
