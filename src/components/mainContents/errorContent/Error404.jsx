import { Link } from 'react-router-dom';
import './error404.scss';

function Error404() {
    return (
        <main className="error">
            <p className="error_nbr">404</p>
            <p className="error_msg">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error_linkBack">Retourner sur la page d’accueil</Link>
        </main>
    )    
}

export default Error404