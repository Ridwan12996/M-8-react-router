import React from 'react';

const Link = ({route}) => {
    
    return (
        <div>
           <li class="mr-10"> <a href={route.path}></a>{route.name}</li> 
        </div>
    );
};

export default Link;