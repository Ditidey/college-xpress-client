import React from 'react';

const SecTitle = ({title, subtitle}) => {
    return (
        <div className='w-[95%] mx-auto'>
            <h2 className='text-4xl font-serif font-bold text-blue-800 text-center'>{title}</h2>
            <p className='text-xl font-semibold text-center'>{subtitle}</p>
        </div>
    );
};

export default SecTitle;