import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/useFetch';
import Slider from '../../slider/Slider';
import Profiler from '../../profiler/Profiler';
import Error404 from '../errorContent/Error404';
import './rentalContent.scss'

function RentalContent() {
    const rentals = useFetch(`${window.location.origin}/datas.json`);
    const { id } = useParams();

    let thisRental = null;

    if (rentals.fetchedData) {
        thisRental = rentals.fetchedData.find((rental) => rental.id === id);
    }

    console.log(thisRental);

    if (rentals.isLoading) {
        return <div>Chargement !!!</div>;
    }

    if (rentals.error || !thisRental) {
        return <Error404 />
    }

    return (
        <main className="rental-content">
            <Slider pictures={thisRental.pictures} />
            <Profiler
                title={thisRental.title}
                location={thisRental.location}
                host={thisRental.host}
                tags={thisRental.tags}
                rating={thisRental.rating}
                // details={thisRental.details}
                description={thisRental.description}
                equipments={thisRental.equipments}
            />
        </main>
    );
}

export default RentalContent;



// // import RentalDatas from "../../../datas/datas.json";
// import { useFetch } from '../../../utils/useFetch';
// import { useParams } from "react-router-dom";
// import './rentalContent.scss';

// function RentalContent() {
//     const rentals = useFetch(window.location.origin + '/datas.json');
//     const { id } = useParams();

//     let thisRental; 

// 	if (rentals.fetchedData) {
        
// 		thisRental = rentals.fetchedData.find(
// 			(rental) => rental.id === id
            
// 		)    
// 	}

//     // console.log(id)
//     console.log(thisRental);

//     if (rentals.isLoading) {
// 		return <div>Chargement !!!</div>
// 	}

//     if (rentals.error) {
// 		return <div>!!! BAD JOB !!!</div>
// 	}
    
//     if (!thisRental){
//         return <div>!!! BAD JOB !!!</div>
//     }else{
//         return (
//             <main className="rental-content">
//                 <section className="slider">
//                     {thisRental.pictures}
//                 </section>
//                 <section className="blurb">
//                     <article className="title">
//                         <h2>{thisRental.title}</h2>
//                         <p className="subtitle">{thisRental.location}</p>
//                     </article>
//                     <article className="host">
//                         <h3 className="name">{thisRental.host.name}</h3>
//                         <img src={thisRental.host.picture} alt="" className='host_portrait'/>
//                     </article>
//                     <article className='tags'>
//                         {thisRental.tags}
//                     </article>
//                     <article className='rating'>
//                         {thisRental.rating}
//                     </article>
//                     <article className='details'>

//                     </article>
//                 </section>   
//             </main>
//         )    
//     }
    
// }

// export default RentalContent