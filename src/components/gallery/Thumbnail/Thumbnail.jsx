import { Link } from 'react-router-dom';
import './thumbnail.scss';

function Thumbnail({ link, cover, title }) {
    return (
        <article className='thumbnail'>
            <Link to={link}>
                <div className="image-wrapper">
                    <img src={cover} alt={title} className="thumbnail-image" />
                    <h3 className="thumbnail-title">{title}</h3>
                </div>
            </Link>    
        </article>
    )
}

export default Thumbnail