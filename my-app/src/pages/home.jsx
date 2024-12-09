// src/pages/home.jsx
import logo from '../uncincLogo.svg';


export function Home() {
    return (
        <section className="home">
            <article>
                <h1>Welkom bij</h1>
                <img src={logo} alt="logo unc inc" />
            </article>

            <a className="button" href="/login" aria-label="inloggen knop">Inloggen</a>
        </section>
    )
}

export default Home;