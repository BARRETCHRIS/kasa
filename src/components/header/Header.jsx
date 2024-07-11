import logoName from "../../assets/logoName.svg"
import './Header.css'

function Header() {
    return (
        <header className="header">
            <img src={logoName} className="logo-header" alt="logo kasa, K A S A, où le premier A est remplacer par une maison"/>
        </header>
    )    
}

export default Header