import logoName from "../../assets/logoName.svg"
import './header.scss'
import Nav from "./Nav"

function Header() {
    return (
        <header className="header">
            <img src={logoName} className="logo" alt="logo kasa, K A S A, où le premier A est remplacer par une maison"/>
            <Nav />
        </header>
    )    
}

export default Header