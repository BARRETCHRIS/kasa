import { useFetch } from '../../../utils/useFetch';
import Thumbnail from "../Thumbnail/Thumbnail";
import './gallery.scss'

function Gallery() {
    const rentals = useFetch(window.location.origin + '/datas.json');

    return (
        <section className='gallery'>
            {rentals.fetchedData && rentals.fetchedData.map((rental) => 
                
                <Thumbnail
                    key={rental.id}
                    link={`/rental/${rental.id}`}
                    title={rental.title}
                    cover={rental.cover}
                />
            )}
        </section>
    )
}

export default Gallery;

