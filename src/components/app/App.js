
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../mainContent/HomeContent'
import Dwelling from '../mainContent/DwellingContent'
import About from '../mainContent/AboutContent'
import Error404 from '../mainContent/Error404';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: "/Kasa",
		element: <Home />
	},
	{
		path: "/dwelling/:id",
		element: <Dwelling />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error404 />
	},
]);

function App() {
  return (
    <div className="Wrapper">
      <Header/>
      <>
			<RouterProvider router={router}/>
		  </>
      <Footer/>
    </div>
  );
}

export default App;
