

const Link = ({route}) => {
    
    return (
        <div>
           <li class="mr-10 hover:bg-orange-400 rounded-sm p-2"> <a href={route.path}></a>{route.name}</li> 
        </div>
    );
};

export default Link;