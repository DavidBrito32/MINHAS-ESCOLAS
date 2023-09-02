import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/index'

const PageLayout = () => {
    return (
        <>
            <Header />
            <Outlet /> {/* COMPONENTE QUE FAZ TROCAR AS ROTAS */}
        </>
    )
}

export default PageLayout;