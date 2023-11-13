import React from 'react';
import Link from '../Link/Link';

const Navber = () => {
    const routes = [  { id: 1, name: 'Home', path: '/', exact: true },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Not Found', path: '*' },
      ];
      
    
    return (
        <nav>
            <ul class="lg:flex m-4">
            {
                routes.map(route=> <Link route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navber;