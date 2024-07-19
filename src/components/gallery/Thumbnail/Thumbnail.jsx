import { Link } from 'react-router-dom';
import './thumbnail.scss';

function Thumbnail({ link, cover, title }) {
    return (
        <article className='thumbnail'>
            <Link to={link} alt={title} className="thumbnail_link">
                <img src={cover} alt={title} className="thumbnail_link_img" />
                <h3 className="thumbnail_link_title">{title}</h3>
            </Link>    
        </article>
    )
}

export default Thumbnail