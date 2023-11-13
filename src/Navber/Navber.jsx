import React, { useState } from 'react';
import Link from '../Link/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars,  faXmark} from '@fortawesome/free-solid-svg-icons';


const Navber = () => {
    const routes = [  { id: 1, name: 'Home', path: '/', },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Not Found', path: '*' },
      ];
      const [open, setopen] =useState(false)
    // font awesome icone add 
    return (
        <nav> <div class="m-2" onClick={()=> setopen(!open)}> {open===true? 
            <FontAwesomeIcon icon={faXmark} > </FontAwesomeIcon>
            :  <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>}
    
    </div>
            <ul class={`lg:flex m-2 p-2 absolute duration-1000 bg-slate-400 rounded-lg ${open? "top-10":"-top-60"}`}>
            {
                routes.map(route=> <Link route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navber;