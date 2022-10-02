import React from 'react';

const Links = ({ route }) => {

    const { name } = route;
    return (
        <div>
            <li className='list-none mr-12 text-xl'><a href={route.path}>{name}</a></li>
        </div>
    );
};

export default Links;