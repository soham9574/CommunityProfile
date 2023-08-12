import React from "react";
import Footer from './Footer';
import Navbar from './Navbar';
import ProductCarousel from './ProductCarousel';
import ProfileCard from './Profile';
import Card from './Card';
import Useful from './Useful';
function Finalpage(){
    return(
        <>
        <Navbar/>
    <ProfileCard/>
    <Useful/>
     <Card/>
    <ProductCarousel/>
    <Footer/>
    </>
    )
}
export default Finalpage;