// src/pages/Dashboard.jsx
import logo from '../uncincLogo.svg';
import { useAuth } from '../AuthContext'; // Zorg dat je de juiste path hebt
import Navbar from '../components/navbar';
import { Navigate } from 'react-router-dom';


export function Dashboard() {
    const { user } = useAuth();

    if (!user) { // check user ingelogd anders naar login
        return <Navigate to="/login" />;
    }
    
    return (
        <section>
            <div>
                <img src={logo} alt="logo unc inc" />
                <h1>Welkom op je dashboard, {user.username}</h1>
            </div>
            
            <Navbar/>
        </section>
    )
}

export default Dashboard;