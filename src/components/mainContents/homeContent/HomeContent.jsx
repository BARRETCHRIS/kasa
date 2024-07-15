import Banner from "../../banner/Banner";
import Gallery from '../../gallery/Gallery/Gallery';
// import RentalList from '../../rentalList/RentalList'
import './homeContent.scss';

function HomeContent() {
    return (
        <main className="home-content">
            <Banner />
            <Gallery />
            {/* <RentalList /> */}
        </main>
    )    
}

export default HomeContent