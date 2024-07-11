import { ReactSVG } from 'react-svg';
import logoName from "../../assets/logoName.svg"
import './Footer.css'



function Footer() {
    return (
        <footer className="footer">
            <ReactSVG src={logoName} className="logo-footer" />
            <p className="copyRight"> ©️ 2020 Kasa, All rights reserved</p>
        </footer>
    )    
}

export default Footer