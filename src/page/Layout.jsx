import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header/>
            <main className='layout-content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout