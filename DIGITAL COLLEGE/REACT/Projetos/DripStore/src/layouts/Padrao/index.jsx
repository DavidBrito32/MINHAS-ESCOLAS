import { Outlet } from "react-router-dom";
import Header from "../../components/Header";


const Padrao = () => {
    return (
        <>  
        <Header />
            <Outlet />
        </>
    )
}

export default Padrao;