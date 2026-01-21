import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar.jsx';
import './App.css'
import NewsCarousel from './components/Carousel/';
import SecondaryNavbar from './components/SecondaryNavbar';
import NewsCard from './components/NewsCard.jsx';

function App() {

  return (
    <div>
      <NavbarComponent />
      <NewsCarousel />
      <SecondaryNavbar />
      <NewsCard />
      
    </div>
  )
}

export default App

/*
NOTES
Imports
Line 1 - import from CSS section of react bootstrap website on this path:  home/getting started/introduction
Line 4 - imports the Carousel folder which now contains the index.jsx and index.css files.  Do not need to specify file path further so long as folder contains a .jsx file.  Note folders are only required if the component comprises a .jsx and a .css file


*/