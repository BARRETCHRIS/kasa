import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../mainContent/HomeContent'
import Dwelling from '../mainContent/DwellingContent'
import About from '../mainContent/AboutContent'
import Error404 from '../mainContent/Error404';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
      children: [
        { index: true, element: <Home /> },
        { path: "kasa", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "accueil", element: <Home /> },
      ],
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
    <div className="wrapper">
      <Header/>
      <>
			<RouterProvider router={router}/>
		  </>
      <Footer/>
    </div>
  );
}

export default App;
