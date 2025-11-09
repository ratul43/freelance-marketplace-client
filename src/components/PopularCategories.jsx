import React from 'react';
import PopularCard from './PopularCard';

const PopularCategories = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto my-4'>
                <h1 className='text-center my-7 text-3xl'>Top Categories</h1>
                <div className='grid lg:grid-cols-3 grid-cols-2 gap-3'>
             <PopularCard></PopularCard>

                </div>
            </div>
        </div>
    );
};

export default PopularCategories;