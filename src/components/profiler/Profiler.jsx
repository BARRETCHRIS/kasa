import Rating from '../rating/Rating';
import Tags from '../tags/Tags';
import Toggle from '../toggle/Toggle'
import './profiler.scss';

function Profiler({ title, location, host, tags, rating, description, equipments}) {
    const [firstName, lastName] = host.name.split(' ')
    return (
        <section className="profiler">
            <article className="profiler_titles">
                <h2 className="profiler_titles_title">{title}</h2>
                <p className="profiler_titles_subtitle">{location}</p>
                <Tags tags={tags} />
            </article>
            <article className="profiler_host">
                <div className="profiler_host_wrap">
                    <p className="profiler_host_name">
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </p>
                    <img src={host.picture} alt={`${host.name}`} className='profiler_host_portrait' />
                </div>
                <Rating rating={rating} />
            </article>
            <article className='profiler_details'>
                <Toggle title="Description" content={description} halfWidth={true} />
                <Toggle title="Équipements" content={equipments} halfWidth={true} />
            </article>
        </section>
    );
}

export default Profiler;