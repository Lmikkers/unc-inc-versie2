import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../AuthContext';

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login, logout } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'uncinc' && password === 'letmein') {
            login(username); // Stel gebruiker in
            navigate("/dashboard"); // Redirect naar dashboard
            console.log(`je bent ingelogd als ${username}`)
        } else {
            alert('Verkeerde gegevens');
        }
    };

    if (user) {
        return (
          <div className='inlogMessage'>
            <h2>U bent ingelogd als {user.username}</h2>

            <button onClick={() => {logout(); navigate('/login');}}>Uitloggen</button>
          </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Gebruikersnaam</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                placeholder="Gebruikersnaam"
                required
            />
            <label htmlFor="password">Wachtwoord</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Wachtwoord"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
}
