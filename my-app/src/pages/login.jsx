// src/pages/login.jsx
import logo from '../uncincLogo.svg';
import Navbar from '../components/navbar';
import { LoginForm } from '../components/loginForm';


export function Login() {
    const handleLogin = (username, password) => {
        console.log(`Ingelogd als: ${username}`);
        // Voeg verdere login-logica toe, zoals een API-aanroep.
    };
    
    return (
        <section>
            <div>
                <img src={logo} alt="logo unc inc" />
                <h1>Welkom terug!</h1>
            </div>

            <article>
                <LoginForm login={handleLogin} />
            </article>

            <Navbar/>
        </section>
    )   
}

export default Login;