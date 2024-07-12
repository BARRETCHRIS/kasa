import { ReactSVG } from 'react-svg';
import logoName from "../../assets/logoName.svg"
import './footer.scss'



function Footer() {
    return (
        <footer className="footer">
            <ReactSVG src={logoName} className="logo" />
            <p className="copyRight"> <i className="fa-regular fa-copyright"></i> 2020 Kasa, All rights reserved</p>
        </footer>
    )    
}

export default Footer