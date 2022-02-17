import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ContactInfo from '../Components/homeComponents/ContactInfo';
import ShopSection from '../Components/homeComponents/ShopSection';

const HomeScreen = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <ShopSection/>
            <ContactInfo/>
            <Footer/>
        </div>
    )
}

export default HomeScreen