import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';


const Price = ({ price }) => {
    const { serviceList } = price

    return (
        <div className='bg-purple-500 px-6 py-12 rounded-md'>
            <h1>
                <span className='text-6xl font-bold'>${price.price}</span>
                <span className='text-2xl font-bold'>/mon</span>
            </h1>
            <h3 className='text-3xl font-bold'>{price.name}</h3>
            {
                serviceList.map((service, idx) => <ServiceItem key={idx} service={service} />)
            }
            <button className='font-bold bg-green-400 py-2 w-full rounded-md text-xl'>Buy Now</button>
        </div>
    );
};

export default Price;