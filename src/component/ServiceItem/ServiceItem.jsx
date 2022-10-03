import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const ServiceItem = ({ service }) => {
    return (
        < div>
            <div className='flex mb-4'>
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <p className='ml-1 font-bold'>{service}</p>
            </div>

        </div >
    );
};

export default ServiceItem;



