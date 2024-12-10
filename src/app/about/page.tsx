import React from 'react'
import AboutHero from './AboutHero'
import AboutSection from './AboutSection'
import AboutPopularProduct from './AboutPopularProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page