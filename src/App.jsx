import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar.jsx';
import './App.css'
import NewsCarousel from './components/Carousel/';

function App() {

  return (
    <div>
      <NavbarComponent />
      <NewsCarousel />
      
    </div>
  )
}

export default App

/*
NOTES
Imports
Line 1 - import from CSS section of react bootstrap website on this path:  home/getting started/introduction
Line 4 - imports the Carousel folder which now contains the index.jsx and index.css files


*/