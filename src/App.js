import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Food from "./components/food/Food";
import { Texto } from "./components/texto/Texto";

// Import Images

import Mezcla from './assets/mezcla.jpg'
import Nispero from './assets/nispero.jpeg'
import Uvas from './assets/uvas.jpg'
import Pepinos from './assets/pepinos.jpg'
import Tomateras from './assets/tomateras.jpg'
import Footer from "./components/footer/Footer";
import Brecol from './assets/brecol.jpg'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Texto/>
      <Food bgImg1={Uvas} bgImg2={Mezcla}/>
      <Food bgImg={Brecol}/>
      <Food bgImg2={Nispero}  bgImg1={Pepinos} />
      <Footer/>    
    </>  
  );
}

export default App;
