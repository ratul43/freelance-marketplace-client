import React from 'react';
import Banner from './Banner';
import PopularCategories from './PopularCategories';
import AboutPlatform from './AboutPlatform';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularCategories></PopularCategories>
            <AboutPlatform></AboutPlatform>
        </div>
    );
};

export default Home;