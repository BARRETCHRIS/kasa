import './tags.scss';

function Tags({ tags }) {
    return (
        <p className='tags'>
            {tags && tags.map((tag, index) => (
                <span key={index} className='tags_tag'>{tag}</span>
            ))}
        </p>
    );
}

export default Tags;