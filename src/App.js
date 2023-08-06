
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProductCarousel from './Components/ProductCarousel';
import ProfileCard from './Components/Profile';
import Card from './Components/Card';
import Useful from './Components/Useful';
function App() { 
  
  // Add more card data as needed


  return (
   <>
    <Navbar/>
    <ProfileCard/>
    <Useful/>
     <Card/>
    <ProductCarousel/>
    <Footer/>
   </>
  );
}

export default App;
