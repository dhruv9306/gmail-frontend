import {useState} from 'react';
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Main=()=>{

    const[openDrawer,setOpenDrawer] = useState(true);

    const toggleDrawer = () =>{
        setOpenDrawer(prevState=> !prevState);
    }

    return(
        <div>
            <Header toggleDrawer={toggleDrawer} />
            <Sidebar openDrawer={openDrawer}/>

        </div>
    ) 
    
}

export default Main;