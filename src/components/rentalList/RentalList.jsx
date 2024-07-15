import RentalsDatas from '../../datas/datas.json'
import './rentalList.scss';

function RentalList(){
    return (
        <section className='gallery'>
            {RentalsDatas.map((rental) => {
                // console.log(rental.title);
                return (
                    <article className='card'><p>{rental.title}</p></article>
                )
                
            })}
            {/* {RentalsDatas.forEach((rental) => {
                console.log(rental.title);
                <article className='card'><p>{rental.title}</p></article>
            })} */}
            <article className='card'><p>Test</p></article>

        </section>
    );
}

export default RentalList;