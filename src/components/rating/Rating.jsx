import './rating.scss';

function Rating({ rating }) {
    const stars = Array(5).fill(0).map((_, i) => (
        <i key={i} className={`fa-solid fa-star ${i < rating ? 'filled' : ' '}`}></i>
        
    ));
    return <div className="rating-stars">{stars}</div>;
}

export default Rating;