import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const PhoneBar = () => {

    const [phone, setPhone] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoded = data.data.data;
                const phoneData = phonesLoded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1])
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone
                })
                setPhone(phoneData)
            })
    }, [])

    return (
        <div className='mt-9'>
            <h1 className='text-4xl'>Phone Bar Chart</h1>
            <BarChart width={500} height={400} data={phone} >
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default PhoneBar;