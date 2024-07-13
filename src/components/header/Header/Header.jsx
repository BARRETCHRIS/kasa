import logoName from "../../../assets/logoName.svg"
import './header.scss'
import Nav from "../Nav/Nav"

function Header() {
    return (
        <header className="header">
            <h1 className="first-title">
                <img src={logoName} className="logo" alt="logo kasa, K A S A, où le premier A est remplacer par une maison" aria-label="Kasa, 10ans d'expérience dans la location entre praticuliers"/>
            </h1>
            <Nav />
        </header>
    )    
}

export default Header