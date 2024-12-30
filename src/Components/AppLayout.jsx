import Navigation from './Navigation'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router'

const AppLayout = () => {
    return (
        <div className='flex flex-col justify-between'>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout
