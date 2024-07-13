import './nav.scss';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();

    const currentRoute = window.location.pathname;
    console.log(currentRoute);
    return (
        <nav className="nav">
        <ul className='nav_bar'>
            <li className={`nav_bar_item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/">Accueil</Link>
            </li>
            <li className={`nav_bar_item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about">&Agrave; Propos</Link>
            </li>
        </ul>
        </nav>
    );
}

export default Nav;


// import './nav.scss'
// import { Link } from 'react-router-dom'

// function Nav() {
//     return (
//         <nav className="nav">
//             <ul className='nav_bar'>
//                 <li className='nav_bar_item'>
//                    <Link to="/">Accueil</Link>
//                 </li>
//                 <li className='nav_bar_item'>
//                      <Link to="/about">&Agrave; Propos</Link>
//                 </li>
//             </ul>
//         </nav>
//     )    
// }

// export default Nav