import RentalDatas from "../../../datas/datas.json";
import Thumbnail from "../Thumbnail/Thumbnail";
import './gallery.scss';

function Gallery() {
    const rentals = RentalDatas;
    console.log(rentals);

    return (
        <section className='gallery'>
            {RentalDatas.map((rental) =>{
                return (
                    <Thumbnail
                        key={rental.id}
                        link={`/rental/{$rental.id}`}
                        title={rental.title}
                        cover={rental.cover}
                    />
                )
            })}
        </section>
    );   
}

export default Gallery

// import { useFetch } from '../../../utils/useFetch';
// import Thumbnail from "../Thumbnail/Thumbnail";
// import './gallery.scss'

// function Gallery() {
//     const rentals = useFetch(window.location.origin + '/datas.json');

//     return (
//         <section className='gallery'>
//             {rentals.fetchedData.map((rental) => (
//                 return (
//                     <Thumbnail
//                         key={rental.id}
//                         link={`/rental/${rental.id}`}
//                         title={rental.title}
//                         cover={rental.cover}
//                     />
//                 )
//             ))}
//         </section>
//     )
// }

// export default Gallery;

