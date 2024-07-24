import './banner.scss'
import { useLocation } from 'react-router-dom';

export default function Banner() {

	const location = useLocation();

	const aboutPage = location.pathname === '/about';

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
		</section>
	)
}