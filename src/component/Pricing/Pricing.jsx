import React from 'react';
import Price from '../Price/Price';

const Pricing = () => {

    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, serviceList: [
                'Full free',
                'Life Time Acess',
                'All video free',
                'All Time Learn',
                'Qulity Best',
                'Best Learn Video'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, serviceList: [
                'Medium',
                'Life Time Acess',
                'All video free',
                'All Time Learn',
                'Qulity Best',
                'Best Learn Video'
            ]
        },
        {
            id: 3, name: 'Primum', price: 19.99, serviceList: [
                'Primum',
                'Life Time Acess',
                'All video free',
                'All Time Learn',
                'Qulity Best',
                'Best Learn Video'
            ]
        },
        {
            id: 4, name: 'Platinam', price: 29.99, serviceList: [
                'Platinam',
                'Life Time Acess',
                'All video free',
                'All Time Learn',
                'Qulity Best',
                'Best Learn Video'
            ]
        },
    ]

    return (
        <div className=''>
            <h1 className='text-5xl font-bold bg-indigo-300 text-white p-12'>Best Deal of the Town</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 mt-6 gap-6 m-4'>
                {
                    pricingOptions.map(price => <Price key={price.id} price={price} />)
                }
            </div>
        </div>
    );
};

export default Pricing;