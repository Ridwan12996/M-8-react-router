import React, { useState } from 'react';
import Link from '../Link/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars,  faXmark} from '@fortawesome/free-solid-svg-icons';


const Navber = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/', exact: true },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'NotFound', path: '*' },
      ];
      
      
      const [open, setopen] =useState(false)
    // font awesome icone add 
    return (
        <nav> <div class="m-2 text-xxl border w-7 rounded-lg px-1 bg-slate-100" onClick={()=> setopen(!open)}> {open===true? 
            <FontAwesomeIcon icon={faXmark} > </FontAwesomeIcon>
            :  <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>}
    
    </div>
            <ul class={`lg:flex m-2 p-2 absolute font-semibold duration-1000 bg-slate-300 rounded-lg ${open? "top-10":"-top-60"}`}>
            {
                routes.map(route=> <Link route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navber;