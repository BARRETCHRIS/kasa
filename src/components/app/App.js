import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../header/Header/Header';
import Footer from '../footer/Footer';
import Home from '../mainContents/HomeContent';
import Dwelling from '../mainContents/DwellingContent';
import About from '../mainContents/AboutContent';
import Error404 from '../mainContents/errorContent/Error404';
import './app.scss';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
			{/* Redirections */}
			<Route path="/Kasa" element={<Navigate to="/" />} />
			<Route path="/home" element={<Navigate to="/" />} />
			<Route path="/accueil" element={<Navigate to="/" />} />
			<Route path="/apropos" element={<Navigate to="/" />} />

			{/* Routes normales */}
			<Route path="/" element={<Home />}/>
			<Route path="/dwelling/:id" element={<Dwelling />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



// import Header from '../header/Header';
// import Footer from '../footer/Footer';
// import Home from '../mainContent/HomeContent'
// import Dwelling from '../mainContent/DwellingContent'
// import About from '../mainContent/AboutContent'
// import Error404 from '../mainContent/Error404';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './app.scss'

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "kasa", element: <Home /> },
//         { path: "home", element: <Home /> },
//         { path: "accueil", element: <Home /> },
//       ],
// 	},
// 	{
// 		path: "/dwelling/:id",
// 		element: <Dwelling />
// 	},
// 	{
// 		path: '/about',
// 		element: <About />
// 	},
// 	{
// 		path: "*",
// 		element: <Error404 />
// 	},
// ]);

// function App() {
//   return (
//     <div className="wrapper">
//       <Header/>
//       <>
// 			<RouterProvider router={router}/>
// 		  </>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
