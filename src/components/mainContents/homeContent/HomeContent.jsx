import Banner from "../../banner/Banner";
import Gallery from '../../gallery/Gallery/Gallery';
import './homeContent.scss';

function HomeContent() {
    return (
        <main className="home-content">
            <Banner />
            <Gallery />
        </main>
    )    
}

export default HomeContent