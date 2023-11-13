

const Link = ({route}) => {
    
    return (
        <div>
           <li class="mr-10 hover:bg-slate-200 rounded-lg p-2"> <a href={route.path}></a>{route.name}</li> 
        </div>
    );
};

export default Link;